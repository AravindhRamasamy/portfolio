import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAws,
  DiJenkins,
  DiDocker,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiOracle,
  SiSpringboot,
  SiSpringsecurity,
  SiRabbitmq,
  SiTypescript,
  SiApachekafka,
  SiApachemaven,
  SiJunit5,
} from "react-icons/si";
import { TbBrandAngular, TbBrandGolang, TbSql } from "react-icons/tb";

function Techstack() {
  const renderTooltip = (text) => (
    <Tooltip id="button-tooltip">
      {text}
    </Tooltip>
  );
  
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Java')}>
    <span><DiJava /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Spring Boot')}>
    <span><SiSpringboot /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Spring Security')}>
    <span><SiSpringsecurity /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('RabbitMQ')}>
    <span><SiRabbitmq /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Apache Kafka')}>
    <span><SiApachekafka /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Apache Maven')}>
    <span><SiApachemaven /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('JUnit5')}>
    <span><SiJunit5 /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Jenkins')}>
    <span><DiJenkins /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Python')}>
    <span><DiPython /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('JavaScript')}>
    <span><DiJavascript1 /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('TypeScript')}>
    <span><SiTypescript /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Angular')}>
    <span><TbBrandAngular /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Node.js')}>
    <span><DiNodejs /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('React')}>
    <span><DiReact /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('AWS')}>
    <span><DiAws /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Docker')}>
    <span><DiDocker /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Git')}>
    <span><DiGit /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Oracle')}>
    <span><SiOracle /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('MongoDB')}>
    <span><DiMongodb /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('PostgreSQL')}>
    <span><SiPostgresql /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('SQL')}>
    <span><TbSql /></span>
  </OverlayTrigger>
</Col>
    </Row>
  );
}

export default Techstack;
