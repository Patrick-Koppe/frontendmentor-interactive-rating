import React from 'react';

import './TextField.scss'

const TextField = ({headline, text}) => {
  return (
    <div className="text">
        <h1>{headline}</h1>
        <p>{text}</p>
    </div>
  )
}

export default TextField