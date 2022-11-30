import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import SantasSecretsForm from './SantasSecretsForm'
import { updateSantasSecrets } from '../../api/santasSecrets'
import messages from '../shared/AutoDismissAlert/AutoDismissAlert'
import { useParams } from 'react-router-dom'

const EditSantasSecretsModal = (props) => {
    const {
        user, show, handleClose,
        msgAlert, triggerRefresh, wishList
    } = props

    const {wishListId, santasSecretsId} = useParams()
    const [santasSecrets, setSantasSecrets] = useState(props.santasSecret)

    const handleChange = (e) => {
        setSantasSecrets(prevSantasSecrets => {
            const name = e.target.name
            let value = e.target.value

            const updatedSantasSecrets = { [name]: value }

            return {
                ...prevSantasSecrets, ...updatedSantasSecrets
    
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        updateSantasSecrets(user, wishList._id,  santasSecrets)
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
                    santasSecrets={santasSecrets}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Let Santa know what to bring this person!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditSantasSecretsModal