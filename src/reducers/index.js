import blog from "./blog"
import login from "./login"
import { combineReducers } from "redux"

const allReducers = combineReducers({
	blog: blog,
	login: login,
})

export default allReducers
