import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid, Paper, Snackbar } from '@mui/material';

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display a success message
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #6a11cb, #2575fc)', padding: '80px 0' }}>
      <Container sx={{ display: 'flex', justifyContent: 'center', padding: '0 20px' }} id="contact">
        <Paper
          sx={{
            width: '100%',
            maxWidth: '600px',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
            background: '#ffffff',
            transform: 'translateY(0)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-10px)', // Adds a floating effect
            },
          }}
        >
          <Typography variant="h2" align="center" sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#333', fontSize: { xs: '1.8rem', sm: '2.2rem' } }}>
            Get in Touch
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Your Name"
                  fullWidth
                  variant="outlined"
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '30px',
                    },
                    '& .MuiInputLabel-root': {
                      fontWeight: 'bold',
                    },
                  }}
                  aria-label="Your Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="outlined"
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '30px',
                    },
                    '& .MuiInputLabel-root': {
                      fontWeight: 'bold',
                    },
                  }}
                  aria-label="Email Address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '30px',
                    },
                    '& .MuiInputLabel-root': {
                      fontWeight: 'bold',
                    },
                  }}
                  aria-label="Message"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    padding: '15px',
                    textTransform: 'none',
                    fontSize: '16px',
                    borderRadius: '30px',
                    '&:hover': {
                      backgroundColor: '#FF5722',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Adding hover shadow
                    },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>

      {/* Snackbar for form submission success */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Thank you for reaching out! I will get back to you soon."
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </div>
  );
};

export default Contact;
