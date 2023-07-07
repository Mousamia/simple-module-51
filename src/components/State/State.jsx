import React, { useState } from 'react';
import './State.css'

const State = () => {
    const [color, setColor] = useState(true);

    const changColor = () => {
        setColor(!color);
    }

    return (
        <div>
            <div className='box' onClick={() => changColor()} >
                I will Chnge accordingly

                {
                    color ===  true ? 'red' : 'blue'
                }

                {
                    color && <p style={{ color: 'purple'}}>I will be red</p>
                }

            </div>
            
        </div>
    );
};

export default State;