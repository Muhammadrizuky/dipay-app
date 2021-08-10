const initialState = {
	datas: [],
}

const blog = (state = initialState, action) => {
	switch (action.type) {
		case "ADD__BLOG":
			return {
				...state,
				datas: [...state.datas, action.payload],
			}
		case "REMOVE__BLOG": {
			return {
				...state,
				datas: initialState.datas,
			}
		}

		default:
			return {
				...state,
			}
	}
}

export default blog
