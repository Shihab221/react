import React from "react";
import './footer.css';

function Footer() {
    return(
        <div className="footer">
            <div className="contents">
            <div className="col-1">
                <h2>SWADEXRESS</h2>
                <p>Keraniganj, Dhaka</p>
                <p>Mobile: 01712345678</p>
                <p>ashihab205@gmail.com</p>
                <button>E-mail us</button>
            </div>
            <div className="col-2">
                <ul>
                    <li><a href="#">Company information</a></li>
                    <li><a href="#">Customers</a></li>
                    <li><a href="#">Sitemap</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="col-3">
                <ul>
                    <li><a href="#">Android Development</a></li>
                    <li><a href="#">Web Dev</a></li>
                    <li><a href="#">Game Dev</a></li>
                    <li><a href="#">Server Services</a></li>
                </ul>
            </div>
            <div className="col-4">
                <ul>
                    <li><a href="#">Android Development</a></li>
                    <li><a href="#">Web Dev</a></li>
                    <li><a href="#">Game Dev</a></li>
                    <li><a href="#">Server Services</a></li>
                </ul>

            </div>
            </div>

        </div>
    )
}

export default Footer;