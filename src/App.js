import './App.css';
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import Banner from './Components/Banner';
import FooterBanner from './Components/FooterBanner';
import Footer from './Components/Footer';
import Home from './Components/Home'
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Phones from './Components/Phones';
import Cars from './Components/Cars';
import Motercycles from './Components/Motercycles';
import Houses from './Components/Houses';
import Tv from './Components/Tv';
import Tablets from './Components/Tablets';
import Plots from './Components/Plots';
import Buffer from './Components/Buffer';
import Foot from './Components/Foot'


function App() {
  return (
<Router>
        <Buffer />
        <Header />
        <SubHeader />
        <Banner />
        
      <div className="App">
        <Switch>
        <Route path="/plots">   
            <Plots />
        </Route>
        <Route path="/tablets">   
            <Tablets />
        </Route>
        <Route path="/tv">   
            <Tv />
        </Route>

        <Route path="/houses">   
            <Houses />
        </Route>
        <Route path="/motercycles">   
            <Motercycles />
        </Route>
        <Route path="/cars">   
            <Cars />
        </Route>
        <Route path="/phones">   
            <Phones />
        </Route>

        <Route path="/">
            
            <Home />
            <FooterBanner />
          
        </Route>
        
        </Switch>
      <Footer />
      <Foot />
      </div>
</ Router>
  );
}

export default App;
