// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: import CSS for styling
import App from './App';
import process from 'process';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
