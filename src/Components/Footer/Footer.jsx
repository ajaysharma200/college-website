import React from 'react'
import "./Footer.css"

const Footer = () => {
return (
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Edusity. All rights reserved.</p>
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
    </footer>
)
}

export default Footer