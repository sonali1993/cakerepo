import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
class Blackberry extends Component{
    render()
    {
        return (
            <div id='bl'>
               <h1>The Best Blackberry cake(Soft and Buttery Blackberry cake)</h1>
               <p> This is a comprehensive guide to making delicious Blackberry cake as an 8 inch cake, 9 inch cake, sheet cake,
                or even cupcakes, with chocolate OR Blackberry frosting!</p>
             <div id='bl1'>
             <h3>Ingredients</h3>
             <ol>
 
              <li> margarine or softened butter 175g (6oz).</li>
              <li> caster sugar 175g (6oz).</li>
              <li>3 large eggs.</li>
              <li>self-raising flour, sifted 175g (6oz).</li>
              <li>1tsp baking powder.</li>
              <li>1tsp Blackberry extract.</li>
              <li>pinch of salt.</li>
              <li>frozen or fresh blackberry 350g</li>
             </ol>
             <div id='bl2'>
             <h3>Method</h3>
             <ol>
              <li>Heat oven to 180C/160C fan/gas 4. Tip the flour, oats and sugar into a large bowl. Rub the butter into the flour mixture using your fingertips until only small pea-size pieces remain. Stir through the coconut, then fill a teacup with the mixture and set this aside.</li>
              <li>Stir the eggs into the bowl of mixture, then spread over the bottom of a lined baking tin (31 x 17cm), or a 21cm square tin. Smooth the surface with the back of a spoon, then scatter over the blackberries. Scatter over the reserved teacup mixture and bake for 1 hr-1 hr 15 mins until golden and cooked through (if you poke a skewer in, it should come out with moist crumbs but no wet mixture). Leave to cool, then remove from the tin and cut into squares. Serve with some extra berries, if you like. Great for teatime or to pop into a lunchbox.</li>
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

export default Blackberry;