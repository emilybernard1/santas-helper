import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import SantasSecrets from "../secrets/ShowSantasSecrets";

const MessageOffCanvas = (props) => {

  const { wishList, user, msgAlert, setUpdated } = props
  const santasSecrets = wishList.santasSecrets
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  let santasSecretCards

  if (wishList) {
    if (santasSecrets.length > 0) {
      // map over the santasSecrets
      // produce one ShowSantasSecrets component for each of them
      santasSecretCards = wishList.santasSecrets.map(santasSecret => (
        <SantasSecrets
          key={santasSecret._id}
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
      <Button id="button" variant="primary" onClick={handleShow} style={{ color: "white" }}>
        Santa's Secrets
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