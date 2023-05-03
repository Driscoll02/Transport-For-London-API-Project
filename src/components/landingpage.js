import React from "react";
import NavBar from "./navbar";
import background from "../images/UpdatedBackgroundImage.svg";
import wave from "../images/wave.svg";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from "@mui/material";

export default function LandingPage() {

    const desktopMatches = useMediaQuery('(min-width:1024px)');
    const tabletMatches = useMediaQuery('(min-width:768px)');
    const phoneMatches = useMediaQuery('(min-width:515px)');
    const smallScreenMatches = useMediaQuery('(max-width:514px)');

    const handleClick = (e) => {
        e.preventDefault();
        const target = document.querySelector(e.currentTarget.getAttribute('href'));
        const offset = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    };

    const DesktopScreen = () => {
        return (
            <div style={styles.topScreenContainer}>
                <div style={styles.screenContainer}>
                    <NavBar />
                    <div style={styles.darkBackground} />
                    <div style={styles.midContainer}>
                        <div style={styles.heroContainer}>
                            <h2 style={styles.heroHeader}>Transport for <span style={{color: '#E12626'}}>London</span></h2>
                            <p style={styles.heroParagraph}>Plan your journey with real time data updates so you can get the most out of your trip.</p>
                            <div style={styles.buttonsContainer}>
                                <a href="#getStartedPage" onClick={handleClick}>
                                    <Button href="" variant="contained" color="primary" style={styles.landingButton}>Get Started</Button>
                                </a>
                                <a href="#getStartedPage">
                                    <Button href="" variant="outlined" color="secondary" style={styles.landingButton}>Search Locations</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={styles.waveContainer}>
                        <img style={styles.waveImage} src={wave} alt="" />
                        <div style={styles.arrowContainer}>
                            <FontAwesomeIcon icon={faArrowDown} style={styles.arrow} />
                            <h4 style={styles.arrowText}>Scroll down for more</h4>
                        </div>
                    </div>
                </div>
                <div style={styles.screenContainer} id="getStartedPage">
                    <div style={styles.secondDarkBackground} />
                    <div style={styles.secondWaveContainer}>
                        <img style={styles.secondWaveImage} src={wave} alt="" />
                    </div>
                    <div style={styles.bottomScreenContent}>
                        <h3 style={styles.bottomScreenHeader}>What would you like to check?</h3>
                        <div style={styles.bottomLinksContainer}>
                            <ul>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/accidentstats"><li style={styles.bottomIndividualLink}>Accident Stats</li></a>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/airquality"><li style={styles.bottomIndividualLink}>Air Quality</li></a>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/bikepoints"><li style={styles.bottomIndividualLink}>Bike Points</li></a>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/accidentstats"><li style={styles.bottomIndividualLink}>Taxis</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const TabletScreen = () => {
        return (
            <div style={styles.topScreenContainer}>
                <div style={styles.screenContainer}>
                    <NavBar />
                    <div style={styles.darkBackground} />
                    <div style={styles.midContainer}>
                        <div style={styles.tabletHeroContainer}>
                            <h2 style={styles.tabletHeroHeader}>Transport for <span style={{color: '#E12626'}}>London</span></h2>
                            <p style={styles.heroParagraph}>Plan your journey with real time data updates so you can get the most out of your trip.</p>
                            <div style={styles.buttonsContainer}>
                                <a href="#getStartedPage" onClick={handleClick}>
                                    <Button href="" variant="contained" color="primary" style={styles.landingButton}>Get Started</Button>
                                </a>
                                <a href="#getStartedPage">
                                    <Button href="" variant="outlined" color="secondary" style={styles.landingButton}>Search Locations</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={styles.waveContainer}>
                        <img style={styles.waveImage} src={wave} alt="" />
                        <div style={styles.arrowContainer}>
                            <FontAwesomeIcon icon={faArrowDown} style={styles.arrow} />
                            <h4 style={styles.arrowText}>Scroll down for more</h4>
                        </div>
                    </div>
                </div>
                <div style={styles.screenContainer} id="getStartedPage">
                    <div style={styles.secondDarkBackground} />
                    <div style={styles.secondWaveContainer}>
                        <img style={styles.secondWaveImage} src={wave} alt="" />
                    </div>
                    <div style={styles.bottomScreenContent}>
                        <h3 style={styles.bottomScreenHeader}>What would you like to check?</h3>
                        <div style={styles.bottomLinksContainer}>
                            <ul>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/accidentstats"><li style={styles.bottomIndividualLink}>Accident Stats</li></a>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/airquality"><li style={styles.bottomIndividualLink}>Air Quality</li></a>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/bikepoints"><li style={styles.bottomIndividualLink}>Bike Points</li></a>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/accidentstats"><li style={styles.bottomIndividualLink}>Taxis</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const PhoneScreen = () => {
        return (
            <div style={styles.topScreenContainer}>
                <div style={styles.screenContainer}>
                    <NavBar />
                    <div style={styles.darkBackground} />
                    <div style={styles.midContainer}>
                        <div style={styles.phoneHeroContainer}>
                            <h2 style={styles.tabletHeroHeader}>Transport for <span style={{color: '#E12626'}}>London</span></h2>
                            <p style={styles.heroParagraph}>Plan your journey with real time data updates so you can get the most out of your trip.</p>
                            <div style={styles.buttonsContainer}>
                                <a href="#getStartedPage" onClick={handleClick}>
                                    <Button href="" variant="contained" color="primary" style={styles.landingButton}>Get Started</Button>
                                </a>
                                <a href="#getStartedPage">
                                    <Button href="" variant="outlined" color="secondary" style={styles.landingButton}>Search Locations</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={styles.waveContainer}>
                        <img style={styles.waveImage} src={wave} alt="" />
                        <div style={styles.arrowContainer}>
                            <FontAwesomeIcon icon={faArrowDown} style={styles.arrow} />
                            <h4 style={styles.arrowText}>Scroll down for more</h4>
                        </div>
                    </div>
                </div>
                <div style={styles.screenContainer} id="getStartedPage">
                    <div style={styles.secondDarkBackground} />
                    <div style={styles.secondWaveContainer}>
                        <img style={styles.secondWaveImage} src={wave} alt="" />
                    </div>
                    <div style={styles.phoneBottomScreenContent}>
                        <h3 style={styles.bottomScreenHeader}>What would you like to check?</h3>
                        <div style={styles.bottomLinksContainer}>
                            <ul>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/accidentstats"><li style={styles.bottomIndividualLink}>Accident Stats</li></a>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/airquality"><li style={styles.bottomIndividualLink}>Air Quality</li></a>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/bikepoints"><li style={styles.bottomIndividualLink}>Bike Points</li></a>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/accidentstats"><li style={styles.bottomIndividualLink}>Taxis</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const SmallScreen = () => {
        return (
            <div style={styles.topScreenContainer}>
                <div style={styles.screenContainer}>
                    <NavBar />
                    <div style={styles.darkBackground} />
                    <div style={styles.midContainer}>
                        <div style={styles.phoneHeroContainer}>
                            <h2 style={styles.phoneHeroHeader}>Transport for <span style={{color: '#E12626'}}>London</span></h2>
                            <p style={styles.phoneHeroParagraph}>Plan your journey with real time data updates so you can get the most out of your trip.</p>
                            <div style={styles.buttonsContainer}>
                                <a href="#getStartedPage" onClick={handleClick}>
                                    <Button href="" variant="contained" color="primary" style={styles.phoneLandingButton}>Get Started</Button>
                                </a>
                                <a href="#getStartedPage">
                                    <Button href="" variant="outlined" color="secondary" style={styles.phoneLandingButton}>Search Locations</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={styles.phoneWaveContainer}>
                        <img style={styles.waveImage} src={wave} alt="" />
                        <div style={styles.arrowContainer}>
                            <FontAwesomeIcon icon={faArrowDown} style={styles.smallScreenArrow} />
                            <h4 style={styles.smallScreenArrowText}>Scroll down for more</h4>
                        </div>
                    </div>
                </div>
                <div style={styles.screenContainer} id="getStartedPage">
                    <div style={styles.secondDarkBackground} />
                    <div style={styles.secondWaveContainer}>
                        <img style={styles.secondWaveImage} src={wave} alt="" />
                    </div>
                    <div style={styles.phoneBottomScreenContent}>
                        <h3 style={styles.bottomScreenHeader}>What would you like to check?</h3>
                        <div style={styles.phoneLinksContainer}>
                            <ul>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/accidentstats"><li style={styles.bottomIndividualLink}>Accident Stats</li></a>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/airquality"><li style={styles.bottomIndividualLink}>Air Quality</li></a>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/bikepoints"><li style={styles.bottomIndividualLink}>Bike Points</li></a>
                                <a style={{color: '#D7D7D7', textDecoration: 'none'}} href="/accidentstats"><li style={styles.bottomIndividualLink}>Taxis</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (desktopMatches) {
        return (
            <div>
                {DesktopScreen()}
            </div>
        )
    }

    if (tabletMatches) {
        return (
            <div>
                {TabletScreen()}
            </div>
        )
    }

    if (phoneMatches) {
        return (
            <div>
                {PhoneScreen()}
            </div>
        )
    }

    if (smallScreenMatches) {
        return (
            <div>
                {SmallScreen()}
            </div>
        )
    }
    
}

const styles = {
    topScreenContainer: {
        scrollBehavior: 'smooth',
    },
    screenContainer: {
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${background})`,
        backgroundSize: '100vh',
        scrollBehavior: 'smooth',
    },
    darkBackground: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 1,
    },
    secondDarkBackground: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        top: '100vh',
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
    },
    midContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        zIndex: 2,
        width: '100%',
        height: '60vh',
    },
    heroContainer: {
        width: '50%',
        padding: '50px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    tabletHeroContainer: {
        width: '70%',
        padding: '40px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    phoneHeroContainer: {
        width: '90%',
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    heroHeader: {
        color: '#D7D7D7', 
        marginBottom: '1.4rem',
        fontSize: '2.7rem'
    },
    tabletHeroHeader: {
        color: '#D7D7D7', 
        marginBottom: '1.4rem',
        fontSize: '2.5rem'
    },
    phoneHeroHeader: {
        color: '#D7D7D7', 
        marginBottom: '1.4rem',
        fontSize: '2.1rem'
    },
    heroParagraph: {
        color: '#D7D7D7', 
        width: '60%', 
        marginBottom: '1.4rem',
        fontSize: '1.35rem'
    },
    phoneHeroParagraph: {
        color: '#D7D7D7', 
        width: '80%', 
        marginBottom: '1.4rem',
        fontSize: '1.35rem'
    },
    landingButton: {
        width: '45%',
        height: '4rem',
        marginRight: '1.2rem',
        fontSize: '1rem',
    },
    phoneLandingButton: {
        width: '35%',
        height: '4rem',
        marginRight: '1.2rem',
        fontSize: '0.8rem',
    },
    waveContainer: {
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
    },
    phoneWaveContainer: {
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
        height: '20vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
    },
    waveImage: {
        width: '100vw',
    },
    arrowContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        display: 'flex',
        color: '#D7D7D7',
        padding: '0.4rem',
        alignItems: 'end',
    },
    arrow: {
        fontSize: '3.5rem',
        marginRight: '1.2rem',
    },
    arrowText: {
        fontSize: '1.5rem',
        marginRight: '1.2rem',
    },
    smallScreenArrow: {
        fontSize: '1.9rem',
        marginRight: '1.2rem',
    },
    smallScreenArrowText: {
        fontSize: '1.1rem',
    },
    secondWaveContainer: {
        position: 'absolute',
        top: '100vh',
        zIndex: 2,
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
    },
    secondWaveImage: {
        transform: 'rotate(180deg)',
        height: '100%',
    },
    bottomScreenContent: {
        marginTop: '20vh',
        color: '#D7D7D7',
        position: 'relative',
        zIndex: 2,
        height: '80vh',
        width: '80%',
        marginLeft: '10vw',
    },
    phoneBottomScreenContent: {
        marginTop: '10vh',
        color: '#D7D7D7',
        position: 'relative',
        zIndex: 2,
        height: '80vh',
        width: '80%',
        marginLeft: '10vw',
    },
    bottomScreenHeader: {
        fontSize: '1.7rem',
    },
    bottomLinksContainer: {
        backgroundColor: '#2D2D2D',
        marginTop: '1rem',
        width: '80vw',
    },
    bottomIndividualLink: {
        width: '90%',
        margin: '1rem',
        padding: '1rem',
        backgroundColor: '#4D4D4D',
        borderRadius: 15,
    },
    phoneLinksContainer: {
        backgroundColor: '#2D2D2D',
        marginTop: '1rem',
        width: '80vw',
    },
}