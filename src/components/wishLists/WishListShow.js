import React, { Fragment, useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button, ButtonGroup, Image } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { wishListDelete, wishListShow } from '../../api/wishList'
import EditWishListModal from './EditWishListModal'
import UploadPicture from './UploadPictureModal'
// import NewRatingModal from '../rating/NewRatingModal'
// import ShowRating from '../rating/ShowRating'
import NewSantasSecretModal from "../Messages/NewSantasSecretModal"

import MessageOffCanvas from '../shared/MessageOfCanvas'

const WishListShow = (props) => {

    const { user, msgAlert } = props

    const [wishList, setWishList] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [uploadPictureShow, setUploadPictureShow] = useState(false)
    // const [NewRatingShow, setNewRatingShow] = useState(false)
    // const [ShowRating, setShowRating] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [santasSecretModalShow, setSantasSecretModalShow] = useState(false)
    const [santasSecrets, setSantasSecrets] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    // const makeRatingCards = () => {
    //     let ratingCards = []
    //     console.log("inside make rating cards before if", pet)
    //     if (pet && pet.rating.length > 0) {
    //         // map over the ratings
    //         // produce one ShowRating component for each of them
    //         console.log("making rating cards if")
    //         ratingCards = pet.rating.map(rating => (
    //             <ShowRating
    //                 key={rating._id}
    //                 rating={rating}
    //                 pet={pet}
    //                 user={user}
    //                 msgAlert={msgAlert}
    //                 triggerRefresh={() => setUpdated(prev => !prev)}
    //             />
    //         ))
    //     }
    //     return (ratingCards)
    // }

    useEffect(() => {
        wishListShow(user, id)
            .then((res) => {
                console.log(res.data.wishList)
                setWishList(res.data.wishList)
                console.log("this is the id in the updated useeffect", id) //this is the id in the updated useEffect
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Wish List Failure' + error,
                    variant: 'danger'
                })
            })
    }, [updated])


    const candyCanePic = require('../shared/images/candy-cane.jpeg')
    const christmasTreePic = require('../shared/images/christmas-tree.jpeg')
    const giftPic = require('../shared/images/gift.jpeg')
    const setImage = (type) => {
        if (!wishList.img) {
            if (type === "Candy Cane") {
                return <Image fluid style={{ width: '80%', height: '80%', }} src={candyCanePic} />
            } else if (type === "Christmas Tree") {
                return <Image fluid style={{ width: '80%', height: '80%', }} src={christmasTreePic} />
            } else {
                return <Image fluid style={{ width: '80%', height: '80%', }} src={giftPic} />
            }
        } else {
            return <Image fluid style={{ width: '100%', height: '100%', border: 'solid #d838f2' }} src={wishList.img} />
        }
    }

    const handleDeleteWishList = () => {
        wishListDelete(user, id)
            .then(() => {
                setDeleted(true)

                msgAlert({
                    heading: 'Success',
                    message: 'You Deleted Your Wish List',
                    variant: 'success'
                })

            })

            .catch((error) => {
                msgAlert({
                    heading: 'Uh-oh',
                    message: 'Your Wish List is Still Here' + error,
                    variant: 'danger'
                })
            })
    }

    // oneliner
    if (deleted) navigate('/santasHelper')

    if (!wishList) {
        return <p>Loading...</p>
    }

    return (
        <Container>
            {wishList && wishList.owner && user && wishList.owner._id === user._id
                ?
                <Container fluid className='mt-5 justify-content-end'>
                    <MessageOffCanvas
                        wishList={wishList}
                        user={user}
                        msgAlert={msgAlert}
                        setUpdated={setUpdated}
                    />
                </Container>
                :
                null
            }

            <Container className='mt-5 mx-auto' >
                <Row className='Picture'>
                    <Col xl={1}>
                        <Card.Header>

                        </Card.Header>
                    </Col>
                    <Col className='mx-auto mt-5'>
                        <Container className='justify-content-center'>
                            {wishList ? setImage(wishList.type) : null}
                        </Container>
                        <Card.Body>
                            {wishList && wishList.owner && user && wishList.owner._id === user._id
                                ?
                                <Row className="userButtonGroup">

                                    <Button
                                        onClick={() => setEditModalShow(true)}
                                        className=" m-1 userbutton" variant="info">
                                        <h4> Edit {wishList.name}'s Profile</h4>
                                    </Button>
                                    <Button
                                        onClick={() => setUploadPictureShow(true)}
                                        className=" m-1 userbutton" variant="secondary">
                                        <h4> Edit {wishList.name}'s Picture </h4>
                                    </Button>
                                    <Button
                                        onClick={() => handleDeleteWishList()}
                                        className=" m-1 userbutton"
                                        variant="danger"
                                    >
                                        <h5> Delete {wishList.name}'s Profile </h5>
                                    </Button>
                                </Row>
                                :
                                null
                            }
                        </Card.Body>
                    </Col>
                    <Col xl={6}>
                        <Container fluid style={{ width: "100%" }}>
                            <Card className='mt-3'>
                                <Card.Header><h1 style={{ color: '#eb50b8' }}>Hi! My name is {wishList.name}</h1> </Card.Header>
                                <Card.Body>
                                    {/* <h2>I am a {pet.typeOfPet}, more specifically I am a {pet.breed}!</h2> */}
                                    <h2 className='text-center'>Here's a wish list for me: </h2>
                                    <h2>{wishList}</h2>
                                </Card.Body>
                                <Card.Footer >
                                    <h2> {item.bought ? "I have been bought!" : 'Not bought yet. '}</h2>
                                </Card.Footer>
                                <Container className="justify-content-end">
                                    <ButtonGroup size='sm'>
                                        {/* <Button
                                            style={{ color: "white" }}
                                            size='sm'
                                            onClick={() => setNewRatingShow(true)}
                                            className="m-2"
                                            variant="info">
                                            <h4> Rate your date with {pet.name}! </h4>
                                        </Button> */}
                                        <Button
                                            style={{ color: "white" }}
                                            size='sm'
                                            onClick={() => setSantasSecretModalShow(true)}
                                            className="m-2"
                                            variant="info">
                                            <h4>Send a message to Santa!</h4>
                                        </Button>
                                    </ButtonGroup>
                                </Container>
                            </Card>


                        </Container>
                        {/* <Container>
                            {wishList ? makeRatingCards() : <><p>rating cards go here</p></>}
                        </Container> */}


                        <NewSantasSecretModal
                            user={user}
                            wishList={wishList}
                            show={santasSecretModalShow}
                            msgAlert={msgAlert}
                            triggerRefresh={() => setUpdated(prev => !prev)}
                            handleClose={() => setSantasSecretModalShow(false)}
                        />

                    </Col>
                    <Col>
                        <EditWishListModal
                            user={user}
                            wishList={wishList}
                            show={editModalShow}
                            msgAlert={msgAlert}
                            triggerRefresh={() => setUpdated(prev => !prev)}
                            handleClose={() => setEditModalShow(false)}
                        />
                    </Col>
                    <Row>
                        <Col>
                            <UploadPicture
                                user={user}
                                wishList={wishList}
                                show={uploadPictureShow}
                                msgAlert={msgAlert}
                                triggerRefresh={() => setUpdated(prev => !prev)}
                                handleClose={() => setUploadPictureShow(false)}
                            />
                        </Col>
                    </Row>

                </Row>

                {/* <Col>
                    <NewRatingModal
                        user={user}
                        pet={pet}
                        show={NewRatingShow}
                        msgAlert={msgAlert}
                        triggerRefresh={() => setUpdated(prev => !prev)}
                        handleClose={() => setNewRatingShow(false)}
                    />
                </Col> */}
            </Container>

        </Container>
    )
}

export default WishListShow