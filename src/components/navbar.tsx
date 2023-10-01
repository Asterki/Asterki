import React from "react";

import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar-component">
            <div>
                <h1>Asterki Dev</h1>
                <p>Fernando D. Rivera</p>
            </div>

            <div className="socials">
                <a href="https://github.com/Asterki" target="_blank" rel="noreferrer">
                    <img src="/assets/svg/github.svg" alt="GitHub" />
                </a>
                <a href="https://instagram.com/nicht.fer" target="_blank" rel="noreferrer">
                    <img src="/assets/svg/instagram.svg" alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/fernando-rivera-365b74270/" target="_blank" rel="noreferrer">
                    <img src="/assets/svg/linkedin.svg" alt="Linkedin" />
                </a>
                <a href="https://medium.com/@asterki.dev" target="_blank" rel="noreferrer">
                    <img src="/assets/svg/medium.svg" alt="Medium" />
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
