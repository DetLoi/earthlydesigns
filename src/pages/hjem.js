import { NavLink } from "react-router-dom";
import pccase1 from "../images/innocent laptop.webp";
import mcase2 from "../images/aliter mobil.webp"
import Lottie from "lottie-react";
import anim1 from "../animations/lottielogo.json"
import logoblack from "../images/logo.svg"
import React, { useState } from "react";



export default function Hjem(){
    const [isStopped, setIsStopped] = useState(false);

  const onEnterFrame = (animation) => {
    const progress = animation.playCount / animation.totalFrames;
    if (progress >= 0.5 && !isStopped) {
      setIsStopped(true);
    }
  };
    return(
       <main id="forside">
        <section className="landingpage">
        <div className="animationbox">
          <Lottie
            className="lottielogo"
            animationData={anim1}
            loop={true}
            autoplay={true}
            isStopped={isStopped}
            config={{
              onEnterFrame: onEnterFrame,
            }}
          />
        </div>
        <div className="textbox">
            <h1 className="pad-bund">Miljøvenlige hjemmesider: Godt for din virksomhed, bedre for planeten!</h1>
            <p>Planet-venlige og performance dygtige løsninger: Earthly Designs <span className="boldhtml">skaber hjemmesider</span> og re-designs med fokus på miljøvenlige tiltag, der vil få din målgruppe og verden til at smile. Vi guider og samarbejder med kunden for at skabe en digital løsning som overholder vores værdier, uden at gå på kompromis med kundens brugerbehov.
            </p>
        </div>
        </section>

        <section className="vaerdier">
        <h1>Vores værdier</h1>
        <div class="card-container">
            <div class="card card-1">
                <h3>Bæredygtighed</h3>
                <p>Hos Earthly Design ønsker vi at skabe viden omkring bæredygtighed inden for digitalt design.</p>
            </div>
            <div class="card card-2">
                <h3>Vi løser det!</h3>
                <p>Vi designer eller optimere din virksomheds hjemmeside for dig</p>
            </div>
            <div class="card card-3">
                <h3>Brugervenligt</h3>
                <p>Vi laver brugervenlige og performance dygtige hjemmesider.</p>
            </div>
        </div>
        <div class="card-container">
            <div class="card">
                <h3>Samarbejde</h3>
                <p>Det er vigtigt for os hos Earthly Design at have et tæt og godt samarbejde med vores kunder.</p>
            </div>
            <div class="card">
                <h3>Miljø-venlig</h3>
                <p>Ved at overholde bæredygtige principper, mindsker vi Co2 udledningen fra din hjemmeside.</p>
            </div>
            <div class="card">
                <h3>Rimelig Pris</h3>
                <p>Vi sørger for at du bliver tilfreds med samarbejdet med os, og får mest muligt ud af din tid og penge.</p>
            </div>
        </div>
    </section>
    
    <section id="content-box">
        <h1 id="case-titel" className="pad-bund">Vores dygtige team: En samling af erfarne digitale eksperter</h1>
        <div className="casedisplay">
            <img id="laptopcase" src={pccase1} alt="innocent laptop"/>
            <img id="mobilcase" src={mcase2} alt="innocent mobil"/>
        </div>
        <div className="case-text-hjem">
            <h3>Innocent, Aliter networks og mange flere!</h3>
            <p>Vi har hjulpet en bred vifte af virksomheder med at optimere deres hjemmesider.<br/>
Kig på vores forrige cases, for at få en indblik i hvad vi kan gøre for jer.</p>
<NavLink to="/cases"><button class="custom-button">Se forrige projekter</button></NavLink>
        </div>
        </section>
        <section id="manifesto-box">
            <div  className="manifest-titel">
        <h1 className="pad-bund">Miljøvenlige designs</h1>
        <p>Når det kommer til den ultimative guide til miljøvenligt webdesign, er Sustainable Web Manifesto det bedste sted at gå hen. Deres seks grundlæggende principper vil hjælpe dig med at måle, hvor bæredygtig din hjemmeside er, og hvor du kan forbedre:</p>
</div>   
 <div id="all6">
       <div className="manifests">
            <div className="manifesto">
                <h4>Clean </h4>
                <p id="padding-1">De tjenester, der leveres og bruges af virksomheden, skal drives af vedvarende energi.</p>
             </div>
       <div className="manifesto">
                <h4>Efficient </h4>
                 <p>De tjenester og produkter, virksomheden leverer, skal bruge færrest mulige materielle ressourcer og energi.</p>
            </div>
        </div>
       <div className="manifests">
            <div className="manifesto">
        <           h4>Open  </h4>
                    <p>De produkter og tjenester, virksomheden leverer, skal være tilgængelige og give brugerne mulighed for at kontrollere deres data og udveksle information åbent.</p>
            </div>
             <div className="manifesto">
                     <h4>Honest</h4>
                    <p>De tjenester og produkter, der leveres, må ikke udnytte eller vildlede brugerne i deres indhold eller design.</p>
             </div>
        </div>
         <div className="manifests">
            <div className="manifesto">
                <h4>Regenerative</h4>
                <p>Produkter og tjenester, der tilbydes af virksomheden, skal støtte en økonomi, der nære planeten og mennesker.</p>
            </div>
             <div className="manifesto">
               <h4>Resilient  </h4>
              <p>De tjenester og produkter, virksomheden tilbyder, skal fungere i steder og tider, hvor folk har mest brug for dem.</p>
            </div>
        </div>
    </div>
        </section>
        <section id="faktacirkler">
        <div className="faktacirkel-1">
            <h1>91%</h1>
            <p>af alt indhold på google, har ingen trafik, og ville derfor kunne spares væk</p>
        </div>
        <div className="faktacirkel-2">
            <h1>4th</h1>
            <p>Hvis internettet svarede til en land, vil det være det fjerde mest Co2 udledende land i verden. </p>
        </div>
        <div className="faktacirkel-1">
            <h1>3,7%</h1>
            <p>af de globale emissioner, kommer fra gadgets og internetforbrug.</p>
        </div>
        </section>
        <section id="fokus">
        <h1 className="pad-bund">Bæredygtighed i fokus </h1>
        <p>Vi bruger carbon calculators og Google Analytics til at vurdere vores hjemmesiders miljøpåvirkning og identificere muligheder for forbedring. Ved at analysere data fra disse værktøjer kan vi fjerne unødvendige URL'er og duplikeret indhold, hvilket resulterer i en mere strømlinet og energieffektiv hjemmeside.
<br/><br/>For at sikre, at vi konstant forbedrer os, sætter vi målrettede KPI'er (Key Performance Indicators) for CO2-udledning pr. sidevisning, carbon footprint og bæredygtighedsreduktion. Disse mål hjælper os med at overvåge og forbedre vores hjemmesiders bæredygtighed og sikre, at vi hele tiden arbejder mod en grønnere fremtid.</p>
        </section>
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
        <NavLink to="/priser"><button class="custom-button">Bestil</button></NavLink>
       </div>
       </div> 
 </section>

        <section id="kontakt">
        <div className="placeholder-2"><img className="footerlogo" src={logoblack} alt="logo"/></div>
            <div>
        <h1 className="pad-bund">Vores team er klar til at hjælpe - Tag kontakt i dag! </h1>
        <div class="form-container">
        <input type="text" name="navn" id="navn" placeholder="*Navn" required/>
        <input type="email" name="email" id="email" placeholder="*Email" required/>
        <input type="tel" name="tlf" id="tlf" placeholder="*Tlf" required/>
        <input type="text" name="firmanavn" id="firmanavn" placeholder="Firmanavn"/>
        <textarea name="beskrivelse" id="beskrivelse" placeholder="Beskrivelse"></textarea>
        <button type="submit">Send forespørgsel</button>
         </div></div>
         <div className="placeholder-1"><img className="footerlogo" src={logoblack} alt="logo"/></div>
        </section>
        <div className="up-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  <svg className="up-arrow" viewBox="0 0 24 24">
    <path d="M4 15l8-8 8 8z" />
  </svg>
</div>
       </main> 
    )
}