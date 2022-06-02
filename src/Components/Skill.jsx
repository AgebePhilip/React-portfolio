import React from 'react'
import firebase from '../images/firebase.png'
import tailwind from '../images/tailwind.png'
import css from '../images/css.png'
import react from '../images/react.png'
import html from '../images/html.png'
import github from '../images/github.png'
import javascript from '../images/javascript.png'
import redux from '../images/redux.png'
import sass from '../images/sass.png'
import './skills.css'
const Skill = () => {
  return (
    <div className='inner' id='Skill'>
        <div className='header'>
            <h1>My Technical Skills</h1>
        </div>
        <div className='header-title'>
        <p>I am comfortable using these tools to effectively design and develop<br/> responsive applications</p>
        </div>
        <div className='container'>
            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img className='skill-icon' src={firebase} alt='firebase'/>
                    </div>
                    <h3>FIREBASE</h3>
                </div>
                <p>It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit.</p>
            </div>

            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img src={html} alt='html' className='skill-icon'/>
                    </div>
                    <h3>HTML</h3>
                </div>
                <p>allows web users to create and structure sections, paragraphs, and links using elements, tags, and attributes.</p>
            </div>

            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img src={css} alt='css' className='skill-icon'/>
                    </div>
                    <h3>CSS</h3>
                </div>
                <p>This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate </p>
            </div>

            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img className='skill-icon' src={javascript} alt='javascript'/>
                    </div>
                    <h3>JAVASCRIPT</h3>
                </div>
                <p> It is the foundation of frontend web development and is the key ingredient in frameworks like ReactJS, Angular, and VueJS. It can also help create solid backends with platforms like Nodejs, runs desktop applications
                     .</p>
            </div>
            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img className='skill-icon' src={react} alt='react'/>
                    </div>
                    <h3>REACTJS</h3>
                </div>
                <p>React is an open source Library for building front end applications and it has exponentially taken over the world of front end development completely.</p>
            </div>
            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img className='skill-icon' src={github} alt='github'/>
                    </div>
                    <h3>GITHUB</h3>
                </div>
                <p>The absence of liquidity is not a hindrance to deploy your work. github helps us developers to deploy applications without spending a dime</p>
            </div>
            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img className='skill-icon' src={tailwind} alt='tailwind'/>
                    </div>
                    <h3>TAILWIND</h3>
                </div>
                <p>The appearance of our work speaks volume of our professionalism</p>
            </div>

            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img className='skill-icon' src={sass} alt='tailwind'/>
                    </div>
                    <h3>SASS</h3>
                </div>
                <p>Sass boasts more features and abilities than any other CSS extension language out there. The Sass Core Team has worked endlessly to not only keep up, but stay ahead.</p>
            </div>


            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img className='skill-icon' src={redux} alt='redux'/>
                    </div>
                    <h3>REDUX</h3>
                </div>
                <p>Centralizing your application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more..</p>
            </div>


        </div>
      
    </div>
  )
}

export default Skill


