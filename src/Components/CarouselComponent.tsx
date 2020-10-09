import React, { Component } from "react";

//Assets
import Hawkeye from "../assets/Hawkeye.svg";
import FireBase from "../assets/Firebase.svg";
import Covid from "../assets/COVID.svg";
import Cloud from "../assets/Cloud.svg";
import Mailer from "../assets/Email.svg";
//Components
import Card from "./Card";

//Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export class CarouselComponent extends Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "HawkEye",
          subTitle:
            "The Signature Online Cryptic Scanvenger Hunt of Prometheus",
          imgSrc: Hawkeye,
          link: "https://hawkeye.iecsemanipal.com",
          selected: false,
        },
        {
          id: 1,
          title: "Firebase Server",
          subTitle:
            "A forum based web-api using Node.js, Firebase and Cloud Firestore",
          imgSrc: FireBase,
          link: "https://github.com/swadhinroutray/firebase-server",
          selected: false,
        },
        {
          id: 2,
          title: "COVID-19 Tracker",
          subTitle: "A website for real-time COVID-19 tracking",
          imgSrc: Covid,
          link: "https://www.covid-19-tracker.in/",
          selected: false,
        },
        {
          id: 3,
          title: "Multi-Cloud API",
          subTitle: "A web-api to implement AWS Lambda and IBM Cloud Functions",
          imgSrc: Cloud,
          link: "https://github.com/swadhinroutray/multi-cloud",
          selected: false,
        },
        {
          id: 4,
          title: "Mailer-v2",
          subTitle:
            "An automated Mailing API using AWS SES, Docker and Node+TypeScript!",
          imgSrc: Mailer,
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id: number, card: any) => {
    let items: any = [...this.state.items];
    console.log(items);
    items[id].selected = items[id].selected ? false : true;

    items.forEach((item: { id: number; selected: boolean }) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items: any) => {
    // console.log(items)
    return items.map((item: any, key:any) => {
      console.log(item);
      return (
        <Card
          item={item}
          click={(e: any) => this.handleCardClick(item.id, e)}
        />
      );
    });
  };

 
  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around p-0">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default CarouselComponent;
