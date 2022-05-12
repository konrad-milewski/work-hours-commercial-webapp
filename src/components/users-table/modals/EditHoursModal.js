import { useState } from 'react';
import {Modal, Button, Form, Col, Row, Container} from 'react-bootstrap' 
import JTimepicker from 'reactjs-timepicker'

export default function EditHoursModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="secondary my-2" onClick={handleShow}>
        <i class="fa-solid fa-pen-to-square text-white"></i> Edytuj
        </Button>
  
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Edytuj Godziny Pracy</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
            <Container>
              <Row>
                <Col> <Form.Label htmlFor="inputPassword5">
                Przyjście
              </Form.Label>
              <Form.Control
                type="date"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
            
              <JTimepicker color="#5F72D7" style={{width:'400px !important'}} size={40} className="my-3" onChange={console.log} />
              </Col>
              <Col> <Form.Label htmlFor="inputPassword5">
                Wyjście
              </Form.Label>
              <Form.Control
                type="date"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
            
              <JTimepicker color="#5F72D7" style={{width:'400px !important'}} size={40}  className="my-3"onChange={console.log} />
              </Col>
              </Row>
            </Container>
             
            </>
          </Modal.Body>
          <Modal.Footer>
           
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