/**
 * Created by Peter Rietveld (p.rietveld@live.com) on 6-7-2016.
 *
 * Any use of the code written here-in belongs to the developer and is
 * hereby the owner. If used, one must have strict approval by the
 * developer of the code written here-in. The developer may at anytime
 * change, modify, add, or delete any content contained within.
 *
 * Copyright (c) 2016 Strictly Internet
 */
import React, {Component, PropTypes} from 'react';

import headerImage from '../../img/header.jpg';

class Header extends Component {
	render() {
		return <header onClick={this.props.onClick} className="header" style={{background: 'rgba(217, 217, 217, 0.5) url(' + headerImage + ') no-repeat scroll center bottom'}}/>;
	}
}

export default Header;