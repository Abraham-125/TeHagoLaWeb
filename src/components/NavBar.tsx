import React, { useState } from "react";
import "./NavBar.css";

type NavBarProps = {
  onGoServices: () => void;
  onGoAbout: () => void;
  onGoRedes: () => void;
  onGoContact: () => void;
  onGoCasos: () => void;
  onToggleNavbar?: (open: boolean) => void;
};

export const NavBar: React.FC<NavBarProps> = ({
  onGoServices,
  onGoAbout,
  onGoRedes,
  onGoContact,
  onGoCasos,
  onToggleNavbar,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggleNavbar?.(newState); // Notificar al padre
  };
  return (
    <>
      <a href="#">
        <img
          className={`logo-navbar ${isOpen ? "logo-abierto" : ""}`}
          src="/navbar-logo.png"
          alt="Logo"
        />
      </a>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <button className="nav-link btn-link" onClick={onGoServices}>
                Servicios
              </button>
              <button className="nav-link btn-link" onClick={onGoAbout}>
                Nosotros
              </button>
              <button className="nav-link btn-link" onClick={onGoRedes}>
                Redes Sociales
              </button>
              <button className="nav-link btn-link" onClick={onGoContact}>
                Contáctanos
              </button>
              <button className="nav-link btn-link" onClick={onGoCasos}>
                Casos de Éxito
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
