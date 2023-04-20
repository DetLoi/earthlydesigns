import logo from "../images/logo_hvid.svg"
import lin from "../images/linknd.svg"
import fb from "../images/facebook.svg"
import tlf from "../images/tlf.svg"
import mail from "../images/mail.svg"
import adresse from "../images/loca.svg"
import ig from "../images/insta.svg"
import { NavLink } from "react-router-dom";
export default function Footer(){
    const handleClick = () => {
        window.scrollTo(0, 0);
      }

    return(
        <footer>
            <section className="footercontent">
        <div className="brandinfo">
        <NavLink to="#" onClick={handleClick}>
        <img className="footerlogo" src={logo} alt="logo" />
      </NavLink>
        <p>Planet-venlige digitale løsninger: Earthly Designs skaber hjemmesider og re-designs med fokus på miljøvenlige tiltag, der vil få din målgruppe og verden til at smile. </p>
        </div>

        <div className="kontaktinfo">
       
        <h3>Kontakt info</h3>
        <div className="kontakticons">
        <img className="tlf" src={tlf} alt="Linkedin"/>
        <a href="tel:42-92-69-61">+45 12 34 56 78</a>
        </div>
        <div className="kontakticons">
        <img className="mail" src={mail} alt="Linkedin"/>
       <a href="mailto:spkzdloi@gmail.com">kontakt@earthlydesigns.dk</a>
        </div>
        <div className="kontakticons">
        <img className="adresse" src={adresse} alt="Linkedin"/>
        <p>Lorem Ipsul 11 st. th.</p>
        </div>  
        </div >

        <div className="someinfo">
            
        <h3>Følg os</h3> 
        <div className="some-icons">
        <div>
    <a href="https://www.linkedin.com/"><img className="linkedin" src={lin} alt="Linkedin"/></a>
  </div>
  <div>
    <a href="https://www.facebook.com/"><img className="facebook" src={fb} alt="Facebook"/></a>
  </div>
  <div>
    <a href="https://www.instagram.com/"><img className="instagram" src={ig} alt="Instagram"/></a>
  </div>
        </div>
        </div>
        </section>
        <section className="cptext">
            <p>©Copyright 2023 | Earthly Designs | CVR: 12345678</p>
        </section>

        </footer>
    )
}