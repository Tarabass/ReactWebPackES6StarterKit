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
import 'sass/base';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './js/router';

/**
 * Import index.html so webpack can copy it to our build folder
 */
import 'file?name=[name].[ext]!../index.html';

// Now we can attach the router to the 'root' element like this:
ReactDOM.render(Router, document.getElementById('viewport'));