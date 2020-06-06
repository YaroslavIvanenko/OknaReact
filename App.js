import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'; 
import Header from './header/header.js';
import Headerwrap from './headerwrap/headerwrap.js';
import Container from './container/container.js';
import ContainerA from './containerA/containerA.js';
import ContainerB from './containerB/containerB.js';
import ContainerC from './containerC/containerC.js';

import Footer from './footer/footer.js';
import Home from './home.js'; 
import About from './About.js';

class App extends React.Component {
	

	render () { 
		
	   return (
       <div className="site">
	<Router>
 <Header/>
 <Headerwrap />
 <Switch>
 <Route exact path="/Home" component={Home}></Route>
 <Route exact path="/About" component={About}></Route>
  </Switch>
 <Container />
 <ContainerA />
 <ContainerB />
 <ContainerC />
 <Footer />
	</Router>	   
	</div>	
	  );
	}
   }

export default App;



