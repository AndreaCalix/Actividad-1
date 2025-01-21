import React from 'react';

const TermsAndConditions = ({ onClose }) => {
  return (
    <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Términos y Condiciones</h5>
          <button type="button" className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
  <p>
    1. **Aceptación de los términos:** Al suscribirte a nuestro servicio, aceptas cumplir con estos términos y condiciones, los cuales pueden ser modificados en cualquier momento.<br />
    2. **Edad mínima:** Debes ser mayor de 18 años para registrarte en nuestra plataforma. Si eres menor de edad, no podrás acceder ni utilizar nuestros servicios.<br />
    3. **Protección de datos:** Respetamos tu privacidad y nos comprometemos a proteger la información personal que nos proporciones. No compartiremos ni venderemos tu información personal a terceros sin tu consentimiento explícito.<br />
    4. **Uso de la cuenta:** Eres responsable de mantener la confidencialidad de tu cuenta y cualquier actividad que ocurra bajo tu cuenta. Debes notificar inmediatamente cualquier uso no autorizado de tu cuenta.<br />
    5. **Propiedad intelectual:** Todo el contenido proporcionado en nuestra plataforma, incluidos textos, gráficos, imágenes, logotipos, y software, está protegido por derechos de propiedad intelectual y no puede ser reproducido o distribuido sin nuestro permiso.<br />
    6. **Suspensión de la cuenta:** Nos reservamos el derecho de suspender o cancelar tu cuenta en caso de violaciones a estos términos, incluyendo pero no limitado a, el uso indebido de nuestros servicios o el comportamiento inapropiado.<br />
    7. **Limitación de responsabilidad:** No seremos responsables por cualquier daño directo o indirecto derivado del uso de nuestros servicios, incluidos, entre otros, pérdidas de datos, pérdidas de ingresos, o daños a la reputación.<br />
    8. **Modificaciones:** Podemos modificar estos términos en cualquier momento. Cualquier cambio será publicado en esta sección y entrará en vigor inmediatamente después de su publicación.<br />
    9. **Legislación aplicable:** Estos términos se rigen por las leyes del país donde operamos, y cualquier disputa será resuelta en los tribunales competentes de dicha jurisdicción.
  </p>
</div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
