import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eis from "../../Assets/Projects/eisPolicy.jpeg";
import emotion from "../../Assets/Projects/emotion.png";
import creditCard from "../../Assets/Projects/creditCard.jpg";
import dataAnalysis from "../../Assets/Projects/dataAnalysis.png";
import parcel from "../../Assets/Projects/parcel.png";
import docWeb from "../../Assets/Projects/design.jpeg";
import idsAI from "../../Assets/Projects/idsAI.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={idsAI}
              isBlog={false}
              title="AI-Based Intrusion Detection System (IDS)"
              description="Developed a machine learning-based Intrusion Detection System (IDS) using Python and tools like Scikit-learn and TensorFlow. The system detects and responds to real-time cyber threats targeting critical infrastructures. It uses algorithms such as Decision Trees, Random Forests, and CNNs to classify and predict potential threats based on network traffic. The project included preprocessing datasets, anomaly detection, and data visualization to enhance system accuracy and reliability."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataAnalysis}
              isBlog={false}
              title="Generic Data Analysis Tool"
              description="Project focuses on creating Python scripts that summarize datasets by generating descriptive statistics and visualizations. The tool supports tasks such as data cleaning, producing word clouds, and visualizing numerical and categorical data. I used Jupyter Notebook for running and visualizing these scripts, making it easy to process human communication datasets and identify interesting trends for further analysis."
              ghLink="https://github.com/AravindhRamasamy/GenericData"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docWeb}
              isBlog={false}
              title="Document and Author Management Web Application"
              description="This is a web application that enables document and author management. It includes features such as CRUD operations for authors and documents, JWT-based authentication, and RabbitMQ integration for event-driven messaging. The system is containerized using Docker, with support for PostgreSQL and RabbitMQ. It also provides Swagger-based API documentation for easy interaction."
              ghLink="https://github.com/AravindhRamasamy/Krieger"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creditCard}
              isBlog={false}
              title="Credit Card Transaction Analysis"
              description="Project focuses on predictive modeling for improving online credit card transaction success rates in the DACH region. It covers the entire machine learning pipeline, including data preprocessing, feature engineering, model development, and evaluation. Using Python, the project demonstrates best practices in model engineering to enhance security and reliability in financial transactions."
              ghLink="https://github.com/AravindhRamasamy/ModelEngineering"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eis}
              isBlog={false}
              title="EIS Policy Product Development"
              description="Led the design, development, and maintenance of back-end services using Java and Spring Boot, delivering scalable solutions for AIG's insurance and banking sectors. I spearheaded Angular-based front-end development, integrating it seamlessly with the back end for an improved user experience. Implemented Apache Kafka for real-time data processing, boosting data reliability. I enhanced system security through best practices and code reviews, working in an agile environment, collaborating with cross-functional teams, and contributing to regular sprint planning and retrospectives."
              demoLink="https://www.aig.com/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parcel}
              isBlog={false}
              title="LAVA project"
              description="The LAVA LAC project for land administration involved developing map services for cadastre parcels using technologies such as GeoServer, Angular, Spring Boot, and PostgreSQL. The project focused on managing spatial data, converting planes, and improving overall map service efficiency for land management. Additionally, I researched the potential of blockchain integration to enhance security. I worked closely with the client to improve the mapping solutions, contributing to more reliable and secure land administration systems."
              demoLink="https://www.landadmin.com/Solutions"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
