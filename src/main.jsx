import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // เพิ่มการนำเข้า BrowserRouter
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* ห่อแอปพลิเคชันด้วย BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);

