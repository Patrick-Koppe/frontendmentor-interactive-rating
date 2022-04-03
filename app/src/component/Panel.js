import React from 'react'
import Button from "./Button";

export default class Panel extends React.Component {

    handleClick = buttonName => {
        console.log(buttonName);
    }

    render() {
        return (
            <form className="button-panel">
                <div className="row">
                    <Button value="1" clickHandler={this.handleClick}/>
                    <Button value="2" clickHandler={this.handleClick}/>
                    <Button value="3" clickHandler={this.handleClick}/>
                    <Button value="4" clickHandler={this.handleClick}/>
                    <Button value="5" clickHandler={this.handleClick}/>
                </div>
                <div className="row">
                    <Button value="submit" primary clickHandler={this.handleClick}/>
                </div>
            </form>
        )
    }
}