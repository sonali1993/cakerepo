import React,{ Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Vannila from './vannila';
import Pineapple from './pineapple';
import Chocolate from './chocolate';
import Strawberry from './strawberry';
import Blackberry from './blackberry';
import './vannila.css';
import './pineapple.css';
import './chocolate.css';
import './strawberry.css';
import './blackberry.css';



class App extends Component {
	render() {
		
         
			
		return(
			

<Router>
     <div className="App">
	 <div  id="a" >MY CAKE APP</div>
	 <div id="b">
	    <ul>
		 <li>
		     <Link to="/cake1">
	         Vannila-cake</Link> 
		</li>
		<li>
		     <Link to="/cake2">
		     pineapple-cake</Link>
	         
		</li>
		<li>
		     <Link to="/cake3">
		     Chocolate-cake</Link>
			  
		</li>
		<li>
		     <Link to="/cake4">
	        	strawberry-cake</Link>
	         		</li>
		<li>
		     <Link to="/cake5">
	          blackberry-cake</Link>
	         
		</li>
		</ul>
		</div>
		<div id="c"><hr/></div>
		

		<Switch>
			<Route exact path='/cake1' component={Vannila} />
		    
		</Switch>
		
		<Switch>
			<Route exact path='/cake2' component={Pineapple} />
		</Switch>
		
		<Switch>
			<Route exact path='/cake3' component={Chocolate } />
		</Switch>
		
		<Switch>
			<Route exact path='/cake4' component={Strawberry} />
		</Switch>
		
		<Switch>
			<Route exact path='/cake5' component={Blackberry} />
		</Switch>
		
	 </div>
	 </Router>
     
	);
	}
}

 export default App;