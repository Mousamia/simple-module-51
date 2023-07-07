import React, { useState } from 'react';
import State from '../State/State';

const Nav = () => {
    const [open, setOpen] = useState(true);

    const bgChange = () => {
        setOpen(!open);
    }

    return (
        <div>
            <ul onClick={() => bgChange()}>
                <li>Home</li>
                <li>Contact</li>
                <li>Pay</li>
                <li>Login</li>
            </ul>
            <State></State>
            
        </div>
    );
};

export default Nav;