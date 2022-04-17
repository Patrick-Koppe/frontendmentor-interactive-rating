import React from 'react';

import './TextLabel.scss'

const TextLabel = ({score, max}) => {
    return (
        <div className="text-label orange">You selected {score} out of {max} </div>
    )
}

export default TextLabel