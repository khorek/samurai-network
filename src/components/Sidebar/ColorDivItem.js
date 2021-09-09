import React from 'react';

export const ColorDivItem = (props) => {

    return (
        <div className=''>
            {/* <img src='http://placehold.it/180x180/{props/color}/ecf0f1' 
                className="card-img-top" 
                alt='photo' 
                style={{maxWidth: '20%', borderRadius: '50%', color: props.color}} /> */}
            {/* <div className='colored-div' style={{color: props.color, border: '1px solid #000' }}>Here is {props.color}</div> */}
            <div style={
                {backgroundColor: props.color,
                display: 'flex',     
                border: '1px solid #fff',
                margin: '0 auto',
                color: 'white', 
                borderRadius: '50%', 
                width: '100px', 
                height: '100px', 
                padding: '20px',
                textAlign: 'center',
                fontSize: '10px'
                }}>This color is{props.color}</div>
        </div>
    )
}