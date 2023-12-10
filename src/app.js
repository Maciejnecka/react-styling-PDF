// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
// import './styles/styles.css';
import './styles/main.scss';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
