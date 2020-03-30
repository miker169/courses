import {Button, Form} from "react-bootstrap";
import React from "react";

const LoginForm = ({setUser}) => {
    return (<Form data-testid="loginForm">
        <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="string" placeholder="Name"/>
        </Form.Group>
        <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group controlId="register">
            <Form.Check type="checkbox" label="Register"/>
        </Form.Group>
        <Button variant="primary" onClick={setUser}>
            Submit
        </Button>
    </Form>)
}

export default LoginForm