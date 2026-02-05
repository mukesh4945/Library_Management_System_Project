import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="subtitle">
          Have questions? We’d love to hear from you
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel"placeholder="Phone Number"inputMode="numeric"autoComplete="tel"/>
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
