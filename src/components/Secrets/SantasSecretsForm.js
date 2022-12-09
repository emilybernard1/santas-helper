import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'
// import santasSecrets from './ShowSantasSecrets'

const SantasSecretForm = (props) => {
    const { santasSecret, handleChange, handleSubmit, heading } = props


    return (
        <Container className="justify-content-center" style={{ fontFamily: "Oswald" }}>
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    placeholder="what's your recipient's name?"
                    name="name"
                    id="name"
                    value={santasSecret.name}
                    onChange={handleChange}
                />
                <Form.Label>Wish List for Santa:</Form.Label>
                <Form.Control
                    placeholder="what would you like Santa to bring this person..."
                    name="secret"
                    id="secret"
                    value={santasSecret.secret}
                    onChange={handleChange}
                />
                <Button id="button" className="m-3 justify-content-end" type="submit"> Submit </Button>
            </Form>
        </Container>
    )
}

export default SantasSecretForm