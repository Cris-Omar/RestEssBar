import './App.css';
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './sites/Home';
import Contact from "./sites/Contact"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
