import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Axios from "axios";
interface ContactPageProps {
  title: String;
}

export class ContactPage extends Component<ContactPageProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }
  handleChange = (e: any) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = async (e: any) => {
    e.preventDefault();
    this.setState({
      disabled: true,
      emailSent: false,
    });
    try {
      const result = await Axios.post("http://localhost:5000/api/email", this.state);
      console.log(result)
      if (result.data.success) {
        this.setState({
          disabled: false,
          emailSent: true,
        });
      } else {
        this.setState({
          disabled: false,
          emailSent: false,
        });
      }
    } catch (error) {
        console.log(error)
      this.setState({
        disabled: false,
        emailSent: false,
      });
    }
  };

  render() {
    return (
      <div>
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
          <Container fluid={true} className="justify-content-center">
            <Row className="justify-content-center text-center">
              {this.props.title && (
                <h1 className="display-4 projects-header font-weight-bolder p-2">
                  {this.props.title}
                </h1>
              )}
            </Row>
          </Container>
        </Jumbotron>
        <div className="justify-content-center form-wrapper">
          <Form
            onSubmit={this.handleSubmit}
            className="justify-content-center  text-left"
          >
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows={3}
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              className="d-inline-block"
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>
            {this.state.emailSent === true && (
              <p className="d-inline success-msg"> Email Sent</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg"> Email Not Sent</p>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

export default ContactPage;
