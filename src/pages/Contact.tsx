import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSent(true);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-page">

      <h2>Kontaktirajte nas</h2>

      <p className="contact-text">
        Ukoliko imate pitanja u vezi rezervacije ili smeštaja,
        slobodno nas kontaktirajte.
      </p>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Ime i prezime"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email adresa"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Vaša poruka"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">
          Pošalji poruku
        </button>

      </form>

      {sent && (
        <p className="success-message">
          Vaša poruka je uspešno poslata.
        </p>
      )}

    </div>
  );
}

export default Contact;