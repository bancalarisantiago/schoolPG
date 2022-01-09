interface stateI {
	schools:string[];
}

const initialState: stateI = {
	schools:[],
};

interface actionI {
	type: string;
}

export default function reducer(state: stateI = initialState, action: actionI) {
	return state;
}