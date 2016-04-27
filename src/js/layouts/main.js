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
import { Link } from 'react-router';

const Main = React.createClass({
	propTypes: {

	},
	getDefaultProps() {
		return {

		};
	},
	getInitialState () {
		return {

		};
	},
	render: function() {
		const links = [{
				text: 'Home',
				href: '/'
			}, {
				text: 'Users',
				href: '/users'
			}, {
				text: 'Widgets',
				href: 'widgets'
			}];

		return (
			<div className="app">
				<header className="primary-header"></header>
				<aside className="primary-aside">
					<ul>
						{links.map(link => <li><Link to={link.href} activeClassName="active">{link.text}</Link></li>)}
					</ul>
				</aside>
				<div onClick={this.handleClick}>handle click of createClass instance (main.js)</div>
				<main>
					{this.props.children}
				</main>
			</div>
		);
	},
	handleClick() {
		console.log(this); // React Component instance
	}
});

export default Main;