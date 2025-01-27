import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import CardPagination from "./CardPagination";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.freeapi.app/api/v1/public/stocks?limit=15";
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const startI = (currentPage - 1) * itemsPerPage;
  const endI = startI + itemsPerPage;
  const currentItems = data.slice(startI, endI);

  if (loading) {
    return (
      <Spinner
        animation="border"
        variant="primary"
        className="d-block mx-auto mt-5"
      />
    );
  }
  if (error) {
    return (
      <Alert variant="danger" className="mt-5 text-center">
        Error: {error}
      </Alert>
    );
  }

  return (
    <Container className="mt-4">
      <h3
        className="text-center mb-4"
        style={{ color: "#2c3e50", fontWeight: "600" }}
      >
        Stocks Data
      </h3>
      <Row className="g-4">
        {currentItems.map((item, i) => (
          <Col xs={12} md={6} lg={4} key={i}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title style={{ color: "#27ae60", fontWeight: "600" }}>
                  {item.Name} ({item.Symbol})
                </Card.Title>
                <Card.Text style={{ color: "#34495e", lineHeight: "1.6" }}>
                  <strong>Listing Date:</strong> {item.ListingDate}
                  <br />
                  <strong>ISIN:</strong> {item.ISIN}
                  <br />
                  <strong>Market Cap:</strong> {item.MarketCap}
                  <br />
                  <strong>Current Price:</strong> {item.CurrentPrice}
                  <br />
                  <strong>High/Low:</strong> {item.HighLow}
                  <br />
                  <strong>Stock PE:</strong> {item.StockPE}
                  <br />
                  <strong>Book Value:</strong> {item.BookValue}
                  <br />
                  <strong>Dividend Yield:</strong> {item.DividendYield}
                  <br />
                  <strong>ROCE:</strong> {item.ROCE}
                  <br />
                  <strong>ROE:</strong> {item.ROE}
                  <br />
                  <strong>Face Value:</strong> {item.FaceValue}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <CardPagination
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};

export default FetchData;
