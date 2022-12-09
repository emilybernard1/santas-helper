import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button, ButtonGroup, Image } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { wishListDelete, wishListShow } from '../../api/wishList'
import EditWishListModal from './EditWishListModal'
// import UploadPicture from './UploadPictureModal'
import NewSantasSecretModal from '../secrets/NewSantasSecretModal'
import SantasSecrets from '../secrets/SantasSecretsForm'
import MessageOffCanvas from '../shared/MessageOffCanvas'

const WishListShow = (props) => {

    const { user, msgAlert } = props

    const [wishList, setWishList] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    // const [uploadPictureShow, setUploadPictureShow] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [santasSecretModalShow, setSantasSecretModalShow] = useState(false)
    // const [santasSecrets, setSantasSecrets] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        wishListShow(user, id)
            .then((res) => {
                setWishList(res.data.wishList)
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
            if (type === "CandyCane") {
                return <Image fluid style={{ width: '100%', height: '100%', border: 'solid red' }} src={candyCanePic} />
            } else if (type === "ChristmasTree") {
                return <Image fluid style={{ width: '100%', height: '100%', border: 'solid red' }} src={christmasTreePic} />
            } else {
                return <Image fluid style={{ width: '100%', height: '100%', border: 'solid red' }} src={giftPic} />
            }
        } else {
            return <Image fluid style={{ width: '100%', height: '100%', border: 'solid red' }} src={wishList.img} />
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
                                        <h4> Edit {wishList.name}'s Wish List</h4>
                                    </Button>
                                    {/* <Button
                                        onClick={() => setUploadPictureShow(true)}
                                        className=" m-1 userbutton" variant="primary">
                                        <h4> Edit {wishList.name}'s Picture </h4>
                                    </Button> */}
                                    <Button
                                        onClick={() => handleDeleteWishList()}
                                        className=" m-1 userbutton"
                                        variant="danger"
                                    >
                                        <h5> Delete {wishList.name}'s Wish List </h5>
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
                                <Card.Header><h1 style={{ color: 'red' }}>{wishList.name}'s Wish List</h1> 
                                </Card.Header>
                                <Card.Body>
                                    {/* <h2>Please choose an image {wishList.typeOfWishList}</h2> */}
                                    {/* <h2 className='text-left'>Here's a wish list for me: </h2>
                                    <br></br> */}
                                    <h2>{wishList.item}</h2>
                                </Card.Body>
                                <Card.Footer >
                                    <br></br>
                                    <h3> {wishList.isBought ? "This gift has been bought!" : 'Not bought yet. '}</h3>
                                    <h3> {wishList.isWrapped ? "This gift has been wrapped!" : 'Not wrapped yet. '}</h3>
                                </Card.Footer>
                                <Container className="justify-content-end">
                                    <ButtonGroup size='sm'>
                                        <Button
                                            style={{ color: "white" }}
                                            size='sm'
                                            onClick={() => setSantasSecretModalShow(true)}
                                            className="m-2"
                                            variant="info"
                                            id="button"
                                            filter="drop-shadow(5px 5px 5px #abadb0)">
                                            <h4>Send a message to Santa!</h4>
                                        </Button>
                                    </ButtonGroup>
                                </Container>
                            </Card>


                        </Container>
 
                        <NewSantasSecretModal
                            user={user}
                            wishList={wishList}
                            santasSecrets={SantasSecrets}
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
                            santasSecrets={SantasSecrets}
                            triggerRefresh={() => setUpdated(prev => !prev)}
                            handleClose={() => setEditModalShow(false)}
                        />
                    </Col>
                    <Row>
                        <Col>
                            {/* <UploadPicture
                                user={user}
                                wishList={wishList}
                                show={uploadPictureShow}
                                msgAlert={msgAlert}
                                triggerRefresh={() => setUpdated(prev => !prev)}
                                handleClose={() => setUploadPictureShow(false)}
                            /> */}
                        </Col>
                    </Row>

                </Row>

            </Container>

        </Container>
    )
}

export default WishListShow