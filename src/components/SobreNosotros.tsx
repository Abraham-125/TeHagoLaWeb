import React from "react";
import "./SobreNosotros.css";

export const SobreNosotros: React.FC = ({}) => {
  return (
    <div className="sobre-nosotros-contenedor d-flex justify-content-center align-items-center ">
      <div>
        <img
          className="sobre-nosotros-logo"
          src="/logo-quienes-somos.png"
          alt=""
        />
      </div>
      <div>
        <p className="sobre-nosotros-texto">
          Somos una PYME en proceso de crecimiento, comprometida con la misión
          de impulsar la digitalización de negocios físicos, optimizando sus
          procesos y ventas a través de soluciones tecnológicas innovadoras. Nos
          dedicamos a proporcionar herramientas de alta calidad que permiten a
          nuestros clientes mejorar su eficiencia operativa y maximizar su
          potencial de crecimiento.
        </p>
        <br />
        <p className="sobre-nosotros-texto">
          Nuestra visión es implementar las mejores tecnologías con un enfoque
          apasionado y minucioso en cada proyecto que desarrollamos. Creemos
          firmemente en el poder transformador de la tecnología para ayudar a
          las empresas a ser más competitivas y exitosas en el entorno digital.
        </p>
      </div>
    </div>
  );
};
