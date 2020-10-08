import React, { Component } from "react";

//Import logos
import {
  AWS,
  Cpp,
  CSS,
  DO,
  Docker,
  SQL,
  Go,
  Html,
  Java,
  Node,
  Mongo,
  JS,
  TS,
  ReactLogo,
  Python,
} from "../assets/skills/skills";
import SkillCard from "./SkillCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export class SkillSetComponent extends Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [
        {
            id:0,
          title: "C++",
          imgSrc: Cpp,
          value:60,
          pathColor: "turquoise",
        },
        {
            id:1,
          title: "Java",
          imgSrc: Java,
          value:50,
          pathColor: "Peru",

        },
        {
            id:2,
          title: "Python",
          imgSrc: Python,
          value:60,
          pathColor: "gold",

        },
        {
            id:3,
          title: "JavaScript",
          imgSrc: JS,
          value:75, 
          pathColor: "Yellow",

        },
        {
            id:4,
          title: "TypeScript",
          imgSrc: TS,
          value:60,
          pathColor: "DodgerBlue",

        },
        {
            id:5,
          title: "Golang",
          imgSrc: Go,
          value:70,
          pathColor: "MediumAquaMarine",

        },
        {
            id:6,
          title: "HTML5",
          imgSrc: Html,
          value:80,
          pathColor: "orange",

        },
        {
            id:7,
          title: "CSS3",
          imgSrc: CSS,
          value:50,
          pathColor: "skyblue",

        },
        {
            id:8,
          title: "React",
          imgSrc: ReactLogo,
          value:60,
          pathColor: "deepskyblue",

        },
        {
            id:9,
          title: "Node.js",
          imgSrc: Node,
          value:80,
          pathColor: "GreenYellow",

        },
        {
            id:10,
          title: "SQL",
          imgSrc: SQL,
          value:65,
          pathColor: "gold",

        },
        {
            id:11,
          title: "MongoDB",
          imgSrc: Mongo,
          value:65,
          pathColor: "lawngreen",

        },
        {
            id:12,
          title: "Docker",
          imgSrc: Docker,
          value:70,
          pathColor: "aquamarine",

        },
        {
            id:13,
          title: "AWS",
          imgSrc: AWS,
          value:50,
          pathColor: "black",

        },
        {
            id:14,
          title: "DO",
          imgSrc: DO,
          value:70,
          pathColor: "RoyalBlue",

        },
      ],
    };
  }
  makeSkillItems = (items: any) => {
    // console.log(items)
    return items.map((item: any) => {
      console.log(item);
      return (<SkillCard item={item} />);
    });
  };
  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-center">
          {this.makeSkillItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default SkillSetComponent;
