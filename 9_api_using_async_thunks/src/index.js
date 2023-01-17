import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import 'index.css';

const el = document.createElementId('root');
const root = createRoot(el);

root.rander(<App/>);