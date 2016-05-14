/**
 * Created by Peter Rietveld (p.rietveld@live.com) on 1-5-2016.
 *
 * Any use of the code written here-in belongs to the developer and is
 * hereby the owner. If used, one must have strict approval by the
 * developer of the code written here-in. The developer may at anytime
 * change, modify, add, or delete any content contained within.
 *
 * Copyright (c) 2016 Strictly Internet
 */
import React, {Component, PropTypes} from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: props.initialCount
		};

		this.tick = this.tick.bind(this);
	}
	tick() {
		this.setState({
			count: this.state.count + 1
		});
	}
	render() {
		return (
			<div onClick={this.tick}>
				Clicks: {this.state.count}
			</div>
		);
	}

	/**
	 * Invoked before rendering when new props or state are being received. This method is not called for the initial render or when forceUpdate is used.
	 * @param nextProps
	 * @param nextState
	 * @returns {boolean}
	 */
	shouldComponentUpdate(nextProps, nextState) {
		/*console.log('props', this.props);
		console.log('nextProps', nextProps);
		console.log('state', this.state);
		console.log('nextState', nextState);*/
		var me = this,
			currentCount = me.state.count,
			nextCount = nextState.count;

		return (currentCount < nextCount) && ((nextCount - currentCount) === 1);
	}
}

Counter.propTypes = {
	initialCount: React.PropTypes.number
};

Counter.defaultProps = {
	initialCount: 0
};

export default Counter;