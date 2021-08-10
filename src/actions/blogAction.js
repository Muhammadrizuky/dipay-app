export const createBlog = (dataBlog) => {
	return {
		type: "ADD__BLOG",
		payload: dataBlog,
	}
}
export const logOut = (dataBlog) => {
	return {
		type: "REMOVE__BLOG",
		payload: dataBlog,
	}
}