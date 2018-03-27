import { CONTIRBUTION_SUMMARY } from '../actions';
const defaultState = {
	loading: false,
	error: {
		message: '',
		code: ''
	},
	data:[]
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case CONTIRBUTION_SUMMARY.start:
			return {
				...state,
				loading: true
			};

		case CONTIRBUTION_SUMMARY.end:
			return {
				...state,
				loading: false
			};

		case CONTIRBUTION_SUMMARY.success:
			return {
				...state,
				data: [...action.data],
				error: defaultState.error
			};

		case CONTIRBUTION_SUMMARY.failed:
			return {
				...state,
				error: action.errors
			};
		default:
			return state;
	}
};