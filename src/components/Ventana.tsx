import React, { useEffect, useState } from "react";
import "./Ventana.css";
import { motion } from "framer-motion";
import { useSequentialTypewriter } from "../hooks/useSequentialTypewriter";

type VentanaProps = {
  onFinishInstall: () => void;
  desplazado?: boolean; // nueva prop
};

export const Ventana: React.FC<VentanaProps> = ({
  onFinishInstall,
  desplazado,
}) => {
  const lines = [
    "Bienvenido.",
    "Aquí están las soluciones que buscabas para tus problemas informaticos.",
    "Instalando soluciones...",
  ];

  const displayedLines = useSequentialTypewriter(lines, 30, 300);

  const [progress, setProgress] = useState(0);
  const [startProgress, setStartProgress] = useState(false);
  const [scrollDone, setScrollDone] = useState(false); // <-- nuevo estado

  // Detecta cuando ya terminó de escribirse el último texto
  useEffect(() => {
    if (
      displayedLines[2] === lines[2] && // El texto completo ya está
      !startProgress
    ) {
      setStartProgress(true);
    }
  }, [displayedLines, lines, startProgress]);

  // Lógica de la barra de progreso (modificada)
  useEffect(() => {
    if (!startProgress || scrollDone) return; // si ya se hizo scroll, no hace nada

    let current = progress; // continuar desde el progreso actual

    const tick = () => {
      if (current < 100) {
        current += 1;
        setProgress(current);
        setTimeout(tick, 20);
      } else {
        if (!scrollDone) {
          onFinishInstall(); // solo se ejecuta una vez
          setScrollDone(true); // marcamos que ya se hizo scroll
        }
      }
    };

    tick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startProgress, onFinishInstall]);

  return (
    <motion.div
      className={`ventana-contenedor ${desplazado ? "ventana-abierta" : ""}`}
      initial={{ opacity: 0, y: 300, x: 0, scale: 0 }}
      animate={{ scale: 1 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: "easeInOut" }}
    >
      {/* Encabezado */}
      <div className="ventana-encabezado d-flex align-items-center gap-3">
        <img className="ventana-icono" src="/comand-prompt-icono.png" alt="" />
        <h5 className="ventana-titulo">Command Prompt</h5>
        <h5 className="ventana-x">X</h5>
      </div>

      {/* Cuerpo */}
      <div className="ventana-cuerpo">
        <h4 className="ventana-texto-1">{displayedLines[0]}</h4>
        <h4 className="ventana-texto-2">{displayedLines[1]}</h4>
        <h4 className="ventana-texto-3">
          {displayedLines[2]}
          {displayedLines[2] !== "" && <span className="cursor">|</span>}
        </h4>

        {/* Barra de progreso */}
        {startProgress && (
          <div className="progress-container w-100 mt-3">
            <div
              className="progress-bar"
              style={{
                height: "24px",
                width: `${progress}%`,
                backgroundColor: "rgb(30, 216, 55)",
                transition: "width 0.04s linear",
              }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};
