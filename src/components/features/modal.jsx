import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import "../../styles/containers/_modal.scss";

const Modal = ({ item, onClose, onNext, onPrev }) => {
  if (!item) return null;

  return (
    <motion.div 
      className="modal-overlay" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}

      onClick={onClose}
    >
      <motion.div 
        className="modal-content" 
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1 }} 
        exit={{ scale: 0.8 }}
      >
        <button className="close-btn" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="modal-body">
          <div className="modal-header">
          <img
            src={typeof item.image === "string" ? item.image : item.image.icon}
            alt={item.name}
            className="modal-icon"
          />
          </div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Voir sur GitHub
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;