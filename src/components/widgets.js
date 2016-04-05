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

class Widgets extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<div className="my-app">
				<h1>This is the widgets page</h1>
				<ul className="widget-list">
					<li>Widget 1</li>
					<li>Widget 2</li>
					<li>Widget 3</li>
				</ul>
			</div>
		);
	}
}
Widgets.propTypes = {

};
Widgets.defaultProps = {

};

export default Widgets;