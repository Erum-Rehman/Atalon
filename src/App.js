import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';
import { Route, Routes } from "react-router-dom";
import About from './pages/About';
import Business from './pages/Business';
import Company from './pages/Company';
import Contact from './pages/Contact';
import News from './pages/News';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Business" element={<Business />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
