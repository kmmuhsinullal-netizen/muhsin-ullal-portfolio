import { ArrowUpRight, Mail } from 'lucide-react';

export default function ContactForm() {
  const subject = encodeURIComponent('Enquiry from Muhsin Ullal’s portfolio');
  const href = `mailto:kmmuhsinullal@gmail.com?subject=${subject}`;

  return (
    <div className="contact-direct contact-direct-minimal">
      <a className="button button-primary contact-direct-button" href={href}>
        <Mail size={17} /> Email me <ArrowUpRight size={17} />
      </a>
    </div>
  );
}
