import './App.css';
import Section1 from './components/section/Section1';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";



function App() {
  return (
    <div>

    <Router basename={process.env.PUBLIC_URL}>
    
      <Switch>

      <Route path='/Section3'>
      <Section3/>
      </Route>    
      <Route exact path='/'>
      <Section1/>
      <Section2/>
      </Route>

      </Switch>
    </Router>

    </div>
  );
}

export default App;
