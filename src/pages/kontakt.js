import loi from "../images/loi.webp"
import sofie from "../images/sofie.webp"
import marius from "../images/marius.webp"
import andreas from "../images/andreas.webp"

export default function kontakt(){
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
    return(
       <main id="forside">
            <section id="kontakt">
        <div className="placeholder-2">
        <div className="cvfoto-par">      
            <div className="cvfoto">
              <img className="cvfoto-enkel" src={loi} alt="Loi"/>
            </div>
            <div className="cvfoto">
              <img className="cvfoto-enkel" src={sofie} alt="Sofie"/>
            </div>
          </div>   
          <div id="cvfoto-par-2" className="cvfoto-par">
          <div className="cvfoto">
          <img className="cvfoto-enkel" src={marius} alt="Marius"/>
          </div>
          <div className="cvfoto">
          <img className="cvfoto-enkel" src={andreas} alt="Andreas"/>
          </div>
          </div>
        
        </div> 
         <div>
        <h1 className="pad-bund">Vores team er klar til at hjælpe! </h1>
        <div class="form-container">
        <input type="text" name="navn" id="navn" placeholder="*Navn" required/>
        <input type="email" name="email" id="email" placeholder="*Email" required/>
        <input type="tel" name="tlf" id="tlf" placeholder="*Tlf" required/>
        <input type="text" name="firmanavn" id="firmanavn" placeholder="Firmanavn"/>
        <textarea name="beskrivelse" id="beskrivelse" placeholder="Hvad har du brug for?"></textarea>
        <button type="submit">Send forespørgsel</button>
         </div></div>
         <div className="placeholder-1">
         <div className="cvfoto-par">      
            <div className="cvfoto">
              <img className="cvfoto-enkel" src={loi} alt="Loi"/>
            </div>
            <div className="cvfoto">
              <img className="cvfoto-enkel" src={sofie} alt="Sofie"/>
            </div>
          </div>   
          <div id="cvfoto-par-2" className="cvfoto-par">
          <div className="cvfoto">
          <img className="cvfoto-enkel" src={marius} alt="Marius"/>
          </div>
          <div className="cvfoto">
          <img className="cvfoto-enkel" src={andreas} alt="Andreas"/>
          </div>
          </div>
        
         </div>
        </section>
        <div className="up-btn" onClick={handleClick}>
  <svg className="up-arrow" viewBox="0 0 24 24">
    <path d="M4 15l8-8 8 8z" />
  </svg>
</div>
       </main> 
    )
}