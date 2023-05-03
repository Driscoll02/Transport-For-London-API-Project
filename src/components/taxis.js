import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import NavBar from './navbar';
import CabOperator from './shared/caboperator';
import { MenuItem, Select, TextField } from '@mui/material';

export default function Taxis() {
    const [error, setError] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [limit, setLimit] = useState(5);
    const [offset, setOffset] = useState(0);
    const [opType, setOpType] = useState('');
    const [radius, setRadius] = useState('');
    const [opName, setOpName] = useState('');
    const [wheelchairAccess, setWheelchairAccess] = useState('');

    
    useEffect(() => {
        // Get the users current lat & long
        navigator.geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        }, error => {
            setError(error.message);
        });

        if (latitude && longitude) {
            getTaxiInformation();
        }
    }, [latitude, longitude]);


    const getTaxiInformation = () => {

        // Dynamically build query string template with state values
        let query = '';

        if (opType !== '') {
            query += `&optype=${opType}`
        }

        if (radius !== '') {
            query += `&radius=${radius}`
        }

        if (opName !== '') {
            query += `&name=${opName}`
        }

        if (wheelchairAccess !== '') {
            query += `&wc=${wheelchairAccess}`
        }

        console.log(query)

        // Dummy data to test if user not in London: lat: 51.5073509 lon: -0.1277583
        fetch(`https://api.tfl.gov.uk/Cabwise/search?lat=${51.5073509}&lon=${-0.1277583}${query}`, {
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
                throw new Error("No operators were found near your location.");
            } else if (response.status === 500) {
                throw new Error("Problem with Transport for London server. Try again later.");
            } else {
                throw new Error("Something went wrong: " + response.status);
            }
        })
        .then(resJson => {
            setSearchResults(resJson);
            console.log("Here");
        })
        .catch(err => setError(err.message));
    }

    const handleNextPage = () => {
        setOffset(offset + 5);
        setLimit(limit + 5);
        renderOperators(searchResults.Operators.OperatorList, limit, offset);
    }

    const handlePreviousPage = () => {
        if (offset > 0) {
            setOffset(offset - 5);
            setLimit(limit - 5);
            renderOperators(searchResults.Operators.OperatorList, limit, offset);
        }
    }

    const renderOperators = (operators, limit, offset) => {
        let limitedOperators = []
        
        // Populate new array with length limit
        if (operators.length !== 0) {
            // Check if length of operators array is less than limit
            if (operators.length < limit) {
                for (let i = offset; i < operators.length; i++) {
                    limitedOperators.push(operators[i])
                }
            } else {
                for (let i = offset; i < limit; i++) {
                    limitedOperators.push(operators[i])
                }
            }

            // Pagination
            if (operators.length < limit) {
                return (
                    <div style={styles.operatorList}>
                        <h4>Operators found: {operators.length}</h4>
                        <ul>
                            {limitedOperators.map((item) => <CabOperator key={item.CentreId} name={item.OrganisationName} phoneNum={item.BookingsPhoneNumber} distance={item.Distance} />)}
                        </ul>
                    </div>
                )
            } else if (offset >= 5 && operators[limit + 1] !== undefined) {
                return (
                    <div style={styles.operatorList}>
                        <h4>Operators found: {operators.length}</h4>
                        <ul>
                            {limitedOperators.map((item) => <CabOperator key={item.CentreId} name={item.OrganisationName} phoneNum={item.BookingsPhoneNumber} distance={item.Distance} />)}
                        </ul>
                        <div style={{marginTop: '2rem'}}>
                            <Button variant='contained' style={{marginRight: '2rem'}} onClick={handlePreviousPage}>Previous Page</Button>
                            <Button variant='contained' onClick={handleNextPage}>Next Page</Button>
                        </div>
                    </div>
                )
            } else if (operators[limit + 1] !== undefined) {
                return (
                    <div style={styles.operatorList}>
                        <h4>Operators found: {operators.length}</h4>
                        <ul>
                            {limitedOperators.map((item) => <CabOperator key={item.CentreId} name={item.OrganisationName} phoneNum={item.BookingsPhoneNumber} distance={item.Distance} />)}
                        </ul>
                        <div style={{marginTop: '2rem'}}>
                            <Button variant='contained' onClick={handleNextPage}>Next Page</Button>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div style={styles.operatorList}>
                        <h4>Operators found: {operators.length}</h4>
                        <ul>
                            {limitedOperators.map((item) => <CabOperator key={item.CentreId} name={item.OrganisationName} phoneNum={item.BookingsPhoneNumber} distance={item.Distance} />)}
                        </ul>
                        <div style={{marginTop: '2rem'}}>
                            <Button variant='contained' onClick={handlePreviousPage}>Previous Page</Button>
                        </div>
                    </div>
                ) 
            }
        }
    }

    
    const handleSearch = () => {
        console.log(opType);
        setOffset(0)
        getTaxiInformation();
        renderOperators(searchResults.Operators.OperatorList, limit, offset)
    }

    if (searchResults) {
        if (searchResults.Operators.OperatorList.length === 0) {
            return (
                <div style={styles.screenContainer}>
                <NavBar />
                <div style={styles.searchOptionsContainer}>
                    <h2>Search Options</h2>
                    <h3>Any of these fields can be left blank</h3>
                    <div style={styles.searchOptions}>
                        <TextField style={styles.option} variant='filled' placeholder='Operator Type' value={opType} onChange={event => setOpType(event.target.value)} />
                        <TextField style={styles.option} variant='filled' placeholder='Radius' value={radius} onChange={event => setRadius(event.target.value)} />
                        <TextField style={styles.option} variant='filled' placeholder='Operator Name' value={opName} onChange={event => setOpName(event.target.value)} />
                    </div>
                    <div style={{marginBottom: '1rem'}}>
                        <h4>Wheelchair Access:</h4>
                        <Select style={{backgroundColor: 'white', width: '20vw'}} value={wheelchairAccess} onChange={event => setWheelchairAccess(event.target.value)}>
                            <MenuItem value={"Yes"}>Yes</MenuItem>
                            <MenuItem value={"No"}>No</MenuItem>
                        </Select>
                    </div>
                    <Button variant='contained' onClick={handleSearch}>Search</Button>
                </div>
                <div style={{marginTop: '1rem'}}>
                    <h1 style={{marginBottom: '0.75rem', marginLeft: '1rem', color: '#D7D7D7'}}>Operators near you:</h1>
                    <p>No operators were found near your location.</p>
                </div>
            </div>
            )
        }

        if (searchResults.Operators.OperatorList.length > 0) {
            return (
                <div style={styles.screenContainer}>
                <NavBar />
                <div style={styles.searchOptionsContainer}>
                    <h2>Search Options</h2>
                    <h3>Any of these fields can be left blank</h3>
                    <div style={styles.searchOptions}>
                        <TextField style={styles.option} variant='filled' placeholder='Operator Type' value={opType} onChange={event => setOpType(event.target.value)} />
                        <TextField style={styles.option} variant='filled' placeholder='Radius' value={radius} onChange={event => setRadius(event.target.value)} />
                        <TextField style={styles.option} variant='filled' placeholder='Operator Name' value={opName} onChange={event => setOpName(event.target.value)} />
                    </div>
                    <div style={{marginBottom: '1rem'}}>
                        <h4>Wheelchair Access:</h4>
                        <Select style={{backgroundColor: 'white', width: '20vw'}} value={wheelchairAccess} onChange={event => setWheelchairAccess(event.target.value)}>
                            <MenuItem value={"Yes"}>Yes</MenuItem>
                            <MenuItem value={"No"}>No</MenuItem>
                        </Select>
                    </div>
                    <Button variant='contained' onClick={handleSearch}>Search</Button>
                </div>
                <div style={{marginTop: '1rem'}}>
                    <h1 style={{marginBottom: '0.75rem', marginLeft: '1rem', color: '#D7D7D7'}}>Operators near you:</h1>
                    {renderOperators(searchResults.Operators.OperatorList, limit, offset)}
                </div>
            </div>
            )
        }
    }

    return (
        <div style={styles.screenContainer}>
            <NavBar />
            <div style={{marginTop: '1rem'}}>
                <h1 style={{marginBottom: '0.75rem', marginLeft: '1rem', color: '#D7D7D7'}}>Operators near you:</h1>
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
    searchOptionsContainer: {
        backgroundColor: '#2D2D2D',
        margin: '1rem',
        padding: '1rem',
        borderRadius: 10,
        boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)',
        color: '#D7D7D7',
    },
    searchOptions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
    },
    option: {
        backgroundColor: 'white',
        width: '25vw',
    },
    operatorList: {
        backgroundColor: '#2D2D2D',
        margin: '1rem',
        padding: '1rem',
        borderRadius: 10,
        boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)',
        color: '#D7D7D7',
    }
}