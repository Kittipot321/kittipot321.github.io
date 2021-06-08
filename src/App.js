import './App.css';
import Navbars from './components/Navbars';
import Main from './pages/Main';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Education from './pages/Education';
import Projects from './pages/Projects';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbars/>
            <Main/>
          </Route>
          <Route path="/education">
            <Navbars/>
            <Education/>
          </Route>
          <Route path="/projects">
            <Navbars/>
            <Projects/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
