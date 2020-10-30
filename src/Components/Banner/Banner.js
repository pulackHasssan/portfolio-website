import React from 'react';
import './Banner.css';
import Typical from 'react-typical';
const Banner = () => {
    return (
        <div className="text-center banner-style">
           <h1>Welcome!</h1>
            <h4>I am 
                <Typical
                loop={Infinity}
                wrapper='b'
                steps={[' Pulack Hassan', 1000,
                        ' a frontend web developer.', 1000, 
                        ' a React.js developer.', 1000,
                        ' a MERN developer.', 1000
            ]}
                />
            </h4>
            <button className="main-button">Download My Resume</button>

        </div>
    );
};

export default Banner;