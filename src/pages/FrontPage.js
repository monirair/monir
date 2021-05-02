import React from 'react';
import Intro from '../components/Intro/Intro';
import Quote from '../components/Quote/Quote';
import HomeBlog from '../container/BlogGrid/HomeBlog';
import HomePortfolio from '../container/PorfolioGrid/HomePortfolio';

const FrontPage = () => {
  return (
    <>
      <Intro />
      <HomePortfolio />
      <Quote />
      <HomeBlog />
    </>
  );
};

export default FrontPage;
