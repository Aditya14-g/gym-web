import React from 'react';
import './home.css';
import Header from '../headers/header';
import home_image from '../../assets/hero_image.png';
import home_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from '../../assets/calories.png';

function Home(){
    return(
        <div className='home'>
            <div className="left-h">
                <Header/>

                <div className='the-best'>
                    <div className='slider'></div>
                    <span>I know everyone say this we are best.</span>
                </div>

                <div className='home-text'>
                    <div>
                        <span className='stroke-text'>WORK </span>
                        <span>HARD</span>
                    </div>

                    <div>
                        <span>FOR YOUR DREAMS</span>
                    </div>

                    <div>
                        <span>Be regular and in no time your body will look good</span>
                    </div>
                </div>
                <div className="figures">
                    <div><span>140+</span><span>expert coachs</span></div>
                    <div><span>980+</span><span>members joined</span></div>
                    <div><span>50+</span><span>fitness programs</span></div>
                </div>
                <div className="home-button">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <div className='btn'>
                    Join Now
                </div>

                <div className='heart-rate'>
                    <img src={Heart} alt='heart'></img>
                    <span>Heart Rate</span><span>116 bpm</span>
                </div>

                <img src={home_image} className='home-image'></img>
                <img src={home_image_back} className='home-image-back'/>

                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                    <span>Calories Burned</span><span>4500 calories</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;