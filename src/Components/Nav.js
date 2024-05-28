import "./Nav.css"
import React, { useState } from "react"
import {Link} from "react-router-dom"
import {FaBars, FaTimes, FaInfinity} from "react-icons/fa"

const Nav = () => {

    const [click,setClick] = useState(false);
    const handleclick = () => setClick(!click);

  return (
    <div className="header">
      <h1>{<FaInfinity className="nav-icon" size={36} />}
          <Link to='/contact' className="nav-span">Say Hi</Link></h1>
      <ul className={click ? "list active" : "list"}>
        <li>
            <Link to = '/'>Home</Link>
        </li>
        <li>
            <Link to = '/Project'>Project</Link>
        </li>
        <li>
            <Link to = '/About'>About</Link>
        </li>
        <li>
            <Link to = '/Contact'>Contact</Link>
        </li>
      </ul>
      <div className="menu" onClick={handleclick}>
        {
        click ? (<FaTimes size={20}/>) : (<FaBars size={20}/>)          
        }
      </div>
    </div>
  )
}

export default Nav
