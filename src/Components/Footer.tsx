import React,{ Component } from  "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export class FooterComponent extends Component {
  render() {
    return (
      <footer className="mt-5">
        <Container fluid={true}>
          <Row className='border-top justify-content-between p-3'>
            <Col className="p-0" md={3} sm={12}>
              Swadhin Routray &copy;
            </Col>
            <Col className="p-0 d-flex justify-content-end" md={3} >
              This site is made with React+Typescript!
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default FooterComponent;
