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
import React, {Component} from 'react';

export default class SearchBar extends Component {
	render() {
		return (
			<form>
				<input
					type="text"
					placeholder="Search..."
					value={this.props.filterText}
					ref="filterTextInput"
					onChange={this._handleChange.bind(this)}
				/>
				<p>
					<input
						type="checkbox"
						checked={this.props.inStockOnly}
						ref="inStockOnlyInput"
						onChange={this._handleChange.bind(this)}
					/>
					{' '}
					Only show products in stock
				</p>
			</form>
		);
	}

	_handleChange() {
		this.props.onUserInput(
			this.refs.filterTextInput.value,
			this.refs.inStockOnlyInput.checked
		);
	}
}