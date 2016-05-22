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
import 'sass/components/filterabletable/filterabletable';

import React, {Component} from 'react';

import SearchBar from './searchbar';
import Table from './table';

export default class FilterableTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		};

		this._handleUserInput = this._handleUserInput.bind(this);
	}

	render() {
		return (
			<div className="filterabletable">
				<SearchBar
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					onUserInput={this._handleUserInput}
				/>
				<Table
					products={this.props.products}
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
				/>
			</div>
		);
	}

	_handleUserInput(filterText, inStockOnly) {
		this.setState({
			filterText: filterText,
			inStockOnly: inStockOnly
		});
	}

	shouldComponentUpdate() {
		console.log('Function called from FilterableTable: %s', 'shouldComponentUpdate');
		return true;
	}
}