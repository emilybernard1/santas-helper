import React, { useState } from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { deleteSantasSecrets } from '../../api/santasSecrets'
import EditSantasSecretsModal from './EditSantasSecretModal'


const SantasSecrets = (props) => {
    const { santasSecret, wishList, user, msgAlert, triggerRefresh } = props
    console.log('this is the props', props)
    console.log('this is the wishList in showWishList\n', wishList)
    console.log('this is the santasSecrets \n', santasSecret)

    const [editSantasSecretsModalShow, setEditSantasSecretsModalShow] = useState(false)
    const userString = JSON.stringify(props.user.email)

    const destroySantasSecrets = () => {
        deleteSantasSecrets(user, wishList._id, santasSecret._id)
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


    return (
        <>
            <Card className="m-1" border="primary">
                <Card.Header> <h3> Dear Santa, please bring {santasSecret.name} the following gifts: </h3> </Card.Header>
                <Card.Body>
                    <h4> { santasSecret.secret } </h4>
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
                santasSecret={santasSecret}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
                show={editSantasSecretsModalShow}
                handleClose={() => setEditSantasSecretsModalShow(false)}
            />
        </>
    )
}

export default SantasSecrets