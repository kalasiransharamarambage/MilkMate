import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { AnimalProvider } from './context/AnimalContext';
import ErrorBoundary from './components/ErrorBoundary';
import theme from './theme';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ErrorBoundary>
      <AnimalProvider>
        <App />
      </AnimalProvider>
    </ErrorBoundary>
  </ThemeProvider>
);
