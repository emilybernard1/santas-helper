import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import SantasSecretsForm from '../shared/SantasSecretsForm'
// import { updateSantasSecrets } from '../../api/santasSecrets'
import messages from '../shared/AutoDismissAlert/AutoDismissAlert'
import { useParams } from 'react-router-dom'


const EditSantasSecretsModal = (props) => {
    const {
        user, show, handleClose,
        msgAlert, triggerRefresh, pet
    } = props

    const {wishListId, secretId} = useParams()
    const [santasSecret, setSantasSecret] = useState(props.santasSecret)

    const handleChange = (e) => {
        setSantasSecret(prevSantasSecret => {
            const name = e.target.name
            let value = e.target.value

            const updatedSantasSecret = { [name]: value }

            return {
                ...prevSantasSecret, ...updatedSantasSecret
    
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        updateSantasSecret(user, wishList._id,  santasSecret)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.updateMessageSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: messages.updateMessageFailure + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <SantasSecretsForm
                    santasSecret={santasSecret}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Let Santa know what to bring this person!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditSantasSecretsModal