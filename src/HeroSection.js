import React from 'react';
import './HeroSection.css';
import '../App.css';
import myVideo from './video1/video-1.mp4';
import Button from './Button';
const HeroSection = () => {
    return (
        <div className="hero-container">
        <video src={myVideo} autoPlay loop muted />
        <h1>ADVENTURES AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="btn-form">
        <Button type="button" ButtonStyle="btn-outline" ButtonSize="btn-large" >
            GET STARTED
        </Button>
        <Button type="button" ButtonStyle="btn-primary" ButtonSize="btn-large" >
            WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        </div>
        </div>
    );
}

export default HeroSection;
