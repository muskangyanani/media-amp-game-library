import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function GameCard({ game }) {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={game.background_image} />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <Card.Text>Rating: {game.rating}</Card.Text>
        <Button as={Link} to={`/game/${game.id}`} variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default GameCard;
