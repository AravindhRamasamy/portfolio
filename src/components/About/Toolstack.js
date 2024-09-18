import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
  SiLinux,
  SiIntellijidea,
  SiPowerbi,
  SiTableau,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  const renderTooltip = (text) => (
    <Tooltip id="button-tooltip">
      {text}
    </Tooltip>
  );
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('macOS')}>
    <span><SiMacos /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Linux')}>
    <span><SiLinux /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Windows')}>
    <span><SiWindows /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Visual Studio Code')}>
    <span><SiVisualstudiocode /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Power BI')}>
    <span><SiPowerbi /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Tableau')}>
    <span><SiTableau /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Postman')}>
    <span><SiPostman /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Slack')}>
    <span><SiSlack /></span>
  </OverlayTrigger>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('IntelliJ IDEA')}>
    <span><SiIntellijidea /></span>
  </OverlayTrigger>
</Col>
    </Row>
  );
}

export default Toolstack;
