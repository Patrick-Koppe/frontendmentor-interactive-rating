import React, { useState } from 'react'
import TextField from './TextField';
import TextLabel from "./TextLabel";
import Button from "./Button";
import IconStar from '../images/icon-star.svg';
import ThankYouImage from '../images/thank_you.svg';

import './Panel.scss';

const allButtons = [
    { value: "1", status : false },
    { value: "2", status : false},
    { value: "3", status : false },
    { value: "4", status : false},
    { value: "5", status : false },
]

const pages = [
    { description: "rating", ratedValue: 0 }
]

const Panel = () => {

    // constants to change states
    const [buttons, setButtons] = useState(allButtons);
    const [page, setPage] = useState(pages);

    // change button status to active and rerender button with active class
    const changeButtonStatus = (e, index) => {
        e.preventDefault();
        const newButtons = [...buttons];

        newButtons.map((button) => {
            return button.status = false;
        })

        newButtons[index].status = !newButtons[index].status;

        setButtons(newButtons);
    }

    // save the active rating button and change description to rerender the "thank you" box
    const submit = (e) => {
        e.preventDefault();

        const rated = buttons.filter((button) => {
            return button.status === true;
        })

        // copy the status
        const newPage = [...page];
        newPage.map((item) => {
            item.description = "result";
            item.ratedValue = rated[0].value;
            return item;

        })

        //set new properties
        setPage(newPage);
    }

    // thank-you box
    if (page[0].description === 'result') {
        return (
            <div className='box center result'>
                <img src={ThankYouImage} alt="thank for rating" className="mb-1" />
                <TextLabel score={page[0].ratedValue} max="5"/>
                <TextField headline="Thank You!" text="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"/>
            </div>
        )
    // rating box
    } else {
        return (
            <div className='box rated'>
                <Button className="btn disabled" value={IconStar} />
                <TextField headline="How did we do?" text="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"/>
                <form className="button-panel">
                    <div className="row margin d-flex">
                        {buttons.map((button, index) => {
                            return (
                                <Button onChangeStatus={changeButtonStatus} active={button.status} value={button.value} key={index} index={index}/>
                            )
                        })}
                    </div>
                    <div className="row">
                        <div className="btn primary">
                            <button type="submit" onClick={submit}>SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Panel