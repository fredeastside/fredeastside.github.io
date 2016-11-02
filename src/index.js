import React from 'react';
import { render } from 'react-dom';
import routes from './routes';

import '../css/styles.styl';

render(routes, document.querySelector('.container'));
