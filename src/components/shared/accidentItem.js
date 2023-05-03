import React from 'react';

export default function AccidentItem(props) {
    const {location, severity} = props;

    return (
        <div style={{marginTop: '1rem'}}>
            <h3 style={{marginBottom: '0.75rem'}}>Accident:</h3>
            <p>Location: {location}</p>
            <p>Severity: {severity}</p>
        </div>
    )
}