import React, { useState, useEffect } from "react"
import { Form, Card, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { useHistory, Link } from "react-router-dom"
import { createBlog } from "../../actions/blogAction"

export default function CreateBlog() {
    const history = useHistory()
	const dispatch = useDispatch()
	const { isLogin, username } = useSelector((state) => state.login)
    const [blog, setBlog] = useState({
        title: "",
        description: "",
    })
    
    // Ketika belum login akan masuk ke tampilan login
    useEffect(() => {
        if(isLogin) {
            return
        }else{
            history.push("/login")
        }
    }, [isLogin, history])
    
    // Untuk dapetin tanggal hari ini digunakan untuk menentukan jam dan tanggal saat posting
    const today = new Date()
    const day = ("0"+today.getDay()).slice(-2)
    const month = ("0"+today.getMonth()).slice(-2)
    const hours = ("0"+today.getHours()).slice(-2)
    const minutes = ("0"+today.getMinutes()).slice(-2)
    const dateToday = "Created on " + day + "/" + month
    + "/" + today.getFullYear() + " at " + hours +":"+ minutes


    // Untuk memasukan data kedalam redux
    const handleForm = (e) => {
        e.preventDefault()
        const dataBlog = {
            title: blog.title,
            date: dateToday,
            description: blog.description,
            username: username,
        }
        dispatch(createBlog(dataBlog))
        history.push("/")
    }

    return(
        <>
            <div className="content">
                <Card className="card-blog" style={{paddingTop:"10vh"}}>
                    <Card.Header>CREATE A BLOG</Card.Header>
                    <Card.Body className="blog-content">
                        <Form className="" onSubmit={(e) => handleForm(e)}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    className="input-titleBlog"
                                    type="text"
                                    placeholder="Masukan title..."
                                    onChange={(e) => setBlog({...blog, title: e.target.value})}    
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    className="input-textArea"
                                    as="textarea"
                                    placeholder="Masukan Description..."
                                    onChange={(e) => setBlog({...blog, description: e.target.value})}
                                />
                            </Form.Group>

                            <Form.Group className="button-createBlog">
								<Button variant="primary" type="submit">
									Submit
								</Button>
								<Link to="/">
                                    <Button valiant="primary">
									    Back
                                    </Button>
								</Link>
							</Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}