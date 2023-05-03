import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavBar from './navbar';
import AccidentItem from './shared/accidentItem';

export default function AccidentStats() {
    const [year, setYear] = useState('');
    const [accidents, setAccidents] = useState([]);
    const [error, setError] = useState('');
    const [limit, setLimit] = useState(5);
    const [offset, setOffset] = useState(0);

    // Helper functions for pagination
    const handleNextPage = () => {
        setOffset(offset + 5);
        setLimit(limit + 5);
        renderList(accidents, limit, offset);
    }

    const handlePreviousPage = () => {
        if (offset > 0) {
            setOffset(offset - 5);
            setLimit(limit - 5);
            renderList(accidents, limit, offset);
        }
    }

    // Render a list of accidents returned by API
    const renderList = (accidents, limit, offset) => {
        let limitedAccidents = []
        
        // Populate new array with length limit
        if (accidents.length !== 0) {
            // Check if length of accidents array is less than limit
            if (accidents.length < limit) {
                for (let i = offset; i < accidents.length; i++) {
                    limitedAccidents.push(accidents[i])
                }
            } else {
                for (let i = offset; i < limit; i++) {
                    limitedAccidents.push(accidents[i])
                }
            }

            // Pagination
            if (offset >= 5 && accidents[limit + 1] !== undefined) {
                return (
                    <div>
                        <ul>
                            {limitedAccidents.map((item) => <AccidentItem key={item.id} location={item.location} severity={item.severity} />)}
                        </ul>
                        <div style={{marginTop: '2rem'}}>
                            <Button variant='contained' style={{marginRight: '2rem'}} onClick={handlePreviousPage}>Previous Page</Button>
                            <Button variant='contained' onClick={handleNextPage}>Next Page</Button>
                        </div>
                    </div>
                )
            } else if (accidents[limit + 1] !== undefined) {
                return (
                    <div>
                        <ul>
                            {limitedAccidents.map((item) => <AccidentItem key={item.id} location={item.location} severity={item.severity} />)}
                        </ul>
                        <div style={{marginTop: '2rem'}}>
                            <Button variant='contained' onClick={handleNextPage}>Next Page</Button>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <ul>
                            {limitedAccidents.map((item) => <AccidentItem key={item.id} location={item.location} severity={item.severity} />)}
                        </ul>
                        <div style={{marginTop: '2rem'}}>
                            <Button variant='contained' onClick={handlePreviousPage}>Previous Page</Button>
                        </div>
                    </div>
                ) 
            }
        }
    }

    // Validate year change input
    const handleYearChange = (event) => {
        const regex = /^[0-9]*$/
        if (event.target.value === "" || regex.test(event.target.value)) {
            setYear(event.target.value);
        }
    };

    // Request accident stats with year as a parameter
    const getAccidentStats = () => {
        setError('Loading...');

        fetch(`https://api.tfl.gov.uk/AccidentStats/${year}`, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
            }
        })
        .then(response => {
            if (response.status === 200) {
                setError('');
                return(response.json())
            } else if (response.status === 400 && year > 2019) {
                setAccidents([]);
                throw new Error("No data is available after 2019.");
            } else if (response.status === 400) {
                throw new Error("Bad request. Make sure the year inputted is valid.");
            } else if (response.status === 404) {
                throw new Error("No accidents were found.");
            } else if (response.status === 500) {
                throw new Error("Problem with Transport for London server. Try again later.");
            } else {
                throw new Error("Something went wrong: " + response.status);
            }
        })
        .then(resJson => {
            setAccidents(resJson);
        })
        .catch(err => setError(err.message));
    }

    return (
        <div style={styles.screenContainer}>
            <NavBar />
            <div style={styles.accidentsContainer}>
                <h1 style={{marginBottom: '1rem'}}>Get accident stats for: </h1>
                <div style={{display: 'flex'}}>
                    <TextField placeholder='Year' label='Year' variant='filled' style={{backgroundColor: '#D7D7D7'}} onChange={handleYearChange} value={year} />
                    <Button variant="contained" color="primary" style={{marginLeft: '2rem'}} onClick={getAccidentStats}>Get Accident Stats</Button>
                </div>
                <p>{error}</p>
                {renderList(accidents, limit, offset)}
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
    accidentsContainer: {
        color: '#D7D7D7',
        margin: '2rem',
        backgroundColor: '#2D2D2D',
        padding: '1rem',
        borderRadius: 10,
        boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)',
    }
}