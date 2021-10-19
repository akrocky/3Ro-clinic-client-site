
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
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div >
    <AuthProvider>
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
        
       
        <PrivateRoute exact path="/services">
<Services></Services>
        </PrivateRoute>
        <Route path="/services/:id">
<ServiceDetails></ServiceDetails>
        </Route>
        <Route path="/aboutus">
<AboutUs></AboutUs>
        </Route>
        <PrivateRoute path="/appointment">
<Appointment></Appointment>
        </PrivateRoute>
        <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
           <Register></Register>
          </Route>
        <Route path="*">
<NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
    </div>
    
  );
}

export default App;
