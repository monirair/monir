import React from 'react';

const BlogContainer = ({ data }) => {
  return (
    <div>
      <section className='pt-100' data-aos='fade-up'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h6 className='subtitle'>{data.date}</h6>
              <h3 className='mb-30 display-4'>{data.title}</h3>
            </div>
          </div>
        </div>
      </section>
      <section className='py-100' data-aos='fade-up'>
        <div className='container'>
          <div className='row ' ata-aos='fade-up'>
            <div className=''>
              <div className='col-12 shadow'>
                <img
                  src={`${process.env.PUBLIC_URL}/${data.image}`}
                  alt={data.title}
                  className='img-fluid pb-30 rounded-top'
                />

                <div className='portfolio-desc bg-white pa-30 rounded mb-md-30'>
                  {data.desc.map((value, i) => {
                    return (
                      <p key={i} dangerouslySetInnerHTML={{ __html: value }} />
                    );
                  })}
                  <ul className='features'>
                    {data.features.map((value, i) => {
                      return (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{ __html: value }}
                        />
                      );
                    })}
                  </ul>
                  <div className='text-right'>
                    <a
                      className='btn btn-outline-primary mt-50'
                      target='_blank'
                      rel='noreferrer'
                      href={data.mediumLink}
                    >
                      Read on Medium
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogContainer;
