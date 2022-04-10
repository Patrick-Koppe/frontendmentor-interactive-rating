import React, { useState } from 'react'
import TextField from './TextField';
import Button from "./Button";

import './Panel.scss';



const allButtons = [
    {
        value: "1",
        status : false,
    },
    {
        value: "2",
        status : false,
    },
    {
        value: "3",
        status : false,
    },
    {
        value: "4",
        status : false,
    },
    {
        value: "5",
        status : false,
    },
]

const pages = [
    {
        description: "rating",
        ratedValue: 0
    }
]

const Panel = () => {

    const [buttons, setButtons] = useState(allButtons);
    const [page, setPage] = useState(pages)


    const changeButtonStatus = (e, index) => {
        e.preventDefault();
        const newButtons = [...buttons];

        
        newButtons.map((button) => {
            return button.status = false;
        })

        if(newButtons[index].status) {
            newButtons[index].status = false;
        } else {
            newButtons[index].status = true;
        }

        setButtons(newButtons);
    }

    const submit = (e, index) => {
        e.preventDefault();

        const rated = buttons.filter((button) => {
            return button.status === true;
        })

        const newPage = [...page];
        newPage.map((item) => {
            return item.description = "result",
            item.ratedValue = rated[0].value;
        })

        setPage(newPage);

        console.log('newPage', newPage);
    }


    return (
        <div className='box'>
            <TextField />
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

export default Panel