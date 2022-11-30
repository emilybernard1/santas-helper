import React, { useState } from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { deleteSantasSecrets } from '../../api/santasSecrets'
import EditSantasSecretsModal from './EditSantasSecretModal'


const SantasSecrets = (props) => {
    const { santasSecrets, wishList, user, msgAlert, triggerRefresh } = props
    console.log('this is the props', props)
    console.log('this is the wishList in showWishList\n', wishList)
    console.log('this is the santasSecrets \n', santasSecrets)

    const [editSantasSecretsModalShow, setEditSantasSecretsModalShow] = useState(false)
    const userString = JSON.stringify(props.user.email)

    const destroySantasSecrets = () => {
        deleteSantasSecrets(user, wishList._id, santasSecrets._id)
            .then(() => {
                msgAlert({
                    heading: 'Secret deleted!',
                    message: 'Bye Bye secret!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'Oh no!',
                    message: 'Something went wrong!',
                    variant: 'danger'
                })
            })
    }

    const sendSantasSecrets = () => {
        sendSantasSecrets(user, wishList._id, santasSecrets._id)
            .then(() => {
                msgAlert({
                    heading: 'Your wishlist for {wishList.name} has been sent!',
                    message: 'Sending to the North Pole!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'Oh no!',
                    message: 'Something went wrong!',
                    variant: 'danger'
                })
            })
    }

    return (
        <>
            <Card className="m-1" border="primary">
                <Card.Header> <h3> Dear Santa, please bring {santasSecrets.name} the following gifts: </h3> </Card.Header>
                <Card.Body>
                    <h4> { santasSecrets.secret } </h4>
                </Card.Body>
                <Card.Footer>
                    { 
                        user && wishList.owner && user._id === wishList.owner._id 
                        ?
                        <>
                        <ButtonGroup>
                            <Button
                                className="m-1"
                                variant="secondary"
                                onClick={() => setEditSantasSecretsModalShow(true)}
                            >
                                Edit Secrets
                            </Button>
                            <Button 
                                className="m-1"
                                color="red"
                                onClick={() => destroySantasSecrets()}
                            >
                                Delete Secret
                            </Button>    
                         </ButtonGroup>
                        </>  
                        :
                        null
                    }
                </Card.Footer>
            </Card>

            <EditSantasSecretsModal
                user={user}
                wishList={wishList}
                santasSecret={santasSecrets}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
                show={editSantasSecretsModalShow}
                handleClose={() => setEditSantasSecretsModalShow(false)}
            />
        </>
    )
}

export default SantasSecrets