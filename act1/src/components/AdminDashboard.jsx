import React from 'react';
import { useNavigate } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css"; // Mantén esta importación si la necesitas

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleAddBook = () => {
    navigate('/admin/add-book');
  };

  const handleDeleteBook = () => {
    navigate('/admin/delete-book');
  };

  const handleRentalHistory = () => {
    navigate('/admin/rental-history');
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Panel de Administración</h2>
      <p className="text-center mb-4">Bienvenido al panel de administración. Desde aquí puedes gestionar los libros y el historial de alquileres.</p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
 
        <div className="col">
          <div className="card text-center shadow-lg" style={{ cursor: 'pointer' }} onClick={handleAddBook}>
            <img src="/images/mas.png" className="card-img-top" alt="Agregar Libro" />
            <div className="card-body">
              <h5 className="card-title">Agregar Libro</h5>
              <p className="card-text">Añadir nuevos libros al catálogo de la biblioteca.</p>
            </div>
          </div>
        </div>

   
        <div className="col">
          <div className="card text-center shadow-lg" style={{ cursor: 'pointer' }} onClick={handleDeleteBook}>
            <img src="/images/1214594.png" className="card-img-top" alt="Borrar Libro" />
            <div className="card-body">
              <h5 className="card-title">Borrar Libro</h5>
              <p className="card-text">Eliminar libros existentes del catálogo.</p>
            </div>
          </div>
        </div>

   
        <div className="col">
          <div className="card text-center shadow-lg" style={{ cursor: 'pointer' }} onClick={handleRentalHistory}>
            <img src="/images/32223.png" className="card-img-top" alt="Historial de Alquileres" />
            <div className="card-body">
              <h5 className="card-title">Historial de Alquileres</h5>
              <p className="card-text">Consulta el historial de alquileres realizados por los usuarios.</p>
            </div>
          </div>
        </div>

       
        <div className="col">
          <div className="card text-center shadow-lg" style={{ cursor: 'pointer' }} onClick={() => navigate('/admin/manage-users')}>
            <img src="/images/user.png" className="card-img-top" alt="Gestionar Usuarios" />
            <div className="card-body">
              <h5 className="card-title">Gestionar Usuarios</h5>
              <p className="card-text">Administra las cuentas de usuario y sus permisos.</p>
            </div>
          </div>
        </div>

    
        <div className="col">
          <div className="card text-center shadow-lg" style={{ cursor: 'pointer' }} onClick={() => navigate('/admin/settings')}>
            <img src="/images/conf.png" className="card-img-top" alt="Configuración" />
            <div className="card-body">
              <h5 className="card-title">Configuración</h5>
              <p className="card-text">Accede a la configuración de la plataforma.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
