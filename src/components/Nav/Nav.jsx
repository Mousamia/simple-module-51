import React, { useState } from 'react';

const Nav = () => {
    const [show, setShow] = useState(true);

    const bgChange = () => {
        ul.color = "red";
        
    }

    return (
        <div>
            <ul onClick={() => bgChange()}>
                <li>Home</li>
                <li>Contact</li>
                <li>Pay</li>
                <li>Login</li>
            </ul>
            
        </div>
    );
};

export default Nav;