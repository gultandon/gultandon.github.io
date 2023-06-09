import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Gul Tandon's personal website. New York based Stanford ICME graduate, "
    + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          {/* <p>
            Fan site for bright.
          </p> */}
          <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
            or you can check out my {' '}
            <Link to="/projects">projects</Link>, {' '}
            {/* view <Link to="/stats">site statistics</Link>, {' '} */}
            or <Link to="/contact">contact</Link> me.
          </p>
        </div>
      </header>
      <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
