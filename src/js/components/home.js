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
import 'sass/components/home';

import React, {Component, PropTypes} from 'react';
import Paragraph from './paragraph';
import LinkButton from './linkbutton';
import Counter from './counter';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	/**
	 * Invoked once, on both client & server before rendering occurs.
	 */
	componentWillMount() {
		console.log('Function called: %s', 'componentWillMount');
	}
	render() {
		return (
			<div className="my-app">
				<h1>This is React!!!</h1>
				<Paragraph text="I followed a tutorial on:" />
				<Paragraph text="http://edspencer.net/2016/03/20/a-new-stack-for-2016-getting-started-with-react-es6-and-webpack/" />
				<Paragraph text="https://css-tricks.com/learning-react-router/" />
				<Paragraph text="https://daveceddia.com/react-es5-createclass-vs-es6-classes/" />
				<LinkButton color="green" text="I also read about React.createClass versus extends Component" link="https://toddmotto.com/react-create-class-versus-component/" />
				<LinkButton text="Using css/sass is talked about here" link="https://www.bensmithett.com/smarter-css-builds-with-webpack/" />
				<div onClick={this._handleClick.bind(this)}>handle click of extend Components (home.js)</div>
				<Counter/>
			</div>
		);
	}

	/**
	 * Invoked once, only on the client, after rendering occurs.
	 */
	componentDidMount() {
		console.log('Function called: %s', 'componentDidMount');
	}

	/**
	 * Invoked prior to unmounting component.
	 */
	componentWillUnmount() {
		console.log('Function called: %s', 'componentWillUnmount');
	}
	/**
	 * Return value determines whether component should update.
	 */
	shouldComponentUpdate() {
		console.log('Function called: %s', 'shouldComponentUpdate');
	}
	_handleClick() {
		console.log(this); // React Component instance
	}
}
Home.propTypes = {

};
Home.defaultProps = {

};

export default Home;