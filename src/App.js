import './App.css';
import Home from './pages/Home'
import SingleApartments from './pages/SingleApartment'
import Error from './pages/Error'
import Contact from './pages/Contact'
import Apartments from './pages/Apartments'
import About from './pages/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <>
      <Navbar></Navbar>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/apartments' component={Apartments}></Route>
      <Route exact path='/apartments/:slug' component={SingleApartments}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>

      <Route  component={Error}></Route>
      </Switch>
      <Footer></Footer>
      </>
    </div>
  );
}

export default App;
