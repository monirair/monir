import React from 'react';
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <section className='py-100'>
      <div className='container'>
        <div className='row justify-content-center text-center'>
          <div className='col-lg-10'>
            <h1 className='display-1' data-aos='fade-up' data-aos-delay='100'>
              Let's Work Together
            </h1>
            <p className='py-30' data-aos='fade-up' data-aos-delay='300'>
              Have a project you'd like to discuss?
            </p>
            <Link
              className='btn btn-primary'
              to='/contact'
              data-aos='fade-up'
              data-aos-delay='500'
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
