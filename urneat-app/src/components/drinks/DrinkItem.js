import React from 'react';
import PropTypes from 'prop-types';

// Drink Item is a functional component
// which means no more render() or 'this' keyword
const DrinkItem = props => {
	const {BrandName, ProductImage, BrandLogoURL} = props.drink;
	if (ProductImage == null) {
		return (
			<div className='card text-center'>
			<img src={BrandLogoURL} alt=""  style={{width: '200px'}} />
			<h3>{BrandName}</h3>

			<div>
				<a href="#" className='btn btn-dark btn-sm my-1'>
					Review
				</a>
			</div>

			</div>
		);
	} else {
		return (
			<div className='card text-center'>
			<img src={ProductImage} alt=""  style={{width: '200px'}} />
			<h3>{BrandName}</h3>

			<div>
				<a href="#" className='btn btn-dark btn-sm my-1'>
					Review
				</a>
			</div>

			</div>
		);
	}

}

DrinkItem.propTypes = {
	drink: PropTypes.object.isRequired,
}

export default DrinkItem;
