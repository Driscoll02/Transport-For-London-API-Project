import React from 'react';

export default function BikePointItem(props) {
    const {lat, lon, name} = props;

    return (
        <div style={{marginTop: '1rem'}}>
            <h3 style={{marginBottom: '0.75rem'}}>Bike Point:</h3>
            <p>Location: {name}</p>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lon}</p>
        </div>
    )
}