import React from 'react'
import "./Navbar.css"

const Navbar = () =>{
    return(
        <>
          <ul class="nav nav-underline nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link " href="/">HOME</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/skills">SKILLS</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/project">PROJECT</a>
  </li>
  <li class="nav-item">
     <a class="nav-link " href="/contact">CONTACT ME</a> 
 
  </li>
</ul>

        </>
    )

}

export default Navbar;