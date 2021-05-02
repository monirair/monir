import React from 'react';
import Meta from '../components/meta/Meta';
import PageTitle from '../components/PageTitle/PageTitle';
import About from '../container/About/About';

export const AboutPage = () => {
  return (
    <>
      <Meta title={`About Monir Hossain`} />
      <PageTitle>
        <h1 className='display-1 mb-0'>About</h1>
      </PageTitle>
      <About></About>
    </>
  );
};
