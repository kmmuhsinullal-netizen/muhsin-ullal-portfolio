import { ArrowUpRight, Mail } from 'lucide-react';

export default function ContactForm() {
  const subject = encodeURIComponent('Enquiry from Muhsin Ullal’s portfolio');
  const href = `mailto:kmmuhsinullal@gmail.com?subject=${subject}`;

  return (
    <div className="contact-direct">
      <div className="contact-direct-icon"><Mail size={24} /></div>
      <h3>Let’s connect directly.</h3>
      <p>Have a collaboration idea, business opportunity, or question? Send me an email and I’ll get back to you.</p>
      <a className="button button-primary contact-direct-button" href={href}>
        Email me <ArrowUpRight size={17} />
      </a>
      <a className="contact-direct-address" href="mailto:kmmuhsinullal@gmail.com">
        kmmuhsinullal@gmail.com
      </a>
    </div>
  );
}
