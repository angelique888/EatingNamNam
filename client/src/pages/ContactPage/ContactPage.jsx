import { useState } from "react";
import { toast } from "react-toastify";
import "./ContactPage.css";
import BackButton from "../../components/BackButton/BackButton";

function ContactPage() {
  const [formData, setFormData] = useState({
    to: "",
    confirmEmail: "",
    subject: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.to !== formData.confirmEmail) {
      toast.error("Les emails ne correspondent pas");
      return;
    }

    fetch("http://localhost:3310/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Email envoyé avec succès!");
      })
      .catch((error) => {
        toast.error("Échec de l'envoi de l'email");
        console.error("Erreur:", error);
      });
  };

  return (
    <>
      <BackButton />
      <div>
        <h1 className="title">Envoyer un message</h1>

        <form className="form-contact" method="post" onSubmit={handleSubmit}>
          <span>Email:</span>
          <input
            className="email"
            type="email"
            placeholder="E-mail"
            name="to"
            value={formData.to}
            onChange={handleChange}
            required
          />

          <span>Confirmation Email:</span>
          <input
            className="confirm-email"
            type="email"
            placeholder="Confirmation e-mail"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            required
          />
          <span>Sujet:</span>
          <input
            className="subject"
            type="text"
            placeholder="Sujet"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <span>Message:</span>
          <input
            className="text"
            placeholder="Veuillez écrire votre message ici"
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
          />
          <button className="btn-contact" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactPage;
