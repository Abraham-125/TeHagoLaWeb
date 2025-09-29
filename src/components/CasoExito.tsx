import "./CasoExito.css";

const CasoExito: React.FC = () => {
  return (
    <>
      <div className="container-fluid red container-caso-exito">
        <div className="col-12 d-flex justify-content-start align-items-center caso-exito-titulo-1">
          <h4 className="caso-titulo-1">Caso Yakero </h4>
        </div>

        {/* Intro */}
        <div className="red row">
          <div className="red col-md-10 d-flex align-items-center texto-personalizado-1">
            Yakero Sushi es un negocio de comida rápida que combina sushi,
            sandwiches, comida casera y bebidas, ofreciendo a sus clientes
            opciones frescas y rápidas con un servicio amigable y cercano.
          </div>
          <div className="red col-md-2 ">
            <img
              className="img-caso-exito  separacion"
              src="/yakero.webp"
              alt=""
            />
          </div>
        </div>

        {/* Landing Page */}
        <div className="col-12 d-flex justify-content-end align-items-center caso-exito-titulo-2">
          <h4 className="caso-titulo-2">Landing Page</h4>
        </div>
        <div className="red row">
          <div className="red col-md-6">
            <div
              id="carouselLanding"
              className="carousel slide separacion"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/caso-5.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/caso-6.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/caso-7.png" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselLanding"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselLanding"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="red col-md-6 d-flex align-items-center texto-personalizado-1">
            Desarrollamos una landing page interactiva para Yakero Sushi, donde
            sus clientes pueden explorar el menú completo y realizar pedidos
            fácilmente a través de WhatsApp...
          </div>
        </div>

        {/* Sistema de Gestion */}
        <div className="red col-12 d-flex justify-content-start align-items-center caso-exito-titulo-3">
          <h4 className="caso-titulo-1 ">Sistema de Gestión</h4>
        </div>
        <div className="red col-12 texto-personalizado-1  separacion">
          Creamos un sistema integral de gestión para el local, que centraliza
          ventas, control de caja y seguimiento de pedidos...
        </div>
        <div className="red row">
          <div className="red col-md-6 d-flex align-items-center">
            <ul className="punteos">
              <li>Seleccionar productos del menú y registrar ventas.</li>
              <li>Procesar pagos en efectivo, tarjeta o transferencia.</li>
              <li>Generar reportes y dashboards para un control completo.</li>
              <li>
                Crear sesiones para cada cajero en turno, facilitando el
                registro de ventas por usuario y el control individual de caja.
              </li>
            </ul>
          </div>

          <div className="red col-md-6">
            <div
              id="carouselSistema"
              className="carousel slide separacion"
              data-bs-ride="carousel"
              data-bs-interval="4000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/caso-1.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/caso-2.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/caso-3.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/caso-4.png" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselSistema"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselSistema"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="red col-12 texto-personalizado-1 separacion">
          Con esta solución, Yakero Sushi optimizó la operación diaria, redujo
          errores y mejoró la velocidad en la atención de sus clientes.
        </div>
      </div>
    </>
  );
};

export default CasoExito;
