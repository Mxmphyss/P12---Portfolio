import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
  };

  return (
    <section className="contact">
      <h2>Contactez-moi</h2>
      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <input type="text" name="name" placeholder="Votre nom" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Votre email" required onChange={handleChange} />
        <textarea name="message" placeholder="Votre message" required onChange={handleChange}></textarea>
        <button type="submit">Envoyer</button>
      </motion.form>
    </section>
  );
};

export default Contact;