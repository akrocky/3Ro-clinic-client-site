
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Home from './pages/Home/Home';
import Header from './pages/Shared/Header/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Doctors from './pages/Doctors/Doctors/Doctors';

import AboutUs from './pages/AboutUs/AboutUs';
import Appointment from './pages/Appointment/Appointment';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/Services/Services/Services';
import ServiceDetails from './pages/Services/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div >
   
    <Router>
      <Header></Header>
      <Switch>
        <Router exact path="/">
<Home></Home>
        </Router>
        <Route path="/home">
<Home></Home>
        </Route>
        <Route path="/doctors">
<Doctors></Doctors>
        </Route>
        
       
        <Route exact path="/services">
<Services></Services>
        </Route>
        <Route path="/services/:serviceinfo">
<ServiceDetails></ServiceDetails>
        </Route>
        <Route path="/aboutus">
<AboutUs></AboutUs>
        </Route>
        <Route path="/appointment">
<Appointment></Appointment>
        </Route>
        <Route path="*">
<NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
