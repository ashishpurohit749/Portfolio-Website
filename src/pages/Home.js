import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import resume from '../assets/Ashish Resume.pdf';

const Home = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(45deg, #4CAF50, #FF5722)',
        color: 'white',
        padding: '0 10px',
      }}
    >
      <Container>
        <Typography variant="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h3" gutterBottom>
          I'm Ashish Purohit, a passionate software developer.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          href={resume}
          download="Ashish_Resume.pdf"
          sx={{
            marginTop: '20px',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: '#FF5722',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            },
          }}
          aria-label="Download My Resume"
        >
          Download Resume
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
