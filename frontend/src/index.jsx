import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import App from './main/App.jsx'

const root = ReactDOMClient.createRoot(document.getElementById('app'))
.render(<App />);