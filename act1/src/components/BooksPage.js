import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import books from '../data/books';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/bookpage.css'; 

const BooksPage = ({ cart, setCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]); // State to manage favorite books
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setTimeout(() => {
        setFilteredBooks(books);
        setLoading(false);
      }, 1000);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const searchBooks = () => {
      const result = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.isbn.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(result);
    };

    searchBooks();
  }, [searchTerm]);

  const handleAddToCart = (book) => {
    if (!cart.some((item) => item.id === book.id)) {
      setCart([...cart, book]);
    } else {
      alert('Este libro ya está en el carrito.');
    }
  };

  const goToCart = () => {
    navigate('/cart'); // Redirige a la página del carrito
  };

  // Toggle a book in the favorites list
  const handleFavorite = (book) => {
    if (favorites.some((item) => item.id === book.id)) {
      setFavorites(favorites.filter((item) => item.id !== book.id)); // Remove from favorites
    } else {
      setFavorites([...favorites, book]); // Add to favorites
    }
  };

  const goToFavorites = () => {
    navigate('/favorites', { state: { favorites } }); // Pass favorites to the favorites page
  };

  return (
    <div className="container">
      <h1 className="my-4">Catálogo de Libros</h1>

      <div className="mb-4 text-end">
        <button className="btn btn-success" onClick={goToCart}>
          <i className="fas fa-shopping-cart me-2"></i> {/* Icono del carrito */}
          Carrito ({cart.length})
        </button>
        <button className="btn btn-warning ms-2" onClick={goToFavorites}>
          <i className="fas fa-heart me-2"></i> {/* Heart icon for favorites */}
          Ver Favoritos
        </button>
      </div>

      <div className="input-group mb-4">
        <span className="input-group-text">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por título o ISBN"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p>Cargando libros...</p>}

      <div className="row">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div className="col-md-3" key={book.id}>
              <div className="card mb-4">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="card-img-top"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.isbn}</p>
                  <p className="card-text">{book.description}</p>
                  <p className="card-text">
                    <small className="text-muted">Por {book.author}</small>
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(book)}
                  >
                    Alquilar
                  </button>
                  <button
                    className={`btn ${favorites.some((item) => item.id === book.id) ? 'btn-warning' : 'btn-outline-warning'} ms-2`}
                    onClick={() => handleFavorite(book)}
                  >
                    <i className="fas fa-star"></i> {/* Star icon for favorites */}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center">No se encontraron libros.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
