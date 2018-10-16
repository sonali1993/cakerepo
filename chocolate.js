import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Comment from './comment';
class Chocolate extends Component{
    render()
    {
        return (
            <div id='cho'>
               <h1>The Best Chocolate cake(Soft and Buttery Chocolate cake)</h1>
               <p> This is a comprehensive guide to making delicious Chocolate cake as an 8 inch cake, 9 inch cake, sheet cake,
                or even cupcakes, with chocolate OR Chocolate frosting!</p>
             <div id='cho1'>
             <h3>Ingredients</h3>
             <ol>
 
              <li> margarine or softened butter 175g (6oz).</li>
              <li> caster sugar 175g (6oz).</li>
              <li>3 large eggs.</li>
              <li>self-raising flour, sifted 175g (6oz).</li>
              <li>1tsp baking powder.</li>
              <li>1tsp Chocolate extract.</li>
              <li>pinch of salt.</li>
               <li>icing sugar</li>
               <li>2-3 perfectly ripe pears</li>
             </ol>
            
             <div id='cho2'>
             <h3>Method</h3>
              <ol>           
             <li>Heat oven to 180C/160C fan/gas 4. Put the hazelnuts in a food processor and whizz until finely ground. Add the flour, eggs, extra yolks, sugar, milk, cream and vanilla and whizz until you have a smooth batter.</li>
             <li>Halve, core and slice the pears (you can peel them first if you like, but I usually don’t). Arrange the pear slices in a 26 x 33cm ceramic, cast iron or copper gratin dish, then pour in the batter. Bake for 30-35 mins, or until the batter is set in the centre, golden and slightly souffléd.</li>
             <li>For the topping, toast the hazelnuts in a dry frying pan (keep a close eye on them – they can go from toasted to burnt very quickly), then roughly chop them so you’re left with a mixture of halved and more finely chopped nuts. Scatter over the clafoutis, then sieve a little icing sugar over the top. Leave to sit for 10-15 mins (the clafoutis will deflate a little). Serve warm with crème fraîche or pouring cream.</li>
             </ol>
 
             </div>
             </div>
             <Router>
             <Switch>
			 <Route component={Comment} />
		     </Switch>
             </Router>
            </div>
        );
    }
}

export default Chocolate;