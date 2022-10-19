import React from 'react';
import ReactDOM from 'react-dom/client';
import { PictureApp } from '../src/PictureApp';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PictureApp></PictureApp>
    </React.StrictMode>
);