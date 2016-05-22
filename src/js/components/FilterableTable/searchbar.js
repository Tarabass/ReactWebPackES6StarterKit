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

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	/**
	 * Invoked once, on both client & server before rendering occurs.
	 */
	componentWillMount() {
		console.log('Function called from SearchBar: %s', 'componentWillMount');
	}

	/**
	 * The render() method is required.
	 */
	render() {
		// TODO: make search input working
		return (
			<form>
				<input
					type="text"
					placeholder="Search..."
					value={this.props.filterText}
					ref="filterTextInput"
					onChange={this.handleChange}
				/>
				<p>
					<input
						type="checkbox"
						checked={this.props.inStockOnly}
						ref="inStockOnlyInput"
						onChange={this.handleChange}
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

	/**
	 * Invoked once, only on the client, after rendering occurs.
	 */
	componentDidMount() {
		console.log('Function called from SearchBar: %s', 'componentDidMount');
	}

	/**
	 * Invoked prior to unmounting component.
	 */
	componentWillUnmount() {
		console.log('Function called from SearchBar: %s', 'componentWillUnmount');
	}

	/**
	 * Return value determines whether component should update.
	 */
	shouldComponentUpdate() {
		console.log('Function called from SearchBar: %s', 'shouldComponentUpdate');
	}
}
SearchBar.propTypes = {};
SearchBar.defaultProps = {};

export default SearchBar;