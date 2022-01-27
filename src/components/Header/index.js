import React from "react";
import './Header.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({bla}) => {
    return (
        <header className={bla? 'bla' : ''}>
            <div className="header--logo">
                <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/0/08/20190205011501%21Netflix_2015_logo.svg/120px-Netflix_2015_logo.svg.png" alt="netflix"/></a>
            </div>
            <div className="header--user">
                <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg" alt="usuario" /></a>
            </div>
        </header>
    )
} 