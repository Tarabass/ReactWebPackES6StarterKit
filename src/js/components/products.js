/**
 * Created by Peter Rietveld (p.rietveld@live.com) on 28-3-2016.
 *
 * Any use of the code written here-in belongs to the developer and is
 * hereby the owner. If used, one must have strict approval by the
 * developer of the code written here-in. The developer may at anytime
 * change, modify, add, or delete any content contained within.
 *
 * Copyright (c) 2016 Strictly Internet
 */
import React, {Component} from 'react';

import FilterableTable from './FilterableTable/filterabletable';

export default class Products extends Component {
	render() {
		var PRODUCTS = [
			{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
			{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
			{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
			{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
			{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
			{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
		];

		return (
			<div>
				<a href="https://facebook.github.io/react/docs/thinking-in-react.html">Thinking in react</a><br/>
				<FilterableTable products={PRODUCTS} />
			</div>
		);
	}
}