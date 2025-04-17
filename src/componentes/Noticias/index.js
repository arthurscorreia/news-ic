import React from 'react';
import './Noticias.css';

export default function Noticias({ title, description, imageUrl }) {
  return (
    <div className="col-12 mb-4">
    <div className="card flex-row h-100 shadow noticia-card">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="noticia-img"
        />
      )}
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="titulo">{title}</h5>
        <p className="texto-card">{description}</p>
      </div>
    </div>
  </div>
  );
}