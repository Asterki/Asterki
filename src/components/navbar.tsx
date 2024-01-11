import React from "react";

import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="absolute top-0 right-0 p-4 w-full flex items-center justify-between">
            <div>
                <h1 className="text-2xl">Asterki Dev</h1>
                <p>Fernando D. Rivera</p>
            </div>

            <div className="flex">
                <a className="flex" href="https://github.com/Asterki" target="_blank" rel="noreferrer">
                    <img className="opacity-70 hover:opacity-100 w-[30px] m-[10px] cursor-pointer transition-all" src="/assets/svg/github.svg" alt="GitHub" />
                </a>
                <a className="flex" href="https://instagram.com/nicht.fer" target="_blank" rel="noreferrer">
                    <img className="opacity-70 hover:opacity-100 w-[30px] m-[10px] cursor-pointer transition-all" src="/assets/svg/instagram.svg" alt="Instagram" />
                </a>
                <a className="flex" href="https://www.linkedin.com/in/fernando-rivera-365b74270/" target="_blank" rel="noreferrer">
                    <img className="opacity-70 hover:opacity-100 w-[30px] m-[10px] cursor-pointer transition-all" src="/assets/svg/linkedin.svg" alt="Linkedin" />
                </a>
                <a className="flex" href="https://medium.com/@asterki.dev" target="_blank" rel="noreferrer">
                    <img className="opacity-70 hover:opacity-100 w-[30px] m-[10px] cursor-pointer transition-all" src="/assets/svg/medium.svg" alt="Medium" />
                </a>
                <a className="flex" href="https://twitter.com/AsterkiDev" target="_blank" rel="noreferrer">
                    <img className="opacity-70 hover:opacity-100 w-[30px] m-[10px] cursor-pointer transition-all" src="/assets/svg/twitter.svg" alt="Twitter" />
                </a>
                <a className="flex" href="mailto:asterki.dev@proton.me" target="_blank" rel="noreferrer">
                    <img className="opacity-70 hover:opacity-100 w-[30px] m-[10px] cursor-pointer transition-all" src="/assets/svg/mail.svg" alt="Email" />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
