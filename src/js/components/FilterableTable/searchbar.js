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
import 'sass/components/filterabletable/searchbar';

import React, {Component} from 'react';

export default class SearchBar extends Component {
	render() {
		return (
			<form className="searchbar">
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
		/**
		 * https://facebook.github.io/react/docs/more-about-refs.html
		 *
		 * If you want to preserve Google Closure Compiler advanced-mode crushing resilience, make sure to never access
		 * as a property what was specified as a string. This means you must access using this.refs['myRefString'] if
		 * your ref was defined as ref="myRefString".
		 */
		this.props.onUserInput(
			this.refs['filterTextInput'].value,
			this.refs['inStockOnlyInput'].checked
		);
	}
}