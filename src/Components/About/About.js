import React from 'react';
import Navigation from '../Navigation/Navigation';
import './About.css';

const About = () => {
    return (
      <div>
          <Navigation/>
            <div className='container about-style'>
            <div className='row'>
                <div className='col-md-6 col-sm-12 text-justify'>
                    <h2>Personal Information:</h2>
                  <p>Full Name: Pulack Hassan</p>  
                    <p>Nickname: Benson</p>
                    <p>Nationality: Bangladeshi</p>
                    <p>Present Address: Savar, Dhaka, Bangladesh</p>
                    <p>Email: pulackh@gmail.com</p>
                    <p>LinkedIn: </p>
                    <p>Facebook: https://www.facebook.com/pulack.iglesias/</p>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <img src="https://i.ibb.co/tQjdk9Z/IMG-20201030-185652-removebg-preview.png" alt="" className='img-fluid img-style' style={{height: '400px'}}/>
                </div>
            </div>
            <h2>Skills</h2> <br/>
            <div className='d-flex align-content-end flex-wrap'>
                <h4 className="skill-style">HTML</h4>
                <h4 className="skill-style">CSS</h4>
                <h4 className="skill-style">JAVASCRIPT</h4>
                <h4 className="skill-style">REACT.JS</h4>
                <h4 className="skill-style">NODE.JS</h4>
                <h4 className="skill-style">EXPRESS.JS</h4>
                <h4 className="skill-style">MONGODB</h4>

            </div>
        </div>
      </div>
    );
};

export default About;