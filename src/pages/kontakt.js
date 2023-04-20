import logoblack from "../images/logo.svg"


export default function kontakt(){
    return(
       <main id="forside">
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