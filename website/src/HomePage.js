import React from 'react';
import './HomePage.css';
import './App.css'
import path from "./images/personalphoto.jpg"

function HomePage() {
    return (
        <div className='home--container'>
            <div className="home--photo">
                <img src={path}/>
            </div>
            <div className="home--text">
                <h1>I'm Philip Tarrer</h1>
                <h2>A Software Developer</h2>
                <h3>based in Atlanta.</h3>
            </div>
        </div>
    );
}

export default HomePage;