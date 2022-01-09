import axios from 'axios';
import { Dispatch } from 'redux';

export const getAllSchools = () => {
	return async (dispatch:Dispatch) => {
		const response = await axios.get('/school');
		dispatch({
			type: 'GET_SCHOOLS',
			payload: response.data,
		});
	};
};