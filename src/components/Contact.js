// src/components/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${form.name}! Your message has been sent.`);
    setForm({ name: '', message: '' });
  };

  return (
    <section id="contact" style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ padding: '8px', marginBottom: '10px', width: '60%' }}
          required
        /><br />
        <textarea
          placeholder="Your message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ padding: '8px', width: '60%', height: '80px' }}
          required
        /><br /><br />
        <button type="submit" style={{ padding: '10px 20px' }}>Send</button>
      </form>
    </section>
  );
}

export default Contact;
