import React from 'react';
import BlogComp from '../../components/BlogComp/BlogComp';
import BlogData from '../../data/BlogData.json';

const HomeBlog = () => {
  return (
    <section className='py-100'>
      <div className='container'>
        <div className='row'>
          {BlogData &&
            BlogData.slice(0, 3).map((single, key) => {
              return (
                <div
                  key={key}
                  className='col-lg-4 mb-md-30'
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  <BlogComp data={single} key={key} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
