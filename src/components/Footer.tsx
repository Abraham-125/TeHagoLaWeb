import { forwardRef } from "react";
import "./Footer.css";

const Footer = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="container-fluid container-footer" ref={ref}>
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center">
          <img src="/logo-quienes-somos.png" alt="" className="img-fluid" />
        </div>
        <div className="col-md-7">
          {/* Aquí tu título Contactanos */}
          <h4 className="footer-titulo">Contáctanos</h4>

          {/* Primer contacto */}
          <div className="d-flex align-items-center mb-2">
            <img
              className="footer-icon me-2 img-fluid"
              src="/correo-icono.png"
              alt=""
            />
            <h4 className="mb-0 footer-contacto">
              contacto@TeHagoLaWebChile.com
            </h4>
          </div>

          {/* Segundo contacto */}
          <div className="d-flex align-items-center">
            <img
              className="footer-icon me-2"
              src="/telefono-icono.png"
              alt=""
            />
            <h4 className="mb-0 footer-contacto">+56 9 4471 8488</h4>
          </div>
        </div>
      </div>

      <div
        className="col-12 d-flex justify-content-center"
        style={{ color: "white", fontSize: "12px", marginTop: "30px" }}
      >
        © 2025 TeHagoLaWebChile.com | Todos los derechos reservados.
        Desarrollado con ♥ por TeHagoLaWebChile
      </div>
    </div>
  );
});

export default Footer;
