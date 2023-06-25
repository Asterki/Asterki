import React from "react";

import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar-component">
            <h1>Asterki Dev</h1>

            <div className="socials">
                <a href="https://github.com/Asterki" target="_blank" rel="noreferrer">
                    <img src="/assets/svg/github.svg" alt="GitHub" />
                </a>
                <a href="https://instagram.com/asterki.dev" target="_blank" rel="noreferrer">
                    <img src="/assets/svg/instagram.svg" alt="Instagram" />
                </a>
                <a href="https://twitter.com/AsterkiDev" target="_blank" rel="noreferrer">
                    <img src="/assets/svg/twitter.svg" alt="Twitter" />
                </a>
                <a href="mailto:asterki.dev@proton.me" target="_blank" rel="noreferrer">
                    <img src="/assets/svg/mail.svg" alt="Email" />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
