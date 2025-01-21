import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const handleRemoveFromCart = (bookId) => {
    setCart(cart.filter((item) => item.id !== bookId));
  };

  const goBack = () => {
    navigate('/'); 
  };

  const handleCheckout = () => {
    navigate('/checkout', { state: { cart } }); 
  };

  return (
    <div className="container">
      <h1 className="my-4">Alquilar Libros</h1>
      <button className="btn btn-secondary mb-4" onClick={goBack}>
        Volver al catálogo
      </button>
      {cart.length > 0 ? (
        <>
          <ul className="list-group mb-4">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.title}</strong> - {item.author}
                </div>
                <button
                  className="btn btn-sm btn-danger d-flex align-items-center"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <i className="fas fa-trash me-1"></i>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Alquilar
          </button>
        </>
      ) : (
        <p>No hay libros en el carrito.</p>
      )}
    </div>
  );
};

export default CartPage;
