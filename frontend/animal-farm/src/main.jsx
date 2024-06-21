import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AnimalProvider } from './context/AnimalContext';
import ErrorBoundary from './components/ErrorBoundary';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ErrorBoundary>
        <AnimalProvider>
            <App />
        </AnimalProvider>
    </ErrorBoundary>
);
