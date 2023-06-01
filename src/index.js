import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contact from './Pages/ContactUsPage/Contact'
import Programs from './Pages/ProgramsPage/Programs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contact />
    <Programs/>
  </React.StrictMode>
);