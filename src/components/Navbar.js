import React, { useState, useEffect, useCallback } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, useMediaQuery, IconButton, Drawer } from '@mui/material';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Detect scroll to add shadow effect when scrolled
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Media query for mobile responsiveness
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Handle Drawer open/close
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const navbarLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled ? '#333' : 'transparent',
          boxShadow: isScrolled ? '0px 4px 12px rgba(0, 0, 0, 0.2)' : 'none',
          transition: 'all 0.3s ease-in-out',
          zIndex: 9999,
          padding: '10px 0',
        }}
      >
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography
              variant="h6"
              sx={{
                color: '#fff',
                fontWeight: '600',
                cursor: 'pointer',
                letterSpacing: '1px',
              }}
            >
              Ashish Portfolio
            </Typography>

            {/* Desktop Navbar Links */}
            {!isMobile ? (
              <Box sx={{ display: 'flex', gap: '30px' }}>
                {navbarLinks.map(({ name, to }) => (
                  <Link key={to} to={to} smooth={true} duration={500} offset={-70}>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Button
                        sx={{
                          color: '#fff',
                          fontWeight: '600',
                          textTransform: 'none',
                          '&:hover': {
                            color: '#00BFAE', // Soft teal accent
                            borderBottom: '2px solid #00BFAE',
                          },
                        }}
                      >
                        {name}
                      </Button>
                    </motion.div>
                  </Link>
                ))}
              </Box>
            ) : (
              <IconButton
                onClick={() => toggleDrawer(true)}
                sx={{
                  color: '#fff',
                  fontSize: '30px',
                  '&:hover': { backgroundColor: 'transparent' },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer Menu for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250, padding: '20px', backgroundColor: '#333', height: '100%' }}>
          <Typography variant="h6" sx={{ color: '#fff', marginBottom: '20px' }}>
            Ashish Portfolio
          </Typography>
          <Box>
            {navbarLinks.map(({ name, to }) => (
              <Link key={to} to={to} smooth={true} duration={500} offset={-70} onClick={() => toggleDrawer(false)}>
                <Button
                  sx={{
                    color: '#fff',
                    fontWeight: '600',
                    textTransform: 'none',
                    width: '100%',
                    marginBottom: '15px',
                    '&:hover': { color: '#00BFAE' },
                  }}
                >
                  {name}
                </Button>
              </Link>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
