import React from 'react';
import { Alert, Badge, Button, Image, Row, Col, Media } from 'react-bootstrap';

function Top() {
    return (
        <div className="mt-3">
            <Row>
                <Col md={3}><Alert variant="info">Website React Bootstrap</Alert></Col>
                <Col md={{ span: 3, offset: 4 }}>
                    <Button variant="primary">
                        Notifications <Badge variant="light">9</Badge>
                    </Button>
                    <Button variant="primary">
                        Message <Badge variant="light">19</Badge>
                    </Button>
                </Col>
                <Col md={2}>
                    <Media>
                        <Image
                            width={35}
                            height={35}
                            className="mr-3"
                            src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
                            alt="Profile Picture"
                        />
                        <Media.Body>
                            <h5>Andreas</h5>
                        </Media.Body>
                    </Media>
                </Col>
            </Row>
        </div >
    );
}

export default Top;