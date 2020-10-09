import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";

//Components
import { NavbarComponent } from "./Components/index";

//Pages
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import SkillsPage from "./Pages/SkillsPage";
export class App extends Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        // {title:'Projects',path:'/projects'},
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Hello, I'm Swadhin Routray!",
        subTitle:
          "I'm currently a third year B.Tech student, pursuing a degree in Computers and Communications from Manipal Institute of Technology!",
        text: "Check out my projects!",
      },
      about: {
        title: "About Me",
        techInterests: [
          "I have worked with core technologies including C++, Java, Python, Golang and JavaScript. ",
          "Worked on comprehensive server-side projects as well as orchestrated them in containers with Docker. ",
          "Worked with cloud service providers such as AWS and IBM Cloud whilst using various services such as AWS SES, DynamoDB, CloudantDB and EC2 instances. ",
          "My tech interests lie in cloud computation and networking along with information security. ",
          "Currently venturing into serverless programming with AWS Lambda and IBM Cloud functions. ",
          
        ],
        researchInterests:"My research interests lie in the fields of Cloud Networking, Information Security and Operating Systems!",
        bio:
          "Software Developer, Technophile and an overenthusiastic sports fan. I like to work on creative and exciting projects which help me learn more about existing tech and help me venture into newer ones too!",
      },
      contact: {
        title: "Get in touch with me, I'd love to talk to you!",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavbarComponent />
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
                bio={this.state.home.bio}
              />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => (
              <AboutPage
                title={this.state.about.title}
                bio={this.state.about.bio}
                tech={this.state.about.techInterests}
                research={this.state.about.researchInterests}
              />
            )}
          />
          <Route
            path="/contact"
            exact
            render={() => <ContactPage title={this.state.contact.title} />}
          />
          <Route
            path="/skills"
            exact
            render={() => <SkillsPage  />}
          />
          
        </Container>
      </Router>
    );
  }
}
export default App;
