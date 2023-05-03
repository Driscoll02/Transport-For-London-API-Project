import './App.css';
import LandingPage from './components/landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import AccidentStats from './components/accidentstats';
import AirQuality from './components/airquality';
import BikePoints from './components/bikepoints';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/accidentstats' element={<AccidentStats />} />
          <Route path='/airquality' element={<AirQuality />} />
          <Route path='/bikepoints' element={<BikePoints />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#E12626',
    },
    secondary: {
      main: '#D7D7D7',
    },
  },
});

export default App;
