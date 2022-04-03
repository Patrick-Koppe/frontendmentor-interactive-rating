import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export default class Button extends React.Component {

    static propTypes = {
        value: PropTypes.string,
        primary: PropTypes.bool,
        disabled: PropTypes.bool,
        clickHandler: PropTypes.func,
    };

    handleClick = () => {
        this.props.clickHandler(this.props.value);
    }

    render() {

        const className = [
            "btn",
            this.props.primary ? "primary" : "",
        ]

        const type = [
            this.props.primary ? "submit" : "button",
        ]

        return (
            <div className={className.join(" ").trim()}>
               <button
                   type={type.join(" ").trim()}
                   disabled={this.props.disabled}
                   onClick={this.handleClick}
               >
                   {this.props.value}
               </button>
            </div>
        )
    }
}