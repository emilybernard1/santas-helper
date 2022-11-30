import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import santasSecrets from './ShowSantasSecrets'

const SantasSecretForm = (props) => {
    const { santasSecrets, wishList, handleChange, handleSubmit, heading } = props

    console.log('this is santasSecret in the form\n', santasSecrets)

    return (
        <Container className="justify-content-center" style={{ fontFamily: "Oswald" }}>
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    placeholder="what's your recipient's name?"
                    name="name"
                    id="name"
                    value={santasSecrets.name}
                    onChange={handleChange}
                />
                <Form.Label>Wish List for Santa:</Form.Label>
                <Form.Control
                    placeholder="what would you like Santa to bring this person..."
                    name="name"
                    id="secret"
                    value={santasSecrets.secret}
                    onChange={handleChange}
                />
                <Button id="button" className="m-3 justify-content-end" type="submit"> Submit </Button>
            </Form>
        </Container>
    )
}

export default SantasSecretForm