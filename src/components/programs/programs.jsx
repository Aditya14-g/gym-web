import React from 'react';
import './programs.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

function Programs(){
    console.log(programsData);
    return(
        <div className="programs" id="progrmas">
            <div className="programs-header">
                <span>Explore our</span>
                <span>Programs</span>
                <span>to shape you</span>
            </div>

            <div className="program-categories">
                {programsData.map((program) =>(
                    <div className="color-ani">
                        <div className='catogory'>
                            {program.image}
                            <span>{program.heading}</span>
                            <span>{program.details}</span>
                            <div className="join-now"><span>Join Now</span><img src={RightArrow}/></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Programs;