import React from 'react'
import Agebson7 from '../../images/Agebson7.png'
import './about.css'


const About = () => {
  

  return (
    
    <div>
      < section className='about' id='About'>
        <div className='main'>
        <img src={Agebson7}alt="Agebson7" className="a-img"
          />
          <div className='about-text'>
            <h1 className='about-header'>About Me</h1>
            <h5>Developer<span> & Designer</span></h5>
            <p>I am passionate about building scalable software using 
            cutting edge technology and modern tools that improves business profitability.
             I specialize in creating software
            for clients ranging from individuals and small-businesses all the
            way to large enterprise corporations. What would you do if you had
            a software expert available at your fingertips</p>
            <a href='#'>
            <button>Let's Talk</button>
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}
   
export default About







