import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dog from "../../../../assets/dog.jpg";
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
            <h1>All the MMOs are right here!</h1>
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              dolore laudantium ipsa reprehenderit modi nisi, vitae distinctio
              repellendus voluptas autem.
            </h3>
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
