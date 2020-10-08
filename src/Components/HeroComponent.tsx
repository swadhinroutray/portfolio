import React from "react";

//Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";

//Components
import Socials from "./SocialsComponent";
function HeroComponent(props: any) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true} className="justify-content-center">
        <Row className="justify-content-center text-center">
          <Col md={7} sm={12}>
            {props.title && (
              <h1 className="display-3 projects-header font-weight-bolder">
                {props.title}
              </h1>
            )}
            {props.subTitle && (
              <h3 className="display-5 font-weight-light">{props.subTitle}</h3>
            )}
          </Col>
        </Row>
        <br/>
        <br/>
        <Row className="justify-content-center text-center">
          <Col md={7} sm={12}>
            <h3 className="display-4 justify-content-center font-weight-bold">
              <span>My Socials</span>
            </h3>
          </Col>
        </Row>
        <Row className=" justify-content-center text-center">
          <Socials />
        </Row>
        <br/>
        <br />

        <Row className="justify-content-center text-center py-1">
          {props.text && (
            <h2 className="display-4 projects-header font-weight-bold">
              <span>{props.text}</span>
            </h2>
          )}
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default HeroComponent;
