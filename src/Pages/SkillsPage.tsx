import React from "react";
//Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";

import SkillSetComponent from "../Components/SkillSetComponent";
//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SkillsPage: React.FC<any> = ({
  title,
  bio,
  tech,
  research,
}) => {
  return (
    <div>
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true} className="justify-content-center">
          <Row className="justify-content-center text-center py-">
          <h3 className="display-3 projects-header font-weight-medium py-1">
              My Tech Skill Set
            </h3>
            <SkillSetComponent />
          </Row>
        </Container>
      </Jumbotron>
      {/* <SkillSetComponent /> */}
    </div>
  );
};

export default SkillsPage;
