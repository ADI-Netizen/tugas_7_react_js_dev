import React from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';

function Bread() {
    return (
        <Row className="flex-row-reverse">
            <Col md={4}>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
                    <Breadcrumb.Item active>Bola</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
        </Row>
    );
}

export default Bread;