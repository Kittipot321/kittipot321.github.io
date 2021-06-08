import React from 'react';
import './Footer.css';
const Footer = () => {
    const footer = {
        textAlign:"center"
    }
    return(
    <footer className="container-fluid" style={footer}>
        <div>
            <a href="https://github.com/Kittipot321"><i className="fab fa-github github-icon"/></a>
            <p>&copy; 2021 Kittipot Laorngsri</p>
        </div>
    </footer>
    );
}
export default Footer;