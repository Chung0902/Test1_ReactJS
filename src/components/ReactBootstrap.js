import React from "react";
import "../styles/frameworks.css";
import { 
  Container, 
  Row, 
  Col, 
  Navbar, 
  Nav, 
  NavItem, 
  NavLink, 
  Button, 
  Form, 
  Alert, 
  Tab, 
  Table, 
  Route, 
  Switch 
} from "react-bootstrap";

const ReactBootstrap = () => {
  return (
    <div className="container">
      <h2>Demo các component hỗ trợ từ thư viện React Bootstrap</h2>

      <div className="buttonGroup">
        <Button variant="primary">Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="success">Button</Button>
        <Button variant="danger">Button</Button>
      </div>

      <Form className="formGroup">
        <Form.Group controlId="form-username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter your username" />
        </Form.Group>

        <Form.Group controlId="form-password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>

      <Alert variant="success" className="alert">
        <strong>Success!</strong> Your message has been sent.
      </Alert>

      <Tab.Container id="my-tabs">
        <Tab.Pane tab="Tab 1" key="1">
          This is tab 1.
        </Tab.Pane>
        <Tab.Pane tab="Tab 2" key="2">
          This is tab 2.
        </Tab.Pane>
      </Tab.Container>

      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>30</td>
            <td>New York, NY</td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>25</td>
            <td>Los Angeles, CA</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ReactBootstrap;