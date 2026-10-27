
'use client';

import { useState } from 'react';
import { ArrowUpRight, Menu, X, Mail } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Projects', href: '#projects' },
  { label: 'Insights', href: '#insights' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Muhsin Ullal home">
        <span className="wordmark-mark">MU<span>.</span></span>
        <span className="wordmark-name">MUHSIN ULLAL</span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(link => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>

      <a className="nexguide-link" href="https://nexguide.online"
        target="_blank" rel="noreferrer">
        <span className="nexguide-mark">N</span>
        <span>NexGuide</span>
        <ArrowUpRight size={14} />
      </a>

      <a className="nav-cta" href="mailto:kmmuhsinullal@gmail.com">
        <Mail size={14} /> Email me
      </a>

      <button className="menu-toggle" type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <nav id="mobile-navigation" className="mobile-nav"
          aria-label="Mobile navigation">
          {links.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a href="https://nexguide.online" target="_blank"
            rel="noreferrer">NexGuide ↗</a>
          <a href="mailto:kmmuhsinullal@gmail.com">
            kmmuhsinullal@gmail.com
          </a>
        </nav>
      )}
    </header>
  );
}
