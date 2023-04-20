import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo_hvid.svg"
export default function Nav(){
  const [isNavExpanded, setIsNavExpanded] = useState(false)

    return(
      <nav className="navigation">
      <NavLink to="/"><img className="brandlogo" src={logo} alt="logo"/>
      </NavLink>
      <button className="hamburger"   onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <a id="btnmobil" href="/">Hjem</a>
          </li>
          <li>
            <NavLink id="btnlaptop" to="/">Hjem</NavLink>
          </li>
          <li>
            <a id="btnmobil" href="/cases">Cases</a>
          </li>
          <li>
            <NavLink id="btnlaptop" to="/cases">Cases</NavLink>
          </li>
          <li>
          <a id="btnmobil" href="/priser">Priser</a>
          </li>
          <li>
          <NavLink  id="btnlaptop" to="/priser">Priser</NavLink>
          </li>
          <li>
          <a id="btnmobil" href="/kontakt">Kontakt</a>
          </li>
          <li>
          <NavLink id="btnlaptop" className="kontaktbtn" to="/kontakt">Kontakt</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    )
}

