import React, { useState } from "react";
import "./ServiceCard.css";
import { motion } from "framer-motion";
import { Modal } from "./Modal";

type ServiceCardProps = {
  title: string;
  description: React.ReactNode;
  img: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  img,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function reactNodeToString(node: React.ReactNode): string {
    if (typeof node === "string" || typeof node === "number") {
      return node.toString();
    }

    if (Array.isArray(node)) {
      return node.map(reactNodeToString).join(" ");
    }

    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<{
        children?: React.ReactNode;
      }>;
      return reactNodeToString(element.props.children);
    }

    return "";
  }
  const truncateText = (text: string, wordLimit: number): string => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };
  return (
    <>
      <motion.div
        className="serviceCard"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      >
        <div className="line encabezado d-flex justify-content-between align-items-center">
          <span></span>
          <h5>{title}</h5>
          <button className="btnVerMas" onClick={() => setIsModalOpen(true)}>
            Ver Más
          </button>
        </div>
        <div className="line cuerpo d-flex align-items-center">
          <img className="logo-card" src={img} alt={title} />
          <p>{truncateText(reactNodeToString(description), 40)}</p>
        </div>
      </motion.div>

      {/* Modal */}
      <Modal
        title={title}
        description={description}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
