import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Navigation from './Components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
   <Router>
     <Switch>
       <Route exact path='/'>
         <Home/>
       </Route>
       <Route path='/home'>
         <Home/>
       </Route>
       <Route path='/about'>
        <About/>
       </Route>
     </Switch>
   </Router>
    </div>
  );
}

export default App;
