import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="purple"> INTRODUCE </span> MYSELF
  </h1>
  <p className="home-about-body">
    I've had the pleasure of working on various full stack projects using 
    <i>
      <b className="purple"> Java, React, Angular, and Node.js</b>
    </i>, 
    focusing on scalable solutions with microservices architecture.
    <br />
    <br />I also have experience as an 
    <i>
      <b className="purple"> AWS Developer</b>
    </i>, 
    managing cloud infrastructure and deploying secure applications.
    <br />
    <br />
    I enjoy building automation tools with 
    <b className="purple"> Python</b>, 
    particularly for 
    <b className="purple"> machine learning </b> projects, and have developed deep learning models to solve complex problems.
    <br />
    <br />
    My passion extends to working on 
    <i>
      <b className="purple"> data science </b>
    </i> projects, building data pipelines, and applying 
    <b className="purple"> advanced machine learning algorithms</b>.
    <br />
    <br />
    I always follow 
    <b className="purple"> Agile methodologies </b> 
    and apply 
    <b className="purple"> Test-Driven Development (TDD) </b> 
    to ensure quality delivery. With a blend of full stack and data science skills, 
    I deliver solutions that are both robust and intelligent.
  </p>
</Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AravindhRamasamy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aravindh-ramasamy/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aravindhashok17/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
