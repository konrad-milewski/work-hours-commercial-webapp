import { useState } from "react";
import {
  Button,
  NavDropdown,
  OffCanvas,
  Form,
  Offcanvas,
} from "react-bootstrap";
import EditUserModal from "../../layouts/header/modals/EditUserModal";
export default function OffcanvasEl() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <i
        className="fa-solid fa-gear fa-lg  me-4 text-secondary pointer"
        onClick={handleShow}
        style={{ marginTop: "10px" }}
      ></i>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Admin panel</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <EditUserModal />
          <hr></hr>
          <Form.Label>Nazwa Urządzenia</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted></Form.Text>
          <hr></hr>
          <Form >
            <Form.Check
            onChange={(e) => {
           
              localStorage.setItem('photo',e.target.checked )
              window.location.reload(true);
            }}
              type="switch"
            defaultChecked={localStorage.getItem('photo') == 'true'}
              id="custom-switch"
              label="Zdjęcie przy logowaniu"
            />
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
