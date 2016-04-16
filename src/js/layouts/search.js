/**
 * Created by Peter Rietveld (p.rietveld@live.com) on 5-4-2016.
 *
 * Any use of the code written here-in belongs to the developer and is
 * hereby the owner. If used, one must have strict approval by the
 * developer of the code written here-in. The developer may at anytime
 * change, modify, add, or delete any content contained within.
 *
 * Copyright (c) 2016 Strictly Internet
 */
import React, {Component} from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div style={{border: '1px solid red'}} >
				{this.props.children}
			</div>
		);
	}
}
Search.propTypes = {

};
Search.defaultProps = {

};

export default Search;