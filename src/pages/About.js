import React from 'react';
import { Container, Typography, Avatar, Box, Grid } from '@mui/material';
import profileImage from '../assets/images/Ashish.jpg';
import "../App.css";

const About = () => {
    return (
        <Container sx={{ padding: { xs: '60px 20px', sm: '80px 20px' } }} id="about">
            <Typography variant="h2" align="center" gutterBottom>
                About Me
            </Typography>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                {/* Avatar section */}
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Avatar
                            alt="Ashish Purohit Profile Picture"
                            src={profileImage}
                            sx={{
                                width: { xs: 150, sm: 200 }, // Responsive width
                                height: { xs: 150, sm: 200 }, // Responsive height
                                border: '5px solid #4CAF50',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                marginBottom: '30px',
                            }}
                            className="avatar-hover" // Adding the class for hover effect
                        />
                    </Box>
                </Grid>

                {/* Text section */}
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h4" paragraph>
                        Hi, I'm Ashish Purohit, a passionate software developer with expertise in React.js, Node.js, and more.
                        I am dedicated to building scalable and efficient web applications that are easy to maintain.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        I enjoy tackling complex problems and finding elegant solutions. I'm always looking for new challenges and opportunities to grow in the tech industry.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
