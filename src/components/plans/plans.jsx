import React,{useState} from 'react';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import './plans.css';
import orange from '../../assets/tick.png';

function Plans(){
    const [imgSrc,setImgSrc]=useState(whiteTick);

    return (
        <div className='plans-container'>
            <div className="programs-header" style={{gap: '2rem'}}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>

            <div className='plans'>
                {plansData.map((plan,i)=>(
                    <div className='plan'
                    onMouseEnter={()=>setImgSrc(orange)}
                    onMouseLeave={()=>setImgSrc(whiteTick)}
                    >
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>${plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature,i)=>(
                                <div className='feature' >
                                    <img src={imgSrc} alt=""></img>
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>See more benefits -></span>
                        </div>
                        <button className='btn'>
                            Join more
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plans;