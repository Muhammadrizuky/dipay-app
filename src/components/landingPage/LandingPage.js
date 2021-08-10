import React  from "react"
import { Card, Button } from "react-bootstrap"
import { Link  } from "react-router-dom"
import { useSelector  } from "react-redux"

export default function LandingPage() {

    // Proses pengambilan data dari reducers
    const { datas } = useSelector((state) => state.blog)
    const { isLogin } = useSelector((state) => state.login)


    return(
            <div className="content">
                <div className="button-landingPage">
                    {isLogin !== true ? (
                        <>
                            <div className="notLogin-landingPage">
                                <Link to="/create-blog">
                                    <Button className="create-blog" >Try to Create a Post</Button>
                                </Link>
                            </div>
                        </>
                    ):(
                        <>
                            <div className="landingPage-content">
                                <Link to="/create-blog" style={{ width:"80px"}}>
                                    <Button className="create-blog"><h1 style={{paddingLeft:"16px",paddingTop:"20%", textAlign:"center !important"}}>+</h1></Button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
                
                {datas.map((items, idx) => {
                    return(
                        <>
                            <Card className="card-content" key={items.description}>
                                <Card.Header>{items.title}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {items.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>{items.date} by {items.username}</Card.Footer>
                            </Card>
                        </>
                    )
                })}
            </div>
    )
}