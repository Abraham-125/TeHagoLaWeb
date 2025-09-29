import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css";

type ModalProps = {
  title: string;
  description: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-fondo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={onClose}
        >
          <motion.div
            className="modal-contenedor"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()} // evitar cerrar al hacer click dentro
          >
            <div className="modal-encabezado d-flex align-items-center text-center">
              <h5 className="modal-titulo">{title}</h5>
              <h5 className="modal-x" onClick={onClose}>
                X
              </h5>
            </div>

            <div className="modal-cuerpo">
              <h4 className="modal-texto-1">{description}</h4>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=56944718488&text&type=phone_number&app_absent=0"
              >
                <div className="btn-contratar text-center">
                  <h3 className="contratar-texto"> Contratar Servicio</h3>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
