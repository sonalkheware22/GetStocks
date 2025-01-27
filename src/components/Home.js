import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col>
          <h1
            className="text-center"
            style={{ color: "#2c3e50", fontWeight: "700" }}
          >
            Welcome to <span style={{ color: "#27ae60" }}>GetStocks</span>
          </h1>
          <p style={{ color: "#34495e", lineHeight: "1.6" }}>
            At <strong>GetStocks</strong>, we provide cutting-edge tools and
            insights to help you navigate the dynamic world of stock trading and
            investments. Whether you're a seasoned trader or just starting your
            investment journey, we empower you with the latest data, analysis,
            and resources to make informed decisions and achieve your financial
            goals.
          </p>
          <p style={{ color: "#34495e", lineHeight: "1.6" }}>
            Start exploring market trends, gain valuable insights, and access
            comprehensive stock data tailored to your needs. With GetStocks,
            your success is our priority.
          </p>
          <div className="text-center mt-4">
            <Button
              variant="success"
              href="/stocks"
              className="me-2 px-4 py-2"
              style={{ fontWeight: "600" }}
              aria-label="Explore Stocks"
            >
              Explore Stocks
            </Button>
            <Button
              variant="outline-success"
              href="/about"
              className="px-4 py-2"
              style={{
                fontWeight: "600",
                borderColor: "#27ae60",
              }}
              aria-label="Learn More About Us"
            >
              Learn More About Us
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
