import React, { Component } from 'react';

export class DrinkItem extends Component {
	render() {
		const {brandname, productImage} = this.props.drink;
		return (
			<div className='card text-center'>
			<img src={productImage} alt=""  style={{width: '200px'}} />
			<h3>{brandname}</h3>

			<div>
				<a href="#" className='btn btn-dark btn-sm my-1'>
					Review
				</a>
			</div>
			</div>
		);
	}
}

export default DrinkItem;