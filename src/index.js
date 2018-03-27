// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import configureStore from './store';
import App from './components/app';
import './style';

let root;
function init() {
	const store = configureStore();
	root = render(
		<div id="outer">
			<Provider store={store}>
				<App />
			</Provider>
		</div>, document.body, root);
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV==='production') {
	require('./pwa');
}

// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/app', () => requestAnimationFrame(init) );
}

init();
