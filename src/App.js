import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hjem from './pages/hjem';
import Cases from './pages/cases';
import Priser from './pages/priser';
import Kontakt from './pages/kontakt';
import Nav from './components/nav';

import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Hjem/>}/>
          <Route path="/cases" element={<Cases/>}/>
          <Route path="/priser" element={<Priser/>}/>
          <Route path="/kontakt" element={<Kontakt/>}/>
        </Routes>
       
        <Footer/>
         </BrowserRouter>

</div>
  );
}

export default App;
