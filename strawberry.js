import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Comment from './comment';
class Strawberry extends Component{
    render()
    {
        return (
            <div id='s'>
               <h1 >The Best Strawberry cake(Soft and Buttery Strawberry cake)</h1>
               <p> This is a comprehensive guide to making delicious Strawberry  cake as an 8 inch cake, 9 inch cake, sheet cake,
                or even cupcakes, with chocolate OR Strawberry  frosting!</p>
             
             
              <div id="s1">
              <h3>Ingredients</h3>
              <ol>
              <li> margarine or softened butter 175g (6oz).</li>
              <li> caster sugar 175g (6oz).</li>
              
              <li>self-raising flour, sifted 175g (6oz).</li>
              <li>1tsp baking powder.</li>
              <li>Double cream and strawberry jam (optional filling).</li>
              <li>pinch of salt.</li>
             
             </ol>
             <div id='s2'>
              
              <h3>Method</h3>
              <ol>
              <li>Preheat the oven to 180C/electric. Grease two 20 cm cake tins and line with parchment paper.</li>
              <li>In a large bowl whisk the butter and sugar together until combined. Then, add the eggs one at a time and mix. Then, add all the single cream and mix once again.</li>
              <li>With a wooden spoon fold in the flour a third at a time until the mixture is smooth.</li>
              <li>In a separate bowl place the mashed strawberries and vanilla extract and mix gently with a small metal spoon. Add the strawberry mixture to the smooth cake mixture and combine.</li>
              <li>Pour the mixture into the cake tins and bake on a middle shelf for 20 minutes.</li>
              <li>Take out of the oven and leave to cool in the tins for 30 minutes before removing. After cooled, spread as much jam as desired on one of the two sponges. Then whip some double cream and place on top of the jam. Take the other sponge and sandwich both sponges together. Serve!</li>
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

export default Strawberry;