import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const SantasSecretForm = (props) => {
    const { santasSecret, wishList, handleChange, handleSubmit, heading } = props

    console.log('this is santasSecret in the form\n', santasSecret)

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
                {/* <Form.Label>When are you available?:</Form.Label>
                <Form.Control
                    placeholder="What times and days are you available?"
                    name="daysAvailable"
                    id="daysAvailable"
                    value={petMessage.daysAvailable}
                    onChange={handleChange}
                /> */}
                <Button className=" m-3 justify-content-end" type="submit"> Submit </Button>
            </Form>
        </Container>
    )
}

export default SantasSecretForm