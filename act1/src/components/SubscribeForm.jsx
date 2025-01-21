import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TermsAndConditions from './TermsAndConditions';

const SubscribeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    termsAccepted: false
  });
  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Debe aceptar los términos y condiciones.');
      return;
    }

    console.log('Datos enviados: ', formData);
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Formulario de Suscripción</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Edad</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="18"
          />
        </div>

     
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsAccepted"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="termsAccepted">
            Acepto los <a href="#terms" onClick={() => setShowTerms(true)}>términos y condiciones</a>
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Suscribirse</button>
      </form>

     
      {showTerms && <TermsAndConditions onClose={() => setShowTerms(false)} />}
    </div>
  );
};

export default SubscribeForm;
