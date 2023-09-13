import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MMOItem from "./MMOItem";
import "./MMO.css";
import axios from "axios";

const MMO = () => {
  const [mmos, setMmos] = useState([]);

  useEffect(() => {
    getMMOs();
    return () => {};
  }, []);

  async function getMMOs() {
    const options = {
      headers: {
        "X-RapidAPI-Key": "b9f377de43msh10628aacb321df0p1be870jsn29f9c84e4616",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };
    const { data } = await axios.get(
      "https://mmo-games.p.rapidapi.com/games",
      options
    );
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
