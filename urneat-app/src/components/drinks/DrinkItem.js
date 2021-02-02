import React, { Component } from 'react';

export class DrinkItem extends Component {
	constructor () {
		super();
		this.state = {
			id: '702051',
			brandname: 'New Belgium Fat Tire Amber Ale',
			productImage: 'https://images.encompass8.com/GlobalDocs/338543-THUMB.PNG'
		}
	}
	render() {
		return (
			<div className='card text-center'>
			<img src={this.state.productImage} alt=""  style={{width: '100px'}} />
			<h3>{this.state.brandname}</h3>

			<div>
				<a href="" className='btn btn-dark btn-sm my-1'>
					Review
				</a>
			</div>
			</div>
		);
	}
}

export default DrinkItem;