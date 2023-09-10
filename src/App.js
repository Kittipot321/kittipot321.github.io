import './App.css';
import Navbar from '../src/components/Navbar'
import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import Socials from '../src/components/Socials'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'
function App() {
  return (
    <main className="text-gray-400 body-font" id="about">
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Socials/>
      {/* <Contact/> */}
      <Footer/>
    </main>
  );
}

export default App;
