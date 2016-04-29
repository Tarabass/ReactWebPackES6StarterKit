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
import 'sass/components/linkbutton';

import React, {Component, PropTypes} from 'react';

class LinkButton extends Component {
	render() {
		return (<a style={{color: this.props.color}} className="linkbutton" href={this.props.link} alt={this.props.text} title={this.props.text}>{this.props.text}</a>);
	}
}

LinkButton.propTypes = {
	color: PropTypes.string
};

LinkButton.defaultProps = {
	color: 'red'
};

export default LinkButton;
