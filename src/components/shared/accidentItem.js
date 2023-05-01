import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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