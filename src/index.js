import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './components/app/app';

// ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(<App />);