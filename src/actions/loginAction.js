export const isLoginAction = (username) => {
	return {
		type: "LOGIN__SUCCESS",
		payload: username,
	}
}

export const isLoginLoading = () => {
	return {
		type: "LOGIN__LOADING",
	}
}

export const isLogoutAction = (username) => {
	return {
		type: "LOGOUT__SUCCESS",
		payload: username,
	}
}

export const isLogoutLoading = () => {
	return {
		type: "LOGOUT__LOADING",
	}
}