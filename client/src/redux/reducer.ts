interface stateI {

}

const initialState: stateI = {

};

interface actionI {
	type: string;
}

export default function reducer(state: stateI = initialState, action: actionI) {
	return state;
} 