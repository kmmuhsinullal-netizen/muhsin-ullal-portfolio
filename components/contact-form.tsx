
'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:kmmuhsinullal@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label htmlFor="contact-name">Your name</label>
      <input
        id="contact-name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="contact-email">Email address</label>
      <input
        id="contact-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="contact-message">Message</label>
      <textarea
        id="contact-message"
        rows={5}
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="button button-primary" type="submit">
        Email me <ArrowUpRight size={16} />
      </button>
      <p>This opens your email app to send the message to <a href="mailto:kmmuhsinullal@gmail.com">kmmuhsinullal@gmail.com</a>.</p>
    </form>
  );
}
