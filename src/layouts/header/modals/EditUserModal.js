import { useState } from 'react';
import {Modal, Button, Form, Col, Row, Container} from 'react-bootstrap' 
import UserListModal from '../../../components/users-table/modals/UsersListModal';

export default function EditUserModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary w-100" onClick={handleShow}>
          Edytuj/Dodaj użytkownika
        </Button>
  
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Edytuj/Dodaj użytkownika</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
            <Container>
              <Row>
                <Col> <Form.Label htmlFor="inputPassword5">
                Label
              </Form.Label>
              <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
              <Form.Text id="passwordHelpBlock" muted></Form.Text></Col>
              <Col> <Form.Label htmlFor="inputPassword5">
                Label
              </Form.Label>
              <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
              <Form.Text id="passwordHelpBlock" muted></Form.Text></Col>
              </Row>
            </Container>
             
            </>
          </Modal.Body>
          <Modal.Footer>
          <UserListModal/>
            <Button variant="secondary" onClick={handleClose}>
              Anuluj
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Dodaj
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }