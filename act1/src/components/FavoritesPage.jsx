import React from 'react';
import { useLocation } from 'react-router-dom';

const FavoritesPage = () => {
  const { state } = useLocation();
  const favorites = state?.favorites || [];

  return (
    <div className="container">
      <h1 className="my-4">Mis Favoritos</h1>
      {favorites.length > 0 ? (
        <ul className="list-group">
          {favorites.map((book) => (
            <li key={book.id} className="list-group-item">
              <strong>{book.title}</strong> - {book.author}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes libros en favoritos.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
