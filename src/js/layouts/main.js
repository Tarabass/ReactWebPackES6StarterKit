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
import 'sass/layouts/main';
import 'font-awesome/scss/font-awesome';

import React from 'react';
import { Link } from 'react-router';
import { IndexLink } from 'react-router';

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
		return (
			<div className="main">
				<nav className="nav">
					<ul>
						{this._getLinks()}
					</ul>
				</nav>
				<header onClick={this._handleHeaderClick} className="header"></header>
				<main>
					{this.props.children}
				</main>
			</div>
		);
	},

	/**
	 * handle click of createClass instance (main.js)
	 * @private
	 */
	_handleHeaderClick() {
		console.log(this); // React Component instance
	},

	_getLinks() {
		const links = [{
			id: 1,
			text: 'Home',
			href: '/',
			icon: 'home'
		}, {
			id: 2,
			text: 'Users',
			href: '/users',
			icon: 'users'
		}, {
			id: 3,
			text: 'Products',
			href: '/products',
			icon: 'list'
		}, {
			id: 4,
			text: 'Blog',
			href: '/blog',
			icon: 'comments'
		}];

		return links.map(link => {
			if(link.href === '/') {
				return <li key={link.id}><IndexLink to={link.href} activeClassName="active"><i className={"fa fa-" + link.icon}></i>{link.text}</IndexLink></li>;
			}
			else {
				return <li key={link.id}><Link to={link.href} activeClassName="active"><i className={"fa fa-" + link.icon}></i>{link.text}</Link></li>;
			}
		});
	}
});

export default Main;