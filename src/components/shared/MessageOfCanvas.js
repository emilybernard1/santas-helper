import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import ShowSantasSecret from "../Secrets/ShowSantasSecret";

const MessageOffCanvas = (props) => {

  const { pet, user, msgAlert, setUpdated } = props
  const santasSecrets = wishList.santasSecrets
  console.log('this is wishlist in props\n', wishList)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let santasSecretCards
  if (wishList) {
    console.log("this is the wishList in WISHLISTCARDS", wishList)
    if (santasSecrets.length > 0) {
      // map over the santasSecrets
      // produce one ShowSantasSecret component for each of them
      santasSecretCards = pet.santasSecrets.map(santasSecret => (
        <ShowSantasSecret
          key={santasSecrets._id}
          santasSecret={santasSecret}
          wishList={wishList}
          user={user}
          msgAlert={msgAlert}
          triggerRefresh={() => setUpdated(prev => !prev)}
        />
      ))
    } else {
      santasSecretCards = <h2>No secrets yet 😭</h2>
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ color: "white" }}>
        Send a Message to Santa
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h1> Santa's Secrets for {wishList.name} </h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          {santasSecretCards}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default MessageOffCanvas