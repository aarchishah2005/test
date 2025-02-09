import React from 'react';
import './Header.css';  // Import CSS for styling

const Header = () => {
    return (
        <>
        <header className="header">
            <div className="container">
                <div className="header-left">
                    <a href="#home" className="header-link">
                    <h1>Falguni Vahora</h1>
                    <h2>Financial Coach</h2>
                    </a>


                 </div>

                <div className="header-right">
                    <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="https://www.blissquants.com/BlissAboutUs#collapseOne">About</a></li>
                            <li><a href="https://www.blissquants.com/Bliss_Coaching">Coaching</a></li>
                            <li><a href="https://www.amazon.in/dp/B09NWH5S7R">Book</a></li>
                            <li><a href="https://www.blissquants.com/BlissAboutUs#collapseOne">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;
