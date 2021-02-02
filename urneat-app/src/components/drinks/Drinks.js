import React, { Component } from 'react';
import DrinkItem from './DrinkItem';

export class Drinks extends Component {
	state = {
		drinks: [
			{
				id: '1',
				brandname: 'The Balvenie Doublewood',
				productImage: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hf8/h65/12291773431838.png'
			}, 
			{
				id: '2',
				brandname: 'The Green Spot',
				productImage: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/he8/h26/12244707213342.png'
			}, 
			{
				id: '3',
				brandname: 'Basil Hayden\'s Kentucky Straight Bourbon',
				productImage: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hf4/hb9/12140740247582.png'
			}
		]
	}
	render() {
		
		return (
			<div className='card text-center'>
				{this.state.drinks.map(drink => (
						<DrinkItem key={drink.id} drink={drink}/>
					))}
			</div>
		);
	}
}

export default Drinks;