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
      <Navbars/>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/education" component={Education}/>
          <Route path="/projects" component={Projects}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
