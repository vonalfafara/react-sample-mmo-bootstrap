import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MMOItem from "./MMOItem";
import "./MMO.css";
import http from "../../../../lib/http";

const MMO = () => {
  const [mmos, setMmos] = useState([]);

  useEffect(() => {
    getMMOs();
    return () => {};
  }, []);

  async function getMMOs() {
    const { data } = await http.get("/games");
    setMmos(data);
  }

  return (
    <section id="mmos" className="mt-4">
      <Container>
        <h3 className="text-center">MMO List</h3>
        <Row className="g-4">
          {mmos.map((mmo, index) => {
            return (
              <Col key={index} sm={6} md={3}>
                <MMOItem game={mmo} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default MMO;
