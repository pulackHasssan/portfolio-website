import React from 'react';
import Navigation from '../Navigation/Navigation';
import './About.css';

const About = () => {
    return (
      <div>
          <Navigation/>
            <div className='container'>
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
                    <img src="https://i.ibb.co/0Mwrt1Z/service3.png" alt="" className='img-fluid img-style'/>
                </div>
            </div>
            <h2>Skills</h2> <br/>
            <div className='row text-justify'>
            
                <div className='col-md-4'>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>BOOTSTRAP</li>
                        <li>JAVASCRIPT</li>
                        <li>REACT.JS</li>
                        <li>MONGODB</li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>



            </div>
        </div>
      </div>
    );
};

export default About;