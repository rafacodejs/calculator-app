import React from 'react';

const ButtonBox = ({ children }) => {
  return <div className='grid grid-cols-4 gap-2 '>{children}</div>;
};

export { ButtonBox };
