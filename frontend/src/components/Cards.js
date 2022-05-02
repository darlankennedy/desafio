'use strict';
import React from "react";
import { Card, Button, Col, Row, Form,Spinner } from 'react-bootstrap'

export default props => {
    return (
        <div>
            <Card className="col-12">
                <Card.Header as="h5">{props.title}</Card.Header>
                <Card.Body  >
                    <Card.Title>{props.subtitle}</Card.Title>
                    <Card.Body>
                        {props.children}
                    </Card.Body>
                </Card.Body>
            </Card>
        </div>
    )
}