import React from 'react';

const Clients = () => {
  return (
    <section className='py-50 bg-light'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-lg-2 pa-30 col-3'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <img
              className='img-fluid'
              src={`${process.env.PUBLIC_URL}./images/client/img3.png`}
              alt='Radio Bridge'
            />
          </div>
          <div
            className='col-lg-2 pa-30 col-3'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <img
              className='img-fluid'
              src={`${process.env.PUBLIC_URL}./images/client/img3.png`}
              alt='Radio Bridge'
            />
          </div>
          <div
            className='col-lg-2 pa-30 col-3'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <img
              className='img-fluid'
              src={`${process.env.PUBLIC_URL}./images/client/img3.png`}
              alt='Radio Bridge'
            />
          </div>
          <div
            className='col-lg-2 pa-30 col-3'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <img
              className='img-fluid'
              src={`${process.env.PUBLIC_URL}./images/client/img3.png`}
              alt='Radio Bridge'
            />
          </div>
          <div
            className='col-lg-2 pa-30 col-3'
            data-aos='fade-up'
            data-aos-delay='500'
          >
            <img
              className='img-fluid'
              src={`${process.env.PUBLIC_URL}./images/client/img6.png`}
              alt='Radio Bridge'
            />
          </div>
          <div
            className='col-lg-2 pa-30 col-3'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            <img
              className='img-fluid'
              src={`${process.env.PUBLIC_URL}./images/client/img3.png`}
              alt='Radio Bridge'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
