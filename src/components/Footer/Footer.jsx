import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>Info</li>
        <li>Sitemap</li>
        <li>Privacy Policy</li>
        <li>Terms and conditions</li>
      </ul>
      <ul>
        <li>Home</li>
        <li>About eatEasy</li>
        <li>Register a Restaurant</li>
        <li>Contact Us</li>
        <li>info@eateasy.co.uk</li>
      </ul>
      <ul>
        <li>Follow Us</li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
      <p>© 2024 eatEasy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;