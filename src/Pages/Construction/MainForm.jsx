import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MainForm.css';
import {Link} from "react-router-dom";

function MainForm() {
    return (
        <Container className="main-form">
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <h1 className="text-center my-4">Information Form</h1>
                    <Form>
                        <Form.Group controlId="animalType">
                            <Form.Label>Animal type:</Form.Label>
                            <Form.Control as="select">
                                <option value="cow">Cow</option>
                                <option value="goat">Goat</option>
                            </Form.Control>
                        </Form.Group>
                        <div className="action-buttons text-center my-4">
                            <Button variant="primary" size="md" className="mx-2" disabled>
                                Clear
                            </Button>
                            <Link to="/goatparent">
                            <Button variant="primary" size="md" className="mx-2" disabled>
                                Update
                            </Button></Link>
                            <Link to="/cowparent">
                            <Button variant="primary" size="md" className="mx-2" disabled>
                                Submit
                            </Button></Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default MainForm;
