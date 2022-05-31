import React from "react";
import "./About.css";
import img from "../../assests/about.jpg";
import img1 from "../../assests/aboutoffice.webp";
import LightSpeed from 'react-reveal/LightSpeed';
import Roll from 'react-reveal/Roll';

const About = () => {
  return (
    <>
    <div className="aboutMain">
        
      <div className="aboutMainOne" data-aos="fade-right">
        <div className="info">
          <h3 className='t-2 anim-o anim-js'>A tech-craftery of playful professionals</h3>
          <div className="text-content anim-o anim-js">
            <p>Turbulent is a place where playful professionals activate their techno-creative intuition.</p>
          </div>
          <a
            href="/life/"
            class="btn-arrow anim-o anim-js"
            style={{color:' #04E3FF',background:'#001f41'}}
            // style="--color:; --background: #001f41;"
          >
            
          
            Life at turbulent
          </a>
        </div>
        <div className="image">
        <Roll right>
          
          <img src={img} alt="" srcset="" />
        </Roll>
        </div>
      </div>
      <div className="aboutMaintwo" data-aos="fade-left">
        <div className="image">
        <LightSpeed right>
          
          <img src={img1} alt="" srcset="" />
        </LightSpeed>
        </div>
        <div className="info">
          <h3 className='t-2 anim-o anim-js'>A tech-craftery of playful professionals</h3>
          <div className="text-content anim-o anim-js">
            <p>Turbulent is a place where playful professionals activate their techno-creative intuition.</p>
          </div>
          <a
            href="/life/"
            class="btn-arrow anim-o anim-js"
            style={{color:' #04E3FF',background:'#001f41'}}
            >
            
          
            Life at turbulent
          </a>
        </div>
      </div>
              </div>
    </>
  );
};

export default About;
