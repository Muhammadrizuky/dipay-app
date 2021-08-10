import React, { useState, useEffect } from "react"
import { Card, Form, Button } from "react-bootstrap"
import { useHistory } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { isLoginAction, isLoginLoading } from "../../actions/loginAction"

export default function Login() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [ username, setUsername ] = useState("")

    // Melakukan pengambilan data dalam reducers
    const { isLogin } = useSelector((state) => state.login)

    // Untuk merubah state Username sesuai dengan Value yang dimasukan
    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    // Jika sudah melakukan login maka akan di-redirec ke halaman create-blog
    useEffect(() => {
        if(isLogin) history.push("/create-blog")
    }, [isLogin, history])

    // Digunakan untuk menyimpan Username user yang melakukan Login ke dalam redux
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(isLoginLoading())
        setTimeout(() => {
            dispatch(isLoginAction(username))
            history.push("/create-blog")
        }, 4000)
    }

    return(
        <>
            <div className="content-login" style={{marginTop:"10vh"}}>
                <Card className="card-login">
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
                        <Form className="form-login" onSubmit={(e) => handleSubmit(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address or Username</Form.Label>
                                <Form.Control className="input-form" type="username" placeholder="Enter Email" onChange={(e) => {handleChange(e)}} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword" style={{paddingTop:"1rem"}}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" className="input-form"  placeholder="Password"/>
                            </Form.Group>
                            <Button variant="primary" className="button-login" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card> 
            </div>
        </>
    )
}