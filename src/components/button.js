import React from 'react';
import PropType from 'prop-types';

function Button(props) {
  const { text, url } = props;
  return <div className="btn-gradient">
    {url ? <a href={url} target="_blank" rel="noreferrer">{text}</a>
      : <button>{text}</button>}
  </div>
}

Button.defaultProps = {
  text: 'Coming soon...',
  url: '',
}
Button.PropsType = {
  text: PropType.string,
  url: PropType.string,
}

export default Button;