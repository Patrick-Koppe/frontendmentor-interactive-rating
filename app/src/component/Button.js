import React from 'react';

import './Button.scss';

const Button = ({value, active, onChangeStatus, index}) => {

    return (
        <div className={active ? "btn active" : "btn"}>
           <button onClick={(e) => {onChangeStatus(e, index)}}>
               {value}
           </button>
        </div>
    )
}

export default Button