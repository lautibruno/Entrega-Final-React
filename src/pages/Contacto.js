import React from "react";
// import { Container, Form, Row, Col, Button, Accordion, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card";
import '../styles/Contacto.css';

const Contacto = (props) => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h2 className="form-title">Formulario de Ayuda</h2>
                    <Form>
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su nombre" />
                        </Form.Group>
                        <Form.Group controlId="apellido">
                            <Form.Label>Apellido:</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su apellido" />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su email" />
                        </Form.Group>
                        <Form.Group controlId="telefono">
                            <Form.Label>Teléfono:</Form.Label>
                            <Form.Control type="tel" placeholder="Ingrese su teléfono" />
                        </Form.Group>
                        <Form.Group controlId="socio">
                            <Form.Label>¿Es usted socio?</Form.Label>
                            <div>
                                <Form.Check inline label="Sí" type="radio" name="socio" id="socio-yes" value="yes" />
                                <Form.Check inline label="No" type="radio" name="socio" id="socio-no" value="no" />
                            </div>
                        </Form.Group>
                        <Form.Group controlId="motivo">
                            <Form.Label>Motivo del contacto:</Form.Label>
                            <Form.Control as="select">
                                <option value="1">Consulta general</option>
                                <option value="2">Problema técnico</option>
                                <option value="3">Solicitud de información</option>
                                <option value="4">Reclamo</option>
                                <option value="5">Otro</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="comentario">
                            <Form.Label>Comentario:</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button type="submit" className="btn btn-contacto">Enviar</Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <div className="faq-container">
                        <h2 className="faq-title">Preguntas Frecuentes</h2>
                        <Accordion id="accordionFAQ">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    ¿Que ofrece Animal GYM?
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        Una sala cardiovascular, musculación y de peso libre con equipamiento de primera línea, clases grupales
                                        con mucha onda (Zumba, Funcional, Yoga; Aerolocal, Taller ABS y Estiramiento), vestuarios modernos y
                                        planes de entrenamiento prediseñados. Protocolos de seguridad en todas nuestras sucursales. Fitness como
                                        la gente a un precio para la gente.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Después de asociarme, ¿necesito hacer algo más para empezar a entrenar?
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        Si, tenés que traer un certificado médico de apto físico. Provisoriamente, podés comenzar a entrenar
                                        completando una Declaración Jurada de Salud en tu sucursal.

                                        Consultá en Recepcion por descuentos en tu apto médico exclusivo para socios Animal GYM.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contacto;