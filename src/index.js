import React from 'react';
import { createRoot } from 'react-dom/client';
import './CSS/styles.css';
import App from './App'; 



// Set up the React root and render the App component into the 'app' element in the DOM
const container = document.getElementById('app'); 
const root = createRoot(container);
root.render(<App />);
