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
			{category: 'Electronics', price: '$399.99', stocked: true, name: 'Nexus 7'}
		];

		debugger;

		// http://codereview.stackexchange.com/questions/83717/filter-out-duplicates-from-an-array-and-return-only-unique-value
		/*var unique = function(xs) {
			return xs.filter(function(x, i) {
				return xs.indexOf(x) === i
			})
		};

		var unique = function(xs) {
			var seen = {}
			return xs.filter(function(x) {
				if (seen[x])
					return
				seen[x] = true
				return x
			})
		}*/

		var unique = function(arrayOfObjects, fieldOfObject) {
			var seen = {};
			var arrayOfUniqueFields = [];

			arrayOfObjects.filter(function(o) {
				if (seen[o[fieldOfObject]])
					return;

				seen[o[fieldOfObject]] = true;
				arrayOfUniqueFields.push(o[fieldOfObject]);
			});

			return arrayOfUniqueFields;
		}

		// TODO: add prop categories to FilterableTable and fill it with result of unique() to build dropdown in searchbar
		console.log(unique(PRODUCTS, 'category'));

		return (
			<div>
				<a href="https://facebook.github.io/react/docs/thinking-in-react.html">Thinking in react</a><br/>
				<FilterableTable products={PRODUCTS} />
			</div>
		);
	}
}