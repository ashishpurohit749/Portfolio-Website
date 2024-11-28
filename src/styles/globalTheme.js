import { createTheme } from '@mui/material/styles';

const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green for primary actions
    },
    secondary: {
      main: '#FF5722', // Orange for secondary actions
    },
    background: {
      default: '#f4f4f4', // Light grey background for the page
    },
    text: {
      primary: '#333',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif", // Modern font
    h1: {
      fontWeight: 700,
      fontSize: '4rem',
      color: '#333',
    },
    h2: {
      fontWeight: 600,
      fontSize: '3rem',
      color: '#444',
    },
    h3: {
      fontWeight: 500,
      fontSize: '2.5rem',
      color: '#555',
    },
    body1: {
      fontSize: '1.125rem', // Slightly larger body text
      color: '#666',
      lineHeight: '1.8', // More line spacing for readability
    },
    body2: {
      fontSize: '1rem',
      color: '#777',
    },
  },
});

export default globalTheme;
