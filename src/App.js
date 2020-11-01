import './App.css';
import About from './Components/About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Myproject from './Components/Myproject/Myproject';
import Contact from './Components/Contact/Contact';
import Blogs from './Components/Blogs/Blogs';
import ParticleComponents from './Components/ParticleComponent/ParticleComponents';
function App() {
  return (
    <div className="App">
   <Router>
   {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
     <ParticleComponents/>
   
        </div> */}
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
       <Route path='/myproject'>
        <Myproject/>
       </Route>
       <Route path='/contact'>
         <Contact/>
       </Route>
       <Route path='/blog'>
         <Blogs/>
       </Route>
     </Switch>
   </Router>
    </div>
  );
}

export default App;
