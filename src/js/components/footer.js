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
import React from 'react';

const Footer = () => (
	<footer id="footer" style={{height: '100px', textAlign: 'center', backgroundColor: '#ccc'}}>
		<h4>
			Made by <a className="raised-link me" href="https://twitter.com/JoshWComeau">Joshua Comeau.</a> Powered by <a className="raised-link spotify" href="https://www.spotify.com">Spotify.</a>
		</h4>
	</footer>
);

export default Footer;