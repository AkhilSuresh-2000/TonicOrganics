// import Navbar from './Navbar';
import Signin from './Signin';
import Signup from './Signup';
import Product from './Product';
import About from './About';
import Home from './Home';
import Footer from './Footer';
import Navigation from './Navigation';

import './App.css';
import {Switch, Route} from "react-router-dom"
function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/products" component={Product}/>
        <Route exact path="/about" component={About}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
