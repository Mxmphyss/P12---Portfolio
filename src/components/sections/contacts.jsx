import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_he2wkcd",
        "template_o35npe9",
        form.current,
        "pCjwpcNPDtAiCzw3o"
      )
      .then(
        (result) => {
          console.log("Message envoyé avec succès ✅", result.text);
          alert("Message envoyé avec succès !");
          form.current.reset();
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Erreur lors de l'envoi ❌", error.text);
          alert("Une erreur est survenue. Veuillez réessayer.");
        }
      );
  };

  return (
    <section className="contact">
      <div className="containerContact">
        <div className="wallpaperWhiteBlack">
          <img src="/assets/image/wallpaper/51176B67-57BC-4F94-B500-A2B0F7ED1984.WEBP" alt="wallpaper d'une nébuleuse noir et blanche" />
        </div>
        <div className="contactContent">
          <h2>Contact</h2>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Votre message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Envoyer</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;