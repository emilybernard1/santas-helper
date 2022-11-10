import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import SantasSecretsForm from '../shared/SantasSecretsForm'
import { createSantasSecrets } from '../../api/santasSecrets'

const NewSantasSecretModal = (props) => {
    const {
        user, wishList, show, handleClose, msgAlert, triggerRefresh
    } = props

    const [santasSecret, setSantasSecret] = useState({})

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

        createSantasSecrets(user, pet._id, santasSecret)
            .then(() => handleClose())
            .then(() => triggerRefresh())
            .then(() => msgAlert({
                heading: "Oh yeah!",
                message: "Youpi! your message has been sent to Santa at the North Pole!",
                variant: 'success'
            }))
            // .then(() => triggerRefresh())
            .catch(msgAlert({
                heading: "Oh no!",
                message: "something went wrong",
                variant: 'danger'
            }))
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>

                <SantasSecretsForm
                    santasSecret={santasSecret}
                    wishList={wishList}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Send a wish list to Santa!"
                />
            </Modal.Body>
        </Modal>

    )
}

export default NewSantasSecretModal