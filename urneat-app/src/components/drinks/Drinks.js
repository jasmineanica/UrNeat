import React, { Component } from 'react';
import DrinkItem from './DrinkItem';

export class Drinks extends Component {
	// state = {
	// 	drinks: [
	// 		{
	// 			id: '1',
	// 			brandname: 'The Balvenie Doublewood',
	// 			productImage: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hf8/h65/12291773431838.png'
	// 		},
	// 		{
	// 			id: '2',
	// 			brandname: 'The Green Spot',
	// 			productImage: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/he8/h26/12244707213342.png'
	// 		},
	// 		{
	// 			id: '3',
	// 			brandname: 'Basil Hayden\'s Kentucky Straight Bourbon',
	// 			productImage: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hf4/hb9/12140740247582.png'
	// 		}
	// 	]
	// }
	render() {
		//loops through the states above called drinks
		return (
			<div style={userStyle}>
				{this.props.drinks.map(drink => (
						<DrinkItem key={drink.DSDLinkMasterProductID} drink={drink}/>
					))},
					{this.props.localdrinks.map(localdrink => (
							<DrinkItem key={localdrink.id} drink={localdrink}/>
						))}
			</div>

		);
	}
}

// css for grid styles
const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3,1fr)',
	gridGap: '1rem'
}

export default Drinks;
