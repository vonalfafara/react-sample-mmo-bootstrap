import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import dog from "../../../assets/dog.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex justify-content-center align-items-center"
    >
      <Container>
        <Row>
          <Col className="align-self-center">
            <h1>Are you ready for a challenge?</h1>
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              dolore laudantium ipsa reprehenderit modi nisi, vitae distinctio
              repellendus voluptas autem.
            </h3>
            <div className="d-flex gap-2 mt-4">
              <Button>Get Started</Button>
              <Button variant="outline-light">Learn More</Button>
            </div>
          </Col>
          <Col>
            <img src={dog} className="d-block mx-auto" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
