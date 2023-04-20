import { NavLink } from "react-router-dom"
import pccase1 from "../images/innocent laptop.webp"
import mcase1 from "../images/innocent mobil.webp"
import pccase2 from "../images/aliter laptop.webp"
import mcase2 from "../images/aliter mobil.webp"
import pccase3 from "../images/good energy laptop.webp"
import mcase3 from "../images/good energy mobil.webp"
import pccase4 from "../images/c40 cities laptop.webp"
import mcase4 from "../images/c40 cities mobil.webp"
import minfografik from "../images/Infografik mobil.svg"
import pcinfografik from "../images/Infografik laptop-2.svg"
import klippekorticon from "../images/klippekort.svg"
import logoblack from "../images/logo.svg"

export default function cases(){
    return(
        <main>
        <section id="content-box">
        <h1 className="pad-bund">Forrige projekter</h1>
        <div className="case-text-hjem">
            <p>Vi har hjulpet en bred vifte af virksomheder med at optimere deres hjemmesider.<br/>
Kig på vores forrige cases, for at få en indblik i hvad vi kan gøre for jer.</p>
        </div>
    
    <div className="case-box">
        <div className="casedisplay pad-bund">
            <img id="laptopcase" src={pccase1} alt="innocent laptop"/>
            <img id="mobilcase" src={mcase1} alt="innocent mobil"/>
        </div>
         <div className="case-text">
            <h3>Innocent</h3>
            <p>Innocent juice er en populær juice-producent, der er kendt for deres bæredygtige tilgang til produktion og emballage. Vi er stolte af at have haft muligheden for at designe og udvikle deres hjemmeside med fokus på bæredygtighed.<br/><br/>Hjemmesiden er blevet udviklet med en minimalistisk tilgang for at reducere dens miljøpåvirkning. Vi har desuden integreret en række bæredygtige funktioner, såsom et CO2-regnskab, der viser, hvor meget CO2 der spares ved at købe Innocent juice.</p>
        </div></div>
        <div className="case-box">
        <div className="casedisplay pad-bund">
            <img id="laptopcase" src={pccase2} alt="aliter network laptop"/>
            <img id="mobilcase" src={mcase2} alt="aliter network mobil"/>
        </div>
        <div className="case-text">
            <h3>Aliter networks</h3>
            <p>Vi er glade for at have haft muligheden for at designe og udvikle Aliter Networks hjemmeside med fokus på bæredygtighed. Aliter Networks er en IT-virksomhed, der er dedikeret til at reducere deres miljøpåvirkning og fremme bæredygtige løsninger. <br/><br/>Vi har udviklet en minimalistisk hjemmeside, der er optimeret til hurtig loadtid og lavt ressourceforbrug. Dette er med til at reducere CO2-udledning og sikre en mere bæredygtig brugeroplevelse.</p>
        </div></div>
        <div className="case-box">
        <div className="casedisplay pad-bund">
            <img id="laptopcase" src={pccase3} alt="Good energy laptop"/>
            <img id="mobilcase" src={mcase3} alt="Good energy mobil"/>
        </div> 
         <div className="case-text">
            <h3>Good energy</h3>
            <p>Vi er stolte af at have haft muligheden for at designe og udvikle Good Energy’s hjemmeside med fokus på bæredygtighed. Good Energy er en britisk energivirksomhed, der er dedikeret til at fremme bæredygtig energi og reducere CO2-udledning. <br/><br/>Vi har udviklet en hjemmeside, der er optimeret til hurtig loadtid og lavt ressourceforbrug. Dette er med til at reducere CO2-udledning og sikre en mere bæredygtig brugeroplevelse. </p>
        </div></div>
        <div className="case-box">
        <div className="casedisplay pad-bund">
            <img id="laptopcase" src={pccase4} alt="c40 laptop"/>
            <img id="mobilcase" src={mcase4} alt="c40 mobil"/>
        </div> <div className="case-text">
            <h3>C40 cities</h3>
            <p>Vi er glade for at have haft muligheden for at designe og udvikle C40 Cities’ hjemmeside med fokus på bæredygtighed. C40 Cities er en global organisation, der arbejder for at bekæmpe klimaforandringer og fremme bæredygtige byer.<br/><br/>Vi har udviklet en minimalistisk hjemmeside, der er optimeret til hurtig loadtid og lavt ressourceforbrug. Dette er med til at reducere CO2-udledning og sikre en mere bæredygtig brugeroplevelse.</p>
        </div></div>
        <section id="process">
        <h1 className="pad-bund">Samarbejdsprocessen </h1>
        <p className="pad-bund" >Vi ønsker at gøre samarbejdsprocessen så nem og behagelig som muligt for vores kunder. Nedenfor præsenterer vi de enkelte trin i processen på en overskuelig og letforståelig måde.</p>
        <img id="m-infografik" className="pad-bund" src={minfografik} alt="aliter network laptop"/>
        <img id="pc-infografik" className="pad-bund" src={pcinfografik} alt="aliter network laptop"/>
      
       <div className="klippekort-cases">
        <div className="klippekort-tekst">
        <h3 className="pad-bund">Klippekort løsning</h3>
        <p>Når jeres løsning er fuldt udviklet og lanceret, kan I vælge at tilkøbe en klippekortløsning. Klippekortet giver jer mulighed for at modtage hjælp til service og vedligeholdelse af jeres nye hjemmeside efter behov.</p>
    </div>
       <div className="step8-box">
       <img className="pad-bund" src={klippekorticon} alt="aliter network laptop"/>
        <h4>Klippekort løsning</h4>
        <p>Fortsat samarbejde og udvikling på hjemmesiden</p>
        <div className="step8">
        <h1>8</h1>
        </div>
        <NavLink to="/priser"><button class="custom-button">Bestil nu</button></NavLink>
       </div></div>
        </section>
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