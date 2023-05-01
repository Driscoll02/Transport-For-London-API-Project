import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import NavBar from './navbar';
import he from 'he';

export default function AirQuality() {
    const [error, setError] = useState('');
    const [currentQuality, setCurrentQuality] = useState(null);
    const [refreshed, setRefreshed] = useState('');

    useEffect(() => {
        getAirQuality();
    }, []);

    const getAirQuality = () => {
        fetch('https://api.tfl.gov.uk/AirQuality', {
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
                throw new Error("Today's air quality was not found.");
            } else if (response.status === 500) {
                throw new Error("Problem with Transport for London server. Try again later.");
            } else {
                throw new Error("Something went wrong: " + response.status);
            }
        })
        .then(resJson => {
            setCurrentQuality(resJson);
        })
        .catch(err => setError(err.message));
    }

    const handleRefresh = () => {
        setRefreshed('Refreshed')
        // Clear refreshed message after 4 seconds
        setTimeout(() => setRefreshed(''), 4000);
        getAirQuality();
    }

    const todaysForcast = () => {
      if (currentQuality)  {
        const { forecastBand, forecastSummary, nO2Band, o3Band, pM10Band, pM25Band, sO2Band, toDate, forecastText} = currentQuality.currentForecast[0];
        
        // Format date into a nicer state
        const date = new Date(toDate);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
        const formattedDate = date.toLocaleDateString('en-GB', options);

        // Decode html entities from forecast text response
        const decodedForecastText = he.decode(forecastText);
        // Remove <br/> artifacts
        const filteredForecastText = decodedForecastText.replace(/<br\/>/g, ' ')

        return (
            <div style={styles.forecastCard}>
                <h2 style={{marginBottom: '1.2rem'}}>Todays forecast:</h2>
                <h3 style={{marginBottom: '1rem', fontSize: '1.2rem'}}>Overall air pollution: {forecastBand}</h3>
                <div style={styles.breakdown}>
                    <h4 style={{marginBottom: '0.5rem', fontSize: '1.2rem'}}>Pollution breakdown:</h4>
                    <ul>
                        <li>Dioxygen (O2): {nO2Band}</li>
                        <li>Ozone (O3): {o3Band}</li>
                        <li>Fine Particles (PM {'<'} 10µm): {pM10Band}</li>
                        <li>Fine Particles (PM {'<'} 2.5µm): {pM25Band}</li>
                        <li>Sulfur Dioxide (sO2): {sO2Band}</li>
                    </ul>
                </div>
                <h3 style={{marginBottom: '0.1rem'}}>Weather forecast:</h3>
                <h4 style={{marginBottom: '1rem', fontWeight: 'normal'}}>{filteredForecastText}</h4>
                <h4 style={{marginBottom: '1rem'}}>{forecastSummary}</h4>
                <h4 style={{marginBottom: '2rem'}}>Next update: {formattedDate}</h4>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Button variant='contained' style={{marginRight: '1rem'}} onClick={handleRefresh}>Refresh Forecast</Button>
                    <p>{refreshed}</p>
                </div>
            </div>
        )
      }  
    }

    return (
        <div style={styles.screenContainer}>
            <NavBar />
            <div style={{marginTop: '1rem'}}>
                <h1 style={{marginBottom: '0.75rem', marginLeft: '1rem', color: '#D7D7D7'}}>Air quality:</h1>
                {todaysForcast()}
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