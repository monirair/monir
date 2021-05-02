import React from 'react';
import Clients from '../../components/Clients/Clients';
import Cta from '../../components/Cta/Cta';

import './About.css';
const About = () => {
  return (
    <>
      <section className='py-100'>
        <div className='container'>
          <div className='row justify-content-around align-items-center'>
            <div className='col-lg-4 mb-md-30' data-aos='fade-up'>
              <img
                className='img-fluid'
                src={`${process.env.PUBLIC_URL}./images/about.png`}
                alt='Monir'
              />
            </div>
            <div className='col-lg-6' data-aos='fade-up'>
              <div className='about-me'>
                <h6>About Me</h6>
                <h3 className='mb-30'>Monir Hossain</h3>
                <p>
                  I am a Freelance website developer from Bangladesh. I Build
                  built websites are fast loading, accessible, and easy to
                  manage. My design partners will help you improve conversion
                  rates and user engagement.
                </p>
                <p>
                  I truly live by the motto "work smarter, not harder." I feel
                  that is the best way to deliver a client what they need in the
                  shortest amount of time possible.
                </p>

                <ul className='portfolio-lang mb-30'>
                  <li>
                    <span className='lang-dot  html'></span> HTML
                  </li>
                  <li>
                    <span className='lang-dot  css'></span> CSS
                  </li>
                  <li>
                    <span className='lang-dot  js'></span> JavaScript
                  </li>
                  <li>
                    <span className='lang-dot  mdb'></span> MongoDB
                  </li>
                  <li>
                    <span className='lang-dot  sass'></span> Sass
                  </li>
                </ul>

                <a href='d' className='btn btn-primary '>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Clients />
      <Cta />
    </>
  );
};

export default About;
