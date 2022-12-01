import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import GiftCheckBox from './GiftCheckBox'
import WrappedCheckBox from './WrappedCheckBox'


const WishListForm = (props) => {
    // here are the props we're going to bring into our form
    const { wishList, handleChange, heading, handleSubmit, handleCheck, handleCheckWrapped } = props
    console.log(wishList.bought)

    return (
        <Container className="justify-content-center" style={{ fontFamily: "Oswald" }}>

            <Form onSubmit={handleSubmit}>
                <h2>{heading}</h2>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    placeholder="what's your recipient's name?"
                    name="name"
                    id="name"
                    value={wishList.name}
                    onChange={handleChange}
                />
                <Form.Label>Item:</Form.Label>
                <Form.Control
                    placeholder="What to you want to get for them?"
                    name="item"
                    id="item"
                    value={wishList.item}
                    onChange={handleChange}
                />
                <br></br>
                <GiftCheckBox
                    label="Has this item been bought?"
                    value={wishList.isBought}
                    onChange={handleChange}
                />
                <br></br>
                <WrappedCheckBox
                    label="Has this item been wrapped?"
                    value={wishList.isWrapped}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default WishListForm