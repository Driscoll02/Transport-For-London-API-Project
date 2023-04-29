import React from "react";
import NavBar from "./navbar";

export default function LandingPage() {
    return (
        <div style={styles.screenContainer}>
            <NavBar />
        </div>
    )
}

const styles = {
    screenContainer: {
        height: '100vh',
    },
}