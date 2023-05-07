import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from '../../data/resume/resume-gul.pdf';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Gul Tandon</h2>
        <p>
          <a id="lowermail" href="mailto:gultandon@gmail.com">gultandon@gmail.com</a>
          <br />
          <a id="lowermail" href={Pdf} target="_blank" rel="noreferrer">resume</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hello! I'm Gul Tandon. I am an comuter science undergraduate at<a href='vitbhopal.ac.in/'> VIT Bhopal University</a>. I have a strong technical background in Python, MySQL, Machine Learning, Tensorflow, Deep Learning, and Java. Additionally, I am a Microsoft Certified Azure AI Fundamentals professional.
      </p>
      {/* <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul> */}
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Gul Tandon <Link to="/">gultandon.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
