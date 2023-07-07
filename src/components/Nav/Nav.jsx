import React, { useState } from 'react';
import State from '../State/State';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart, faClose, faStar } from '@fortawesome/free-solid-svg-icons';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';







const Nav = () => {
    const [open, setOpen] = useState(false);
    const [higlight, setHiglight] = useState(true);

    const bgChange = () => {
        setOpen(!open);

    }

    const myStyle8 = {
        color: 'red',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: 'lightblue',
       margin : '-90px 0'
    }
    const myStyle9 = {
        backgroundColor: 'purple',
        margin : '30px 0'
    }

    const className = higlight ? 'myStyle8' : 'myStyle9'


    return (
        <div>
            <div onClick={bgChange}>

                <span>
                    {
                        open === true ?
                            <FontAwesomeIcon size='3x' icon={faClose} /> : <FontAwesomeIcon size='3x' icon={faBars} />
                    }
                </span>
            </div>

            <button onClick={() => setHiglight(!higlight)}> click me to chnge</button>

            <ul style={open ? myStyle8 : myStyle9}>
                <li>Home</li>
                <li>Contact</li>
                <li>Pay</li>
                <li>Login</li>
            </ul>

        </div>
    );
};

export default Nav;