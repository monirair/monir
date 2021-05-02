import React from 'react';
import BlogContainer from '../container/Blog/BlogContainer';
import BlogData from '../data/BlogData.json';

const BlogSingle = ({
  match: {
    params: { id },
  },
}) => {
  return <BlogContainer data={BlogData[0]} />;
};

export default BlogSingle;
