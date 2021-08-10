import React from "react"
import { Route, Switch } from "react-router-dom"
import LandingPage from "./components/landingPage/LandingPage"
import Header from "./components/notImportant/Header"
import Footer from "./components/notImportant/Footer"
import Login from "./components/login/Login"
import CreateBlog from "./components/createBlog/CreateBlog"

export default function routes() {
    return (
		<>
			{/* <Header></Header> */}
			<div className="layout">
                <Header />
				<Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/create-blog" exact component={CreateBlog} />
                    <Route path="/login" component={Login} />
				</Switch>
                <Footer />
			</div>
		</>
	)
}