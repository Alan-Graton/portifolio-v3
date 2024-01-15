import { X } from "lucide-react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DEFAULT_VALUES, contactSchema } from "../../schemas/contact.schema";

import "./styles.css";

export function ContactModal({ visible, setVisible }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(contactSchema),
  });

  /**
   * @param {{ name: string, email: string, message: string }} data
   */
  async function onSubmit({ name, email, message }) {
    console.log("[Contact] Form data: ", { name, email, message });

    setVisible(false);
  }

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
              <X className="close-btn" onClick={() => setVisible(false)} />
            </div>
            <div className="contact-modal body">
              <div className="guestbook-input-group">
                <input
                  className="guestbook-name"
                  placeholder="Nome"
                  type="text"
                  {...register("name")}
                />
                <input
                  className="guestbook-email"
                  placeholder="E-mail"
                  type="email"
                  required
                  {...register("email")}
                />
                {/* {errors.email && (
                  <p className="form-error-message">{errors.email.message}</p>
                )} */}
              </div>
              <textarea
                className="guestbook-message"
                placeholder="Mensagem..."
                cols="30"
                rows="5"
                required
                {...register("message")}
              />
              {/* {errors.message && (
                <p className="form-error-message">{errors.message.message}</p>
              )} */}
            </div>
            <div className="contact-modal footer">
              <button className="cancel-btn" onClick={() => setVisible(false)}>
                Cancelar
              </button>
              <button className="submit-btn" onClick={handleSubmit(onSubmit)}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
