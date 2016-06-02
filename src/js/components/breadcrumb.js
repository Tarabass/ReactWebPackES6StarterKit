/**
 * Created by Peter Rietveld (p.rietveld@live.com) on 2-6-2016.
 *
 * Any use of the code written here-in belongs to the developer and is
 * hereby the owner. If used, one must have strict approval by the
 * developer of the code written here-in. The developer may at anytime
 * change, modify, add, or delete any content contained within.
 *
 * Copyright (c) 2016 Strictly Internet
 */
import 'sass/components/breadcrumb';

import React, {Component, PropTypes} from 'react';

class BreadCrumb extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="breadcrumb">
				<button onClick={this._handleHistoryButtonClick.bind(this, 'back')}><i className="fa fa-arrow-left"></i></button>
				<button onClick={this._handleHistoryButtonClick.bind(this, 'forward')}><i className="fa fa-arrow-right"></i></button>
			</div>
		);
	}

	_handleHistoryButtonClick(action, event) {
		console.log(arguments);
		switch(action){
			case 'back':
				console.log('_handleHistoryButtonClick', 'back');
				break;
			case 'forward':
				console.log('_handleHistoryButtonClick', 'forward');
				break;
			default:
				break;
		}
	}
}
BreadCrumb.propTypes = {};
BreadCrumb.defaultProps = {};

export default BreadCrumb;