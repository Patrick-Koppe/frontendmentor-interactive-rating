import React from 'react'
import Button from "./Button";

import './Panel.scss';

export default class Panel extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    handleClick = buttonName => {

        console.log(buttonName);
    }

    render() {

        return (
            <form className="button-panel">
                <div className="row margin d-flex">
                    <Button active={this.state.active} value="1" clickHandler={this.handleClick}/>
                    <Button active={this.state.active} value="2" clickHandler={this.handleClick}/>
                    <Button active={this.state.active} value="3" clickHandler={this.handleClick}/>
                    <Button active={this.state.active} value="4" clickHandler={this.handleClick}/>
                    <Button active={this.state.active} value="5" clickHandler={this.handleClick}/>
                </div>
                <div className="row">
                    <Button active={this.props.active} value="submit" primary clickHandler={this.handleClick}/>
                </div>
            </form>
        )
    }
}