import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import NavBar from './navbar';
import BikePointItem from './shared/bikePointItem';

export default function BikePoints() {
    const [error, setError] = useState('');
    const [bikePoints, setBikePoints] = useState(null);
    const [limit, setLimit] = useState(5);
    const [offset, setOffset] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    // Helper functions for pagination
    const handleNextPage = () => {
        setOffset(offset + 5);
        setLimit(limit + 5);
        setPageNumber(pageNumber + 1);
        renderList(bikePoints, limit, offset);
    }

    const handlePreviousPage = () => {
        if (offset > 0) {
            setOffset(offset - 5);
            setLimit(limit - 5);
            setPageNumber(pageNumber - 1);
            renderList(bikePoints, limit, offset);
        }
    }

    // Get bike points on component mount
    useEffect(() => {
        getBikePoints();
    }, []);

    // Request bike points from API
    const getBikePoints = () => {
        fetch('https://api.tfl.gov.uk/BikePoint', {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
            }
        })
        .then(response => {
            if (response.status === 200) {
                setError('');
                return(response.json())
            } else if (response.status === 404) {
                throw new Error("No bike points were found.");
            } else if (response.status === 500) {
                throw new Error("Problem with Transport for London server. Try again later.");
            } else {
                throw new Error("Something went wrong: " + response.status);
            }
        })
        .then(resJson => {
            setBikePoints(resJson);
        })
        .catch(err => setError(err.message));
    }

    // Render list returned by API request and provide pagination functionality
    const renderList = (bikePoints, limit, offset) => {
        let limitedBikePoints = []
        
        if(bikePoints) {
            // Populate new array with length limit
            if (bikePoints.length !== 0) {
                // Check if length of accidents array is less than limit
                if (bikePoints.length < limit) {
                    for (let i = offset; i < bikePoints.length; i++) {
                        limitedBikePoints.push(bikePoints[i])
                    }
                } else {
                    for (let i = offset; i < limit; i++) {
                        limitedBikePoints.push(bikePoints[i])
                    }
                }

                // Pagination
                if (offset >= 5 && bikePoints[limit + 1] !== undefined) {
                    return (
                        <div>
                            <h3>Results found: {bikePoints.length}</h3>
                            <h4>Page number: {pageNumber}</h4>
                            <ul>
                                {limitedBikePoints.map((item) => <BikePointItem key={item.id} lat={item.lat} lon={item.lon} name={item.commonName} />)}
                            </ul>
                            <div style={{marginTop: '2rem'}}>
                                <Button variant='contained' style={{marginRight: '2rem'}} onClick={handlePreviousPage}>Previous Page</Button>
                                <Button variant='contained' onClick={handleNextPage}>Next Page</Button>
                            </div>
                        </div>
                    )
                } else if (bikePoints[limit + 1] !== undefined) {
                    return (
                        <div>
                            <h3>Results found: {bikePoints.length}</h3>
                            <h4>Page number: {pageNumber}</h4>
                            <ul>
                                {limitedBikePoints.map((item) => <BikePointItem key={item.id} lat={item.lat} lon={item.lon} name={item.commonName} />)}
                            </ul>
                            <div style={{marginTop: '2rem'}}>
                                <Button variant='contained' onClick={handleNextPage}>Next Page</Button>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <h3>Results found: {bikePoints.length}</h3>
                            <h4>Page number: {pageNumber}</h4>
                            <ul>
                                {limitedBikePoints.map((item) => <BikePointItem key={item.id} lat={item.lat} lon={item.lon} name={item.commonName} />)}
                            </ul>
                            <div style={{marginTop: '2rem'}}>
                                <Button variant='contained' onClick={handlePreviousPage}>Previous Page</Button>
                            </div>
                        </div>
                    ) 
                }
            }
        }
    }

    return (
        <div style={styles.screenContainer}>
            <NavBar />
            <div style={{marginTop: '1rem'}}>
                <div style={styles.forecastCard}>
                    <h1>Bike points</h1>
                    {renderList(bikePoints, limit, offset)}
                    <p>{error}</p>
                </div>
            </div>
        </div>
    )
}

const styles = {
    screenContainer: {
        backgroundColor: '#1E1E1E',
        height: '100vh',
        lineHeight: 1.75,
    },
    forecastCard: {
        backgroundColor: '#2D2D2D',
        margin: '1rem',
        padding: '1rem',
        borderRadius: 10,
        boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)',
        color: '#D7D7D7',
    },
    breakdown: {
        marginBottom: '2rem',
    }
}