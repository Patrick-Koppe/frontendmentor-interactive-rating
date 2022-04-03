import React from "react"
import './Box.scss';
import TextField from "./TextField";
import Panel from "./Panel";
import Button from "./Button";

export default class Box extends React.Component {
    render () {
        return (
            <div className="box">
                <Button disabled/>
                <TextField headline={this.props.headline} text={this.props.text}/>
                <Panel />
            </div>
        )
    }
}