import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <h2>İletişim Bilgilerim</h2>
      <div className="contact-info">
        <p><strong>Ad Soyad:</strong> Yavuz Türker Gürleyük</p>
        <p><strong>Telefon:</strong> +90 532 673 2426</p>
        <p><strong>Email:</strong> yavuzturker@icloud.com</p>
        <p><strong>Adres:</strong> Balıkesir, Türkiye</p>

        <div className="social-links">
          <a href="https://github.com/YavuzTG" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://x.com/YavuzGurleyuk" target="_blank" rel="noreferrer">X</a>
          <a href="https://linkedin.com/in/yavuzturkergürleyuk" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="message-form">
        <h3>Mesaj Gönder</h3>
        <form>
          <input type="text" name="name" placeholder="Adınız" required />
          <input type="email" name="email" placeholder="E-posta" required />
          <textarea name="message" placeholder="Mesajınız" rows="5" required></textarea>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
