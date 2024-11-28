import { GlobalStyles } from '@mui/material';

const globalCSS = (
  <GlobalStyles
    styles={{
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: "'Poppins', sans-serif",
      },
      body: {
        backgroundColor: '#f4f4f4', // Background for the page
        overflowX: 'hidden', // Prevent horizontal scrolling
      },
      html: {
        scrollBehavior: 'smooth',
      },
      img: {
        maxWidth: '100%',
        height: 'auto',
      },
      a: {
        textDecoration: 'none',
        color: 'inherit',
      },
    }}
  />
);

export default globalCSS;
