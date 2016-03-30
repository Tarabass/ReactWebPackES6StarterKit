/**
 * Created by Peter Rietveld (p.rietveld@live.com) on 30-3-2016.
 *
 * Any use of the code written here-in belongs to the developer and is
 * hereby the owner. If used, one must have strict approval by the
 * developer of the code written here-in. The developer may at anytime
 * change, modify, add, or delete any content contained within.
 *
 * Copyright (c) 2016 Strictly Internet
 */
import React from 'react';
import { Router, Route/*, browserHistory, IndexRoute*/ } from 'react-router';

// Pages
import Home from './components/home';

export default (
	<Router>
		<Route path="/" component={Home} />
	</Router>
);