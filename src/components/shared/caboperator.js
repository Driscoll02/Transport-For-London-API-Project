import React from 'react';

export default function CabOperator(props) {
    const {name, phoneNum, distance} = props;

    return (
        <div style={{marginTop: '1rem'}}>
            <h3 style={{marginBottom: '0.25rem'}}>Operator:</h3>
            <p>Name: {name}</p>
            <p>Phone number: {phoneNum}</p>
            <p>Distance: {distance} miles</p>
        </div>
    )
}