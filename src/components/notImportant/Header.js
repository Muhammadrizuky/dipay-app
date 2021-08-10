import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import { Button, Navbar } from "react-bootstrap"
import { useHistory } from "react-router"
import { logOut } from "../../actions/blogAction"
import { isLogoutAction, isLogoutLoading } from "../../actions/loginAction"
import Swal from "sweetalert2"

function Header() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { username } = useSelector((state) => state.login)
    const dataBlog = useState(null)


    //Digunakan untuk fungsi logout
    const handleLogout = () => {
        Swal.fire({
            title: "Do you want to Logout?",
            showCancelButton: true,
            icon: "question",
            confirmButtonText: `Logout`,
          }).then((result) => {
            if (result.isConfirmed) {
                setTimeout(() => {
                    dispatch(isLogoutLoading())
                    dispatch(isLogoutAction(username))
                    dispatch(logOut(dataBlog))
                    history.push("/")
                    Swal.fire("You've been Logout", "", "success")
                }, 1000)
            }
          })
    }

    return(
        <>
            <div className="navBar">
            {!username ? (
                <Navbar style={{display:"block !important"}}>
                    <Container>
                        <Navbar.Brand className="dipay-logo">
                            <Link to = "/">
                                <h1>DIPAY</h1>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Link to = "/login">
                                <Navbar.Text>
                                    You're not logged in
                                </Navbar.Text>
                            </Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            ) : (
                <Navbar style={{display:"block !important"}}>
                    <Container>
                        <Navbar.Brand className="dipay-logo">
                            <Link to = "/">
                                <h1>DIPAY</h1>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Login as : {username}
                            </Navbar.Text>
                            <Button onClick={(e) => {handleLogout(e)}}>
                                 Logout
                            </Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}
            </div>
        </>
    )
}

export default Header