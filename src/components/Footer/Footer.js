import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-icons">
      <a href="#" className="footer-icon" aria-label="Facebook">
        <svg viewBox="0 0 24 24" className="footer-icon-svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </a>
      <a href="#" className="footer-icon" aria-label="Twitter">
        <svg viewBox="0 0 24 24" className="footer-icon-svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03A12.94 12.94 0 0 1 3.1.67a4.48 4.48 0 0 0-.61 2.28c0 1.57.8 2.96 2.02 3.77A4.48 4.48 0 0 1 2 6.13v.06c0 2.2 1.56 4.03 3.64 4.45a4.52 4.52 0 0 1-2.04.08c.58 1.8 2.26 3.12 4.25 3.16A9.05 9.05 0 0 1 1 19.54a12.8 12.8 0 0 0 6.95 2.04c8.34 0 12.9-6.91 12.9-12.9 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z"/></svg>
      </a>
      <a href="#" className="footer-icon" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" className="footer-icon-svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      <a href="#" className="footer-icon" aria-label="YouTube">
        <svg viewBox="0 0 24 24" className="footer-icon-svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58zM10 15.5V8.5l6 3.5-6 3.5z"/></svg>
      </a>
    </div>
    <div className="footer-email">Example@email.com</div>
    <div className="footer-copyright">Copyright © 2020 Name. All rights reserved.</div>
  </footer>
);

export default Footer; 