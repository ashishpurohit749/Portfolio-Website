import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import axios from 'axios';
import { Edit, Delete } from '@mui/icons-material'; // Import icons

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
  });
  const [editProject, setEditProject] = useState(null); // Track project being edited
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);

  // Fetch projects from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/projects').then((response) => {
      setProjects(response.data.data);
    });
  }, []);

  // Handle dialog open/close
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewProject({ title: '', description: '', image: '', link: '' });
    setEditProject(null); // Reset edit project when dialog closes
  };

  // Handle form input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  // Submit new project
  const handleAddProject = () => {
    axios
      .post('http://localhost:5000/api/projects', newProject)
      .then((response) => {
        setProjects([...projects, response.data.data]); // Add new project to state
        handleClose();
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to add project');
      });
  };

  // Handle right-click and open context menu
  const handleRightClick = (event, project) => {
    event.preventDefault(); // Prevent the default right-click menu
    setAnchorEl(event.currentTarget); // Set the position for the context menu
    setCurrentProject(project); // Store the current project for deletion or editing
  };

  // Close context menu
  const handleCloseContextMenu = () => setAnchorEl(null);

  // Handle delete project
  const handleDeleteProject = () => {
    axios
      .delete(`http://localhost:5000/api/projects/${currentProject.id}`)
      .then(() => {
        setProjects(projects.filter((project) => project.id !== currentProject.id));
        handleCloseContextMenu(); // Close the context menu
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to delete project');
      });
  };

  // Handle open the update dialog
  const handleUpdateProject = () => {
    setEditProject(currentProject); // Set the project to be edited
    setNewProject(currentProject); // Pre-fill the form with the current project data
    handleOpen(); // Open the dialog
    handleCloseContextMenu(); // Close the context menu
  };

  // Handle submit the updated project
  const handleUpdateSubmit = () => {
    axios
      .put(`http://localhost:5000/api/projects/${newProject.id}`, newProject)
      .then((response) => {
        const updatedProjects = projects.map((project) =>
          project.id === response.data.data.id ? response.data.data : project
        );
        setProjects(updatedProjects); // Update the project in the state
        handleClose(); // Close the dialog
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to update project');
      });
  };

  return (
    <Container sx={{ padding: '80px 20px' }} id="projects">
      <Typography variant="h2" align="center" gutterBottom sx={{ marginBottom: '40px' }}>
        My Projects
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen} sx={{ marginBottom: '20px' }}>
        Add New Project
      </Button>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card onContextMenu={(e) => handleRightClick(e, project)}>
              <CardMedia component="img" height="400" image={project.image} alt={project.title} />
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography>{project.description}</Typography>
                <Button variant="contained" href={project.link} target="_blank" sx={{ marginTop: '10px' }}>
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add Project Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editProject ? 'Update Project' : 'Add New Project'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Title"
            name="title"
            fullWidth
            value={newProject.title}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Description"
            name="description"
            fullWidth
            value={newProject.description}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Image URL"
            name="image"
            fullWidth
            value={newProject.image}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Project Link"
            name="link"
            fullWidth
            value={newProject.link}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editProject ? handleUpdateSubmit : handleAddProject} variant="contained" color="primary">
            {editProject ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Context Menu for Deleting or Updating a Project */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseContextMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem
          onClick={handleDeleteProject}
          sx={{
            color: 'red',
            '&:hover': {
              backgroundColor: '#f8d7da',
            },
          }}
        >
          <IconButton edge="start" color="inherit" sx={{ marginRight: '10px' }}>
            <Delete />
          </IconButton>
          Delete Project
        </MenuItem>
        <MenuItem
          onClick={handleUpdateProject}
          sx={{
            color: 'blue',
            '&:hover': {
              backgroundColor: '#cce5ff',
            },
          }}
        >
          <IconButton edge="start" color="inherit" sx={{ marginRight: '10px' }}>
            <Edit />
          </IconButton>
          Update Project
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Projects;
