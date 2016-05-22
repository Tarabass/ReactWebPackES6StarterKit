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

class Row extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	/**
	 * Invoked once, on both client & server before rendering occurs.
	 */
	componentWillMount() {
		console.log('Function called from Row: %s', 'componentWillMount');
	}

	/**
	 * The render() method is required.
	 */
	render() {
		var name = this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span>;

		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);

	}

	/**
	 * Invoked once, only on the client, after rendering occurs.
	 */
	componentDidMount() {
		console.log('Function called from Row: %s', 'componentDidMount');
	}

	/**
	 * Invoked prior to unmounting component.
	 */
	componentWillUnmount() {
		console.log('Function called from Row: %s', 'componentWillUnmount');
	}

	/**
	 * Return value determines whether component should update.
	 */
	shouldComponentUpdate() {
		console.log('Function called from Row: %s', 'shouldComponentUpdate');
	}
}
Row.propTypes = {};
Row.defaultProps = {};

export default Row;