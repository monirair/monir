import React, { useState } from 'react';
import { FaqData } from '../../data/FaqData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import './Faq.css';
const Faq = () => {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <section className='py-100'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7'>
            {FaqData.map((item, index) => {
              return (
                <>
                  <div
                    className='faq bg-white mb-30 border rounded'
                    key={item.index}
                  >
                    <div className='faq-header' onClick={() => toggle(index)}>
                      <span className='mr-20'>
                        {clicked === index ? (
                          <FontAwesomeIcon icon={faMinusCircle} />
                        ) : (
                          <FontAwesomeIcon icon={faPlusCircle} />
                        )}
                      </span>
                      <h5 className='mb-0'>{item.question}</h5>
                    </div>
                    {clicked === index ? (
                      <div className='faq-body'>
                        <p className='mb0 lead transition'>{item.answer}</p>
                      </div>
                    ) : null}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
