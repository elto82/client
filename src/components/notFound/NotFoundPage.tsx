import React from 'react';
import { useNavigate } from 'react-router-dom';
import './notFound.css';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <button onClick={handleHomeClick}>Ir al inicio</button>
    </div>
  );
};

export default NotFoundPage;