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
import Paragraph from './paragraph';

class Home extends Component {
	render() {
		return (
			<div className="my-app">
				<h1>This is React!!!</h1>
				<Paragraph text="I followed a tutorial on:" />
				<Paragraph text="http://edspencer.net/2016/03/20/a-new-stack-for-2016-getting-started-with-react-es6-and-webpack/" />
				<Paragraph text="https://css-tricks.com/learning-react-router/" />
			</div>
		);
	}
}
export default Home;