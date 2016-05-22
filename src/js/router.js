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
import { Router, Route/*, browserHistory*/, IndexRoute } from 'react-router';

// Pages
import Home from './components/home';
import Users from './components/users';
import Products from './components/products';

// Layouts
import Main from './layouts/main';
import Search from './layouts/search';

export default (
	<Router>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			<Route component={Search}>
				<Route path="users" component={Users} />
				<Route path="products" component={Products} />
			</Route>
			<Route path="blog" component="{CommentBox}" />
		</Route>
	</Router>
);