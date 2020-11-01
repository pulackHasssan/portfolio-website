import React from 'react';
import './Banner.css';
import Typical from 'react-typical';
const Banner = () => {
    return (
        <div className="text-center banner-style">
        <div className="container">
        <h1 className="welcome-style">Welcome!</h1>
           <br/>
          <div className="container text-center row">
          <div className="Iam col-md-6 col-sm-12">

<p>I am</p>
<b>
  <div class="innerIam">
      Pulack Hassan<br/>
    a web developer<br />
    a javascript developer<br/> 
    a react.js developer<br />
    a mern developer<br />
    </div>
</b>
            <br/>
            <br/>
            <a href="https://drive.google.com/file/d/1dWTATdkaTtc0e9CLHZ9kVv9Rm5egcsFw/view?usp=sharing" className="main-button" target="_blank">Download Resume </a>
            </div>
            <div className="img-div col-md-6 col-sm-12">
                <img src="https://i.ibb.co/T0C80dG/edited-for-website.png" className="img-sizing img-fluid" alt=""/>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Banner;