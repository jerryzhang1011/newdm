import './App.css';
import Home from './home';
import Explore from './explore';
import About from './about';
import Contact from './contact';
import Navbar from './navbar';
import Footer from './footer';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';


 
function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/explore' element={<Explore />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer/>
      </Router>

  );
}

export default App;
