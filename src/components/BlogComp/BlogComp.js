import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogComp = ({ data }) => {
  return (
    <article className='border rounded'>
      <Link to={`/blog/${data.id}`}>
        <img className='img-fluid' src={data.image} alt={data.title} />
      </Link>
      <div className='pa-30'>
        <h6 className='subtitle'>{data.date}</h6>
        <h4 className='mb-30'>{data.title}</h4>
        <p className='mb-30'>{data.exerpt}</p>
        <div className='d-grid'>
          <Link to={`/blog/${data.id}`} className='btn btn-primary'>
            View full post
          </Link>
        </div>
      </div>
    </article>
  );
};

BlogComp.propTypes = {
  data: PropTypes.object,
};

export default BlogComp;
