import React from 'react';
import PropType from 'prop-types';

function Button(props) {
  const { text } = props;
  return <div className="btn-gradient">
    <button>{text}</button>
  </div>
}

Button.defaultProps = {
  text: 'Coming soon...'
}
Button.PropsType = {
  text: PropType.string,
}

export default Button;