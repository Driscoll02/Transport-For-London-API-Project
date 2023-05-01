import React from "react";
import Logo from '../images/LondonTransportLogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function NavBar() {
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
    logo: {
        width: 200,
        height: 90,
    },
    navLinksContainer: {
        flex: 6,
    },
    linksList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
    },
    linkText: {
        color: '#9D9D9D',
        textDecoration: 'none',
        fontSize: '1.3rem',
    },
    socialLinksList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '15%'
    },
}