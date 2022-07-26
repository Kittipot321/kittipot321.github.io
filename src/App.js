import './App.css';
import Navbar from '../src/components/Navbar'
import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import Testimonials from '../src/components/Testimonials'
import Contact from '../src/components/Contact'
function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}

export default App;
