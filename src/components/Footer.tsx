import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-section">
        <h3>INDIGO BELGRADE</h3>
        <p>Luksuzni hotel sa vrhunskom uslugom i modernim sadržajima.</p>
      </div>

      <div className="footer-section">
        <h3>Kontakt</h3>
        <p>📍 Beograd, Srbija</p>
        <p>📞 +381 11 123 4567</p>
        <p>✉️ info@indigo-belgrade.rs</p>
      </div>

      <div className="footer-section">
        <h3>Radno vreme</h3>
        <p>Recepcija 24/7</p>
        <p>Check-in: 14:00</p>
        <p>Check-out: 11:00</p>
      </div>

    </footer>
  );
}

export default Footer;