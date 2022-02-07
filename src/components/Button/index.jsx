import React from 'react';

const Button = (props) => {
  return (
      <button className={` mx-1 px-4 md:px-6 py-2 md:py-3 ${props.cName}`}>{props.btnTitle}</button>
  );
};

export default Button;
