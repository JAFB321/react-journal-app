import { types } from "../types/types";
const initState = {
	loading: false,
	msgError: "",
};

export const uiReducer = (state = initState, action) => {
	switch (action.type) {
		case types.uiSetError:
			return {
				...state,
				msgError: action.payload,
			};

		case types.uiRemoveError:
			return {
				...state,
				msgError: null,
			};

		case types.uiStartLoading:
			return {
				...state,
				loading: true,
			};

		case types.uiStopLoading:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};
