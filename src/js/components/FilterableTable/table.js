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
import 'sass/components/filterabletable/table';

import React, {Component} from 'react';

import CategoryRow from './categoryrow';
import Row from './row';

export default class Table extends Component {
	render() {
		var rows = this._getFilteredRows();

		return (
			<div className="table-wrapper">
				<table>
					<thead>
					<tr className="header">
						<th>Name</th>
						<th>Price</th>
					</tr>
					</thead>
					<tbody>{rows}</tbody>
				</table>
			</div>
		);
	}

	_getFilteredRows() {
		var rows = [];
		var lastCategory = null;

		this.props.products.map((product) => {
			if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
		 		return;
		 	}

		 	if (product.category !== lastCategory) {
		 		rows.push(<CategoryRow colspan="2" category={product.category} key={product.category} />);
		 	}

		 	rows.push(<Row product={product} key={product.name} />);
		 	lastCategory = product.category;
		 });

		return rows;
	}
}