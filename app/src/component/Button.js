import React from 'react';

import './Button.scss';

// 2 types of buttons are available
const Button = ({value, active, onChangeStatus, index, className}) => {

    if (className === 'btn disabled') {
        return (
            <div className={className}>
                <button disabled="disabled">
                    <img src={value} alt="icon star" />
                </button>
            </div>
        )
    } else {
        return (
            <div className={active ? "btn active" : "btn"}>
                <button onClick={(e) => {onChangeStatus(e, index)}}>
                    {value}
                </button>
            </div>
        )
    }
}

export default Button