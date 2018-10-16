import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Comment from './comment';
class Pineapple extends Component{
    render()
    {
        return (
            <div id='pine'>
               <h1>The Best Pineapple cake(Soft and Buttery Pineapple cake)</h1>
               <p> This is a comprehensive guide to making delicious Pineapple cake as an 8 inch cake, 9 inch cake, sheet cake,
                or even cupcakes, with chocolate OR Pineapple frosting!</p>
             <div id='pine1'>
             <h3>Ingredients</h3>
             <ol>
 
              <li> margarine or softened butter 175g (6oz).</li>
              <li> caster sugar 175g (6oz).</li>
              
              <li>self-raising flour, sifted 175g (6oz).</li>
              <li>1tsp baking powder.</li>
              <li>1tsp Pineapple extract.</li>
              <li>pinch of salt.</li>
             
             </ol>
             <div id="pine3">
             <h3>Method</h3>
             <ol>
             <li>Heat oven to 180C/160C fan/gas 4.</li>
             <li>For the topping, beat 50g softened butter and 50g light soft brown sugar together until creamy. Spread over the base and a quarter of the way up the sides of a 20cm round cake tin. Arrange 7 pineapple rings on top (reserving the syrup for later), then place 7 glacé cherries in the centres of the rings.</li>
             <li>Place 100g softened butter, 100g golden caster sugar, 100g self-raising flour, 1 tsp baking powder, 1 tsp vanilla extract and 2 eggs in a bowl along with 2 tbsp of the reserved pineapple syrup. Using an electric whisk, beat to a soft consistency.</li>
             <li>Spoon into the tin on top of the pineapple and smooth it out so it’s level. Bake for 35 mins. Leave to stand for 5 mins, then turn out onto a plate. Serve warm with a scoop of ice cream</li>
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

export default Pineapple;