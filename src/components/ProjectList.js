import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, CardMedia } from '@mui/material';

const projects = [
  {
    title: 'Project 1',
    description: 'A short description of Project 1.',
    image: 'path_to_image_1',
    link: 'https://github.com/yourproject1',
  },
  {
    title: 'Project 2',
    description: 'A short description of Project 2.',
    image: 'path_to_image_2',
    link: 'https://github.com/yourproject2',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <Container sx={{ padding: '80px 20px' }} id="projects">
      <Typography variant="h2" align="center" gutterBottom sx={{ marginBottom: '40px' }}>
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 10,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{
                  objectFit: 'cover',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer" // Added for security
                  sx={{
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#FF5722',
                    },
                  }}
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
