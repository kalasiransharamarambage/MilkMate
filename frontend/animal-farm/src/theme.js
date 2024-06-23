import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green color
    },
    secondary: {
      main: '#FF5722', // Orange color
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

export default theme;
