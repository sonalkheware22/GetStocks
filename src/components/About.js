import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-5">
      <h2
        className="text-center mb-4"
        style={{ color: "#2c3e50", fontWeight: "700" }}
      >
        About Us
      </h2>
      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title style={{ color: "#27ae60", fontWeight: "600" }}>
                Our Mission
              </Card.Title>
              <Card.Text style={{ color: "#34495e", lineHeight: "1.6" }}>
                At GetStocks, our mission is to empower individuals and
                businesses with accurate and reliable stock market data. We aim
                to simplify investing by providing user-friendly tools and
                resources.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title style={{ color: "#27ae60", fontWeight: "600" }}>
                Why Choose Us?
              </Card.Title>
              <Card.Text style={{ color: "#34495e", lineHeight: "1.6" }}>
                With real-time stock data, comprehensive analytics, and a
                passion for finance, we help you make better investment
                decisions. Whether you are a seasoned investor or just starting,
                GetStocks is here for you.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
