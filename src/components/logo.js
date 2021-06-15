import React from 'react';
import PropType from 'prop-types';

function Logo(props) {
  const { src, text } = props;
  return <div className="logo">
    <img src={src} alt="" />
    <span>{text}</span>
  </div>
}

Logo.defaultProps = {
  src: '',
  text: 'SenSwap'
}
Logo.PropsType = {
  src: PropType.string,
  text: PropType.string,
}

export default Logo;