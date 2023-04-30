import './App.css';
import LandingPage from './components/landingpage';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <LandingPage />
    </div>
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
