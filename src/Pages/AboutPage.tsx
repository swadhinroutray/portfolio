import React from "react";
//Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";

import SkillSetComponent from "../Components/SkillSetComponent";
//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faFilePdf,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
interface AboutPageProps {
  title: String;
  bio: String;
  tech: String;
  research: String;
}
const AboutPage: React.FC<AboutPageProps> = ({
  title,
  bio,
  tech,
  research,
}) => {
  return (
    <div>
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true} className="justify-content-center">
          <Row className="justify-content-center text-center">
            <Col md={7} sm={12}>
              {title && (
                <h1 className="display-4 projects-header font-weight-bold py-1">
                  {title}
                </h1>
              )}
            </Col>
          </Row>

          <Row className="justify-content-center  text-center py-2">
            {bio && (
              <p className="display-6 bio-wrapper font-weight-normal p-6">
                {bio}
              </p>
            )}
          </Row>
          <Row className="justify-content-center  text-center py-2">
            {tech && (
              <div>
                <h4 className="display-4 projects-header font-weight-medium py-1">
                  Tech & Research Interests
                </h4>
                <p className=" tech-wrapper font-weight-normal p-6">{tech}</p>
                <br />
                <p className=" tech-wrapper font-weight-normal p-6">
                  {research}
                </p>
              </div>
            )}
          </Row>
          {/* <hr /> */}
          <Row className="justify-content-center text-center py-2">
            <h3 className="display-4 projects-header font-weight-medium py-2">
              Internships & Resume
            </h3>
          </Row>
          <Row className="justify-content-between text-center py-5">
            <Col className="text-center ">
              <a className="px-2" href="mailto:swadhin.routray@gmail.com">
                {" "}
                <FontAwesomeIcon className="" icon={faEnvelope} size="4x" />
              </a>
              <h3 className="lead text-center py-2">Email Address</h3>
            </Col>
            <Col className="text-center">
              <a
                className="px-2"
                href="https://drive.google.com/file/d/1kJTTTTAORMynCPuMxqZdX2-qsRtA7pWf/view"
              >
                {" "}
                <FontAwesomeIcon className="" icon={faFilePdf} size="4x" />
              </a>
              <h3 className="lead font-weight-light py-2">Resume</h3>
            </Col>
            <Col className="text-center">
              <a
                className="px-2"
                href="https://drive.google.com/file/d/1usPGRol38V9GaPnqDOZOo1V21zSyXtpx/view"
              >
                {" "}
                <FontAwesomeIcon
                  className=""
                  icon={faEnvelopeOpenText}
                  size="4x"
                />
              </a>
              <h3 className="lead py-2">
                Safe Kids Foundation Internship Letter
              </h3>
            </Col>
            <Col className="text-center">
              <a
                className="px-2"
                href="https://drive.google.com/file/d/1XeVDUEi8l9dscVhdukDUt5EPubN4t6_N/view"
              >
                {" "}
                <FontAwesomeIcon
                  className=""
                  icon={faEnvelopeOpenText}
                  size="4x"
                />
              </a>
              <h3 className="lead py-2">Valency Networks Internship Letter</h3>
            </Col>
          </Row>
          {/* <hr />
          <Row className="justify-content-center text-center py-1">
          <h3 className="display-4 projects-header font-weight-medium py-3">
              My Tech Skill Set
            </h3>
            <SkillSetComponent />
          </Row> */}
        </Container>
      </Jumbotron>
      {/* <SkillSetComponent /> */}
    </div>
  );
};

export default AboutPage;
