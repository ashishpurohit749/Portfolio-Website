import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: { xs: '15px', sm: '20px' },  // Adjusts padding for smaller screens
        position: 'relative',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      {/* Copyright Text */}
      <Typography 
        variant="body2" 
        sx={{ marginBottom: '10px', fontSize: { xs: '12px', sm: '14px', md: '16px' } }} // Adjust font size based on screen width
      >
        © 2024 Ashish Purohit. All rights reserved.
      </Typography>

      {/* Social Icons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <IconButton
            sx={{
              color: '#fff',
              fontSize: { xs: '24px', sm: '28px', md: '30px' }, // Adjust icon size for responsiveness
              '&:hover': { color: '#00BFAE' },
            }}
          >
            <GitHubIcon />
          </IconButton>
        </a>

        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <IconButton
            sx={{
              color: '#fff',
              fontSize: { xs: '24px', sm: '28px', md: '30px' }, // Adjust icon size for responsiveness
              '&:hover': { color: '#00BFAE' },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
