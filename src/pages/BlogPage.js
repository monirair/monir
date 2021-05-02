import React from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import Blog from '../container/Blog/Blog';

const BlogPage = () => {
  return (
    <>
      <PageTitle>
        <h1 className='display-1'>My Blog</h1>
      </PageTitle>
      <Blog />
    </>
  );
};

export default BlogPage;
