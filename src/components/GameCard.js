import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";

function GameCard({ game }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);
  const isFavorite = favorites.some(g => g.id === game.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(game.id));
    } else {
      dispatch(addFavorite(game));
    }
  };

  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={game.background_image} />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <Card.Text>Rating: {game.rating}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button as={Link} to={`/game/${game.id}`} variant="primary">
            Details
          </Button>
          <Button
            variant={isFavorite ? 'danger' : 'outline-success'}
            onClick={toggleFavorite}
          >
            {isFavorite ? 'Remove' : 'Bookmark'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default GameCard;
