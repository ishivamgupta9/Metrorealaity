
import './App.css';
import Home from './Home';
import Aboutus from './Aboutus';
import Contact from './Contact';
import TopToolbar from './TopToolbar';
import Footer from './footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 



function App() {
  return ( 
    <Router>
      <div className="App">
        <TopToolbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       <Footer />
      </div>
    </Router>
  );
}

export default App;