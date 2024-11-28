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
        padding: '20px',
        position: 'relative',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        boxSizing: 'border-box',
        '@media (max-width: 600px)': {
          padding: '15px',
        },
      }}
    >
      <Typography variant="body2" sx={{ marginBottom: '10px' }}>
        © 2024 Ashish Purohit. All rights reserved.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <IconButton sx={{ color: '#fff' }}>
            <GitHubIcon />
          </IconButton>
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <IconButton sx={{ color: '#fff' }}>
            <LinkedInIcon />
          </IconButton>
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
