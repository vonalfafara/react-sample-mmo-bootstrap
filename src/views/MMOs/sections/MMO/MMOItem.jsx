import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MMOItem = ({ game }) => {
  return (
    <Card>
      <Card.Img variant="top" src={game.thumbnail} />
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text>{game.short_description}</Card.Text>
        <Button as={Link} to={`/game/${game.id}`} variant="primary">
          Visit Page
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MMOItem;
