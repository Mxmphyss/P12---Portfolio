import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const Modal = ({ item, onClose, linkText }) => {
    if (!item) return null;

    useEffect(() => {
        document.body.style.overflow = "hidden";
    
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);

    return (
        <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="modal-content" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <div className="modal-body">
                    <div className="modal-header">
                        <img src={item.image?.icon || item.image } alt={item.forAlt} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>

                    {item.type === "project" && item.image && (
                        <div className="modal-images">
                            <a href={item.image.desktop} download={`illustration de ${item.forDownloaded}.jpg`}>
                                <img src={item.image.desktop} alt={`Illustration de ${item.forDownloaded}`} className="modal-desktop-img" />
                            </a>
                        </div>
                    )}

                    {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="modal-link">
                            {linkText}
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Modal;