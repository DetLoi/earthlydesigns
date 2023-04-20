import { NavLink } from "react-router-dom";
import logoblack from "../images/logo.svg"


export default function priser(){
    return(
       <main id="priser">
        <section id="prissektion">
            <div className="pris-text">
        <h1 className="pad-bund">Priser </h1>
        <p>Hos Earthly Designs er alle vores ydelser baseret på vores konsulenters ekspertise og deres angivne timepris.
<br/><br/>Kunder kan anmode om tilbud og dermed opnå rabatter baseret på en volumenbaseret tidsplan. 
<br/><br/>Standardpriserne gælder som grundlag for fakturering, medmindre andet er aftalt.</p>
      </div>
       <div className="pris-box">
        <div className="pris">
        <h4>Marketing konsulent</h4>
        <p>750,-</p>
        </div>
        <div className="pris">
        <h4>Web og support</h4>
        <p>750,-</p>
        </div>
        <div className="pris">
        <h4>Programmør </h4>
        <p>950,-</p>
        </div>
        <div className="pris">
        <h4>Grafiker</h4>
        <p>750,-</p>
        </div>
        <p id="moms-tekst">*Alle priser er angivet ekskl. moms.</p>
       </div>
        </section>
        <section className="klippekort">
            <div className="klippekort-tekst">
<h3 className="pad-bund">Klippekort</h3>
       <p>
       Et klippekort tilbyder dig fleksibilitet, da det ikke kræver en fast driftsaftale. Når du har brug for at få løst en opgave, kontakter du os blot, og vi registrerer den anvendte arbejdstid på dit klippekort. Dette giver dig større kontrol og frihed i forhold til opgaveløsning.
       </p></div>
       <div className="klippekort-box">
        <div className="klippekort-content">
        <p>15 timer i klippekort</p>
        <h1 className="pad-bund">10.125,-</h1>
        <p>Ved forudbetalt køb af +15 timer får du 10% rabat (675 kr.) med klippekortet.  </p>
        <hr/>
        <div className="klippekort-info">
        <p>Tid er afregnet pr. påbegyndt 15 min. <br/> Muligt for alle kunder <br/> Genforhandling/tegning af nye timer</p>
        </div>
        <NavLink to="/cases"><button class="custom-button">Bestil</button></NavLink>
       </div>
       </div> 
 </section>
 <div className="up-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  <svg className="up-arrow" viewBox="0 0 24 24">
    <path d="M4 15l8-8 8 8z" />
  </svg>
</div>
       </main> 
    )
}