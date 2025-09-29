import React from "react";
import "./RedesSociales.css";

export const RedesSociales: React.FC = ({}) => {
  return (
    <div className="d-flex justify-content-center gap-4">
      <a href="https://www.facebook.com/share/1Vehn7pXDt/" target="_blank">
        <img className="btn-redes-sociales" src="/facebook-rs.png" alt="" />
      </a>
      <a href="https://www.tiktok.com/@tehagolawebcl" target="_blank">
        <img className="btn-redes-sociales" src="/tiktok-rs.png" alt="" />
      </a>
      <a href="https://www.instagram.com/tehagolawebchile" target="_blank">
        <img className="btn-redes-sociales" src="/instagram-rs.png" alt="" />
      </a>
      <a href="https://www.youtube.com/@TeHagoLaWebCL" target="_blank">
        <img className="btn-redes-sociales" src="/youtube-rs.png" alt="" />
      </a>
    </div>
  );
};
