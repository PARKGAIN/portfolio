import React from 'react'
import "../Nav/Nav.css"
function Nav() {
  return (
    <div className='flex'>
    <p data-to-scrollspy-id="first">Projects</p>
    <p data-to-scrollspy-id="second">About</p>
    </div>
 
  )
}

export default Nav