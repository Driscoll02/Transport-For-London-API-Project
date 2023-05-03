import React, {useState} from "react";
import Logo from '../images/LondonTransportLogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import { useMediaQuery } from "@mui/material";

export default function NavBar() {
    const desktopMatches = useMediaQuery('(min-width:1024px)');
    const tabletMatches = useMediaQuery('(min-width:768px)');

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const DesktopScreen = () => {
        return (
            <nav style={styles.navContainer}>
                <div style={styles.logoContainer}>
                    <a href="/">
                        <img src={Logo} alt="Logo" style={styles.logo} />
                    </a>
                </div>
                <div style={styles.navLinksContainer}>
                    <ul style={styles.linksList}>
                        <li><a style={styles.linkText} href="/accidentstats">Accident Stats</a></li>
                        <li><a style={styles.linkText} href="/airquality">Air Quality</a></li>
                        <li><a style={styles.linkText} href="#">Bike Points</a></li>
                        <ul style={styles.socialLinksList}>
                            <li><a style={styles.linkText} href="#"><FontAwesomeIcon icon={faTwitter} style={{fontSize: '1.8rem'}} /></a></li>
                            <li><a style={styles.linkText} href="#"><FontAwesomeIcon icon={faInstagram} style={{fontSize: '1.8rem'}} /></a></li>
                            <li><a style={styles.linkText} href="#"><FontAwesomeIcon icon={faFacebook} style={{fontSize: '1.8rem'}} /></a></li>
                        </ul>
                    </ul>
                </div>
            </nav>
        )
    }

    const TabletScreen = () => {
        return (
            <nav style={styles.navContainer}>
                <div style={styles.logoContainer}>
                    <a href="/">
                        <img src={Logo} alt="Logo" style={styles.logo} />
                    </a>
                </div>
                <div style={styles.navLinksContainer}>
                    <ul style={styles.linksList}>
                        <li><a style={styles.tabletLinkText} href="/accidentstats">Accident Stats</a></li>
                        <li><a style={styles.tabletLinkText} href="/airquality">Air Quality</a></li>
                        <li><a style={styles.tabletLinkText} href="#">Bike Points</a></li>
                        <ul style={styles.socialLinksList}>
                            <li><a style={styles.linkText} href="#"><FontAwesomeIcon icon={faTwitter} style={{fontSize: '1.4rem'}} /></a></li>
                            <li><a style={styles.linkText} href="#"><FontAwesomeIcon icon={faInstagram} style={{fontSize: '1.4rem'}} /></a></li>
                            <li><a style={styles.linkText} href="#"><FontAwesomeIcon icon={faFacebook} style={{fontSize: '1.4rem'}} /></a></li>
                        </ul>
                    </ul>
                </div>
            </nav>
        )
    }

    const PhoneScreen = () => {
        const toggleMenu = () => {
            isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
        }

        // Side menu
        const displayMenu = () => {
            if (isMenuOpen) {
                return (
                    <div style={styles.menu}>
                        <ul>
                            <li><Button variant='contained' onClick={toggleMenu} style={{margin: '0.8rem', float: 'right'}}>Close menu</Button></li>
                            <li style={styles.menuLink}><a style={styles.menuLinkText} href="/accidentstats">Accident Stats</a></li>
                            <li style={styles.menuLink}><a style={styles.menuLinkText} href="/airquality">Air Quality</a></li>
                            <li style={styles.menuLink}><a style={styles.menuLinkText} href="/accidentstats">Bike Points</a></li>
                        </ul>
                    </div>
                )
            }
        }

        return (
            <div>
                <nav style={styles.navContainer}>
                    <div style={styles.logoContainer}>
                        <a href="/">
                            <img src={Logo} alt="Logo" style={styles.phoneLogo} />
                        </a>
                    </div>
                    <div style={styles.phoneNavLinksContainer}>
                        <ul style={styles.phoneLinksList}>
                            <li><button style={styles.phoneLinkText} onClick={toggleMenu}><FontAwesomeIcon icon={faBars} style={{fontSize: '1.8rem'}} /></button></li>
                        </ul>                
                    </div>
                </nav>
                {displayMenu()}
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

    return (
        <div>
            {PhoneScreen()}
        </div>
    )
}

const styles = {
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '2vh',
        marginLeft: '2vh',
        minHeight: '10vh',
        position: 'relative',
        zIndex: 2,
    },
    logoContainer: {
        flex: 2,
    },
    phoneLogo: {
        width: '30vw',
        height: 90,
    },
    logo: {
        width: 200,
        height: 90,
    },
    navLinksContainer: {
        flex: 6,
    },
    phoneNavLinksContainer: {
        flex: 4,
    },
    linksList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
    },
    phoneLinksList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '1.2rem'
    },
    linkText: {
        color: '#9D9D9D',
        textDecoration: 'none',
        fontSize: '1.3rem',
    },
    tabletLinkText: {
        color: '#9D9D9D',
        textDecoration: 'none',
        fontSize: '1.1rem',
    },
    phoneLinkText: {
        color: '#9D9D9D',
        textDecoration: 'none',
        fontSize: '1.1rem',
        backgroundColor: 'rgba(30, 30, 30, 0)',
        border: 'none',
        cursor: 'pointer'
    },
    socialLinksList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '15%'
    },
    menu: {
        position: 'absolute',
        zIndex: 3,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#2D2D2D',
        width: '40vw',
        height: '28vh',
        marginTop: '2vh',
    },
    menuLink: {
        backgroundColor: '#3E3E3E',
        marginBottom: '1.2rem',
        padding: '0.7rem',
    },
    menuLinkText: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.2rem'
    },
}