import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div className='navbar'>
      <nav>
        <h9 className='Logo'><span>X</span>pot<span>Tech</span></h9>
          <ul>
              <li><a href='#Home'>Home</a></li>
              <li><a href='#About'>About</a></li>
              <li><a href='#Skill'> Skill</a></li>
              <li><a href='#'>Projects</a></li>
              <li><a href='#About'>Contact</a></li>
              <li><a href='#About'>Testimonial</a></li>
          </ul>
      </nav>
    </div>
  )
}

export default Nav
