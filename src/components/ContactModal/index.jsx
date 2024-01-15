import { X } from "lucide-react";
import "./styles.css";

export function ContactModal({ visible, setVisible }) {
  const overlayClassName = visible
    ? "modal-overlay-visible"
    : "modal-overlay-hidden";

  return (
    <>
      <div className={overlayClassName}>
        <div className="contact-modal">
          <div className="contact-modal content">
            <div className="contact-modal header">
              <p>Que tal me mandar em e-mail?</p>
              <X onClick={() => setVisible(false)} />
            </div>
            <div className="contact-modal body">
              <input
                className="guestbook-name"
                placeholder="Seu Nome"
                type="text"
              />
              <textarea
                className="guestbook-message"
                placeholder="Sua mensagem..."
                cols="30"
                rows="5"
                required
              />
            </div>
            <div className="contact-modal footer">
              <button className="cancel-btn" onClick={() => setVisible(false)}>
                Deixa pra lá
              </button>
              <button className="submit-btn" onClick={() => setVisible(false)}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
