import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/checkoutpage.css';  // Importa el archivo CSS

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const cart = state?.cart || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Alquiler realizado con éxito!');
    navigate('/'); // Redirige a la página principal después de alquilar
  };

  return (
    <div className="container">
      <h1 className="my-4">Formulario de Alquiler</h1>

      {/* Listado de libros en el carrito */}
      <ul className="list-group mb-4">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item">
            <strong>{item.title}</strong> - {item.author}
          </li>
        ))}
      </ul>

      {/* Información sobre las políticas de alquiler */}
      <div className="mb-4">
        <h4>Políticas de Alquiler</h4>
        <p>
          Al alquilar libros en nuestra plataforma, aceptas las siguientes políticas:
        </p>
        <ul>
          <li><strong>Duración del alquiler:</strong> Los libros se alquilan por un periodo de 14 días. Puedes renovar el alquiler si lo necesitas.</li>
          <li><strong>Devolución:</strong> La devolución debe hacerse dentro del periodo acordado. Cualquier retraso puede incurrir en cargos adicionales.</li>
          <li><strong>Condiciones del libro:</strong> Por favor, asegúrate de devolver los libros en buen estado. Los daños serán penalizados.</li>
          <li><strong>Información personal:</strong> Necesitamos tus datos de contacto para procesar el alquiler y poder enviarte notificaciones sobre tus libros.</li>
        </ul>
      </div>

      {/* Formulario de alquiler */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono</label>
          <input type="text" className="form-control" id="phone" required />
        </div>
        <button type="submit" className="btn btn-success">Confirmar Alquiler</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
