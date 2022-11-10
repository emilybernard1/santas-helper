import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import GiftCheckBox from './GiftCheckBox'


const WishListForm = (props) => {
    // here are the props we're going to bring into our form
    const { wishList, handleChange, heading, handleSubmit, handleCheck } = props
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
                {/* <Form.Label>Breed:</Form.Label>
                <Form.Control
                    placeholder="Border Collie, Tabby Cat, Good Boy"
                    name="breed"
                    id="breed"
                    value={pet.breed}
                    onChange={handleChange}
                />
                <Form.Label>Likes:</Form.Label>
                <Form.Control
                    placeholder="What does your pet like to do?"
                    name="likes"
                    id="likes"
                    value={pet.likes}
                    onChange={handleChange}
                /> */}
                <br></br>
                <GiftCheckBox
                    label="Has this item been bought?"
                    value={wishList.bought}
                    onChange={handleCheck}
                />
                <br></br>
                <br></br>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default WishListForm