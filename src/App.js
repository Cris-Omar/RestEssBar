import './App.css';
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './sites/Home';
import Contact from "./sites/Contact"
import FoodNetwork from "./sites/FoodNetwork"
import Donate from "./sites/Donate"
import Found from "./sites/Found"
import Locations from "./sites/Locations"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path="/standorte" element={<Locations/>}></Route>
          <Route exact path="/restessbar-gruenden" element={<Found/>}></Route>
          <Route exact path="/spenden" element={<Donate/>}></Route>
          <Route exact path="/foodwaste-netzwerk" element={<FoodNetwork/>}></Route>
          <Route exact path="/kontakt" element={<Contact/>}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
