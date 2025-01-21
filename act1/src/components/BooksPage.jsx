import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import books from '../data/books';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/bookpage.css'; 

const BooksPage = ({ cart, setCart, showNotification }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(8);
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
      showNotification(`${book.title} ha sido añadido al carrito.`, 'success');
    } else {
      showNotification('Este libro ya está en el carrito.', 'error');
    }
  };

  const goToCart = () => {
    navigate('/cart');
  };

  const handleFavorite = (book) => {
    if (favorites.some((item) => item.id === book.id)) {
      setFavorites(favorites.filter((item) => item.id !== book.id));
    } else {
      setFavorites([...favorites, book]);
    }
  };

  const goToFavorites = () => {
    navigate('/favorites', { state: { favorites } });
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredBooks.length / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleSubscribe = () => {
    navigate('/subscribe');
  };

  const handleAdminLogin = () => {
    // Redirige al usuario al componente de inicio de sesión del administrador
    navigate('/admin-login');
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-4">
        <button 
          className="btn btn-danger" 
          onClick={handleSubscribe}>
          Suscribirse
        </button>
        
        <div>
          <button className="btn btn-success me-2" onClick={goToCart}>
            <i className="fas fa-shopping-cart me-2"></i> Carrito ({cart.length})
          </button>
          <button className="btn btn-warning" onClick={goToFavorites}>
            <i className="fas fa-heart me-2"></i> Ver Favoritos
          </button>
        </div>
      </div>

      <h1 className="my-4">Catálogo de Libros</h1>

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
        {currentBooks.length > 0 ? (
          currentBooks.map((book) => (
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
                    <i className="fas fa-star"></i>
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

      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`btn btn-outline-primary ${currentPage === number ? 'active' : ''}`}
          >
            {number}
          </button>
        ))}
      </div>

      {/* Link para iniciar sesión como admin */}
      <div className="mt-4 text-center">
        <a href="#" onClick={handleAdminLogin} style={{ color: 'blue', textDecoration: 'underline' }}>
          Iniciar sesión como admin
        </a>
      </div>
    </div>
  );
};

export default BooksPage;
