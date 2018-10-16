import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';


class Vannila extends Component{
    render()
    {
        return (
            <div id='v'>
               <h1>The Best Vannila cake(Soft and Buttery Vannila cake)</h1>
              <p> This is a comprehensive guide to making delicious vanilla cake as an 8 inch cake, 9 inch cake, sheet cake,
                or even cupcakes, with chocolate OR vanilla frosting!</p>
             
             
             <div id='v1'>
             <h3>Ingredients</h3>
             <ol>
 
              <li> margarine or softened butter 175g (6oz).</li>
              <li> caster sugar 175g (6oz).</li>
              <li>3 large eggs.</li>
              <li>self-raising flour, sifted 175g (6oz).</li>
              <li>1tsp baking powder.</li>
              <li>1tsp vanilla extract.</li>
              <li>pinch of salt.</li>
             
             </ol>
             
              <div id='v2'>
              <h3>Method</h3>
              <ol>

               <li>Preheat the oven to 195C/fan 175C/gas 3.5</li>
              <li> Cream the butter and sugar together until it becomes a pale yellow/white colour.</li>
               <li>Sift in the flour and baking powder. Then add the eggs and vanilla essence. Fold together until it is all combined.</li>
               <li>Place the mixture in to greased tins or cupcake cases.</li>
               <li>Bake in the oven for 15-20 minutes until golden brown and springs back when gently pressed. Once baked leave to cool for 30 minutes.</li>
             </ol>
             </div>
             </div>
             <Router>
           
			 <Route component={Comment} />
		    
             </Router>
            </div>
        );
    }
}

export default Vannila;