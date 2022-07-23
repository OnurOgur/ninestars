import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { BsFillGeoAltFill, BsEnvelope, BsTelephone } from "react-icons/bs";
import React, { useRef }  from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_g6s7pzk', 'template_fxpr40r', e.target, "GkbuCRDgVvOsOQKJa")
        .then( res => {
            console.log(res)
            e.target.reset()
        }).catch((err) => {
            console.log(err)
        });
    }

  return (
    <section id="contact" className="contact section-padding bg-soft">
        <Container>
            <Row>
                <Col sm={12} className="text-center">
                    <h3>{t('contactUs')}</h3>
                    
                    <div className="line"></div>
                </Col>
                <Col md={5}>
                    <div className="contact-detail">
                        <ul>
                            <li>
                                <a href="/"><BsFillGeoAltFill /></a>
                                <div>
                                    <h5>{t('location')}:</h5>
                                    <span>A108 Adam Street <br />New York, NY 535022 <br/>United States</span>
                                </div>
                            </li>
                            <li>
                                <a href="mailto:info@example.com"><BsEnvelope /></a>
                                <div>
                                    <h5>{t('email')}:</h5>
                                    <a href="mailto:info@example.com">{t('emailDesc')}</a>
                                </div>
                            </li>
                            <li>
                                <a href="tel:+155895548855"><BsTelephone /></a>
                                <div>
                                    <h5>{t('call')}:</h5>
                                    <a href="tel:+155895548855">{t('callNumber')}</a>
                                </div>
                            </li>
                        </ul>
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24194.891570590225!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sbg!4v1658308594838!5m2!1sen!2sbg" width="100%" height="250" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Col>
                <Col md={7}>
                    <Form useRef={form} onSubmit={sendEmail}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>{t('yourName')}</Form.Label>
                                    <Form.Control name="name" type="text" placeholder={t('yourName')} required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>{t('yourEmail')}</Form.Label>
                                    <Form.Control name="user_email" type="email" placeholder={t('yourEmail')} required />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>{t('subject')}</Form.Label>
                                    <Form.Control name="subject" type="text" placeholder={t('subject')} required />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <FloatingLabel name="message" label={t('message')} required>
                                    <Form.Control
                                    name="message" 
                                    as="textarea"
                                    placeholder={t('message')}
                                    style={{ height: '250px' }}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col md={12} className="text-center mt-4">
                                <Button variant="primary" type="submit">{t('sendMessage')}</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact