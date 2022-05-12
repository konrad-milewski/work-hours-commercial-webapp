import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function ModalAuth({ show, setShow }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">
            Nie ma cie w grafiku!{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Form.Label htmlFor="inputPassword5">
              Powód przyjścia do pracy
            </Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted></Form.Text>
          </>
        </Modal.Body>
        <Modal.Footer>
          <p className="me-auto">Custom text <b>Strong</b> and no.</p>
          <Button variant="primary" href="/" onClick={handleClose}>
            Dalej
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
