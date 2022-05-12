import { useState } from 'react';
import {Modal, Button, Form, Col, Row, Container} from 'react-bootstrap' 
export default function UserListModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="secondary" onClick={handleShow}>
         Lista Operatorów
        </Button>
  
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Tabela Operatorów</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
            <Container>
              <Row>
                <Col> <Form.Select aria-label="Default select example">

  <option value="1">Grzegorz P</option>
  <option value="2">Anna</option>
 
</Form.Select></Col>
              
              </Row>
            </Container>
             
            </>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Anuluj
            </Button>
          
          </Modal.Footer>
        </Modal>
      </>
    );
  }