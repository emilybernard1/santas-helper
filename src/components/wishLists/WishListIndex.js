import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WishListIndex = ({ user, msgAlert }) => {

    const candyCanePic = require('../shared/images/candy-cane.png')
    const christmasTreePic = require('../shared/images/christmas-tree.png')
    const giftPic = require('../shared/images/gift.png')
    const setImage = (type) => {

        if (type === "CandyCane") {
            return <Image fluid src={candyCanePic} />
        } else if (type === "ChristmasTree") {
            return <Image fluid src={christmasTreePic} />
        } else {
            return <Image fluid src={giftPic} />
        }
    }

    const [allWishLists, setAllWishLists] = useState([])

    useEffect(() => {
        WishListIndex(user)
            .then(res => {
                setAllWishLists(res.data.wishLists)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Index Wish Lists Failure' + error,
                    variant: 'danger'
                })
            })
    }, [])



    const wishListCards = allWishLists.map(wishList => (

        <Card key={wishList._id} style={{ margin: 10, width: '45%', }} border="primary">

            <Card.Body>
                <Card.Text>
                    <Row>
                        <Col>
                            <Link to={`/santasHelper/${wishList._id}`}>
                                <Container>
                                    {
                                        wishList.img
                                            ?
                                            <> <Image fluid style={{ width: '200px', height: '200px', border: 'solid red' }} src={wishList.img} /></>
                                            :
                                            <> {setImage(wishList.type)} </>
                                    }
                                </Container>
                            </Link>
                        </Col>
                        <Col>
                            <Card.Title style={{ fontFamily: 'Oswald' }}>{wishList.name.toUpperCase()}</Card.Title>
                            <Card.Text style={{ color: '#eb50b8' }}>{wishList.type}</Card.Text>
                        </Col>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <Container className="mx-auto mt-5" style={{ justifyContent: "space-around" }}>
            <Row>
                {wishListCards}
            </Row>
        </Container>
    )
}

export default WishListIndex