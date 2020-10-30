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
            <a href="https://drive.google.com/file/d/1bVITR9k3uWIuh6j1jXXhUm4VzerYvUgy/view?usp=sharing" className="main-button" target="_blank">Download My Resume </a>

        </div>
    );
};

export default Banner;