/************************* Redux Files ************************/
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

/************************* Reducer Files ************************/
import rootReducer from './rootReducer';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
	return createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	);
}