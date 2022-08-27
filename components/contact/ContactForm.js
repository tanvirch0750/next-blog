import { useState } from 'react';
import classes from './ContactForm.module.css';

const ContactForm = () => {
  const [emailData, setEmailData] = useState('');
  const [nameData, setNameData] = useState('');
  const [messageData, setMessageData] = useState('');

  const sendContactMessageHeandler = (e) => {
    e.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: emailData,
        name: nameData,
        message: messageData,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendContactMessageHeandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={emailData}
              onChange={(e) => setEmailData(e.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={nameData}
              onChange={(e) => setNameData(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message:</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={messageData}
            onChange={(e) => setMessageData(e.target.value)}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
