import React from 'react'
import "../Nav/Nav.css"

function Nav() {
  return (
    <div className='flex'>
    <p data-to-scrollspy-id="projects" className='nav_item ml-5'>Projects</p>
    <p data-to-scrollspy-id="about" className='nav_item'>About</p>
    </div>
 
  )
}

export default Nav