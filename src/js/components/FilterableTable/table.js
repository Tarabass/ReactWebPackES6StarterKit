/**
 * Created by Peter Rietveld (p.rietveld@live.com) on 22-5-2016.
 *
 * Any use of the code written here-in belongs to the developer and is
 * hereby the owner. If used, one must have strict approval by the
 * developer of the code written here-in. The developer may at anytime
 * change, modify, add, or delete any content contained within.
 *
 * Copyright (c) 2016 Strictly Internet
 */
import React, {Component, PropTypes} from 'react';

import CategoryRow from './categoryrow';
import Row from './row';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	/**
	 * Invoked once, on both client & server before rendering occurs.
	 */
	componentWillMount() {
		console.log('Function called from Table: %s', 'componentWillMount');
	}

	/**
	 * The render() method is required.
	 */
	render() {
		var rows = [];
		var lastCategory = null;
		this.props.products.forEach(function(product) {
			if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
				return;
			}
			if (product.category !== lastCategory) {
				rows.push(<CategoryRow category={product.category} key={product.category} />);
			}
			rows.push(<Row product={product} key={product.name} />);
			lastCategory = product.category;
		}.bind(this));

		return (
			<table>
				<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}

	/**
	 * Invoked once, only on the client, after rendering occurs.
	 */
	componentDidMount() {
		console.log('Function called from Table: %s', 'componentDidMount');
	}

	/**
	 * Invoked prior to unmounting component.
	 */
	componentWillUnmount() {
		console.log('Function called from Table: %s', 'componentWillUnmount');
	}

	/**
	 * Return value determines whether component should update.
	 */
	shouldComponentUpdate() {
		console.log('Function called from Table: %s', 'shouldComponentUpdate');
	}
}
Table.propTypes = {};
Table.defaultProps = {};

export default Table;