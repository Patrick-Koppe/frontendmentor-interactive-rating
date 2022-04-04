import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    static propTypes = {
        value: PropTypes.string,
        primary: PropTypes.bool,
        disabled: PropTypes.bool,
        clickHandler: PropTypes.func,
        active: PropTypes.bool,
    };

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    handleClick = () => {
        this.props.clickHandler(this.props.value);
        this.setState({active: this.props.active});
        this.toggleClass();
    }

    render() {

        const className = [
            "btn",
            this.props.primary ? "primary" : "",
            this.state.active ? 'active': ""
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