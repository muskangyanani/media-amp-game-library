import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameDetails, getScreenshots } from '../services/api';
import { Container } from 'react-bootstrap';

function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    getGameDetails(id).then(res => setGame(res.data));
  }, [id]);

  return (
    <Container>
      {game && (
        <>
          <h1>{game.name}</h1>
          <img src={game.background_image} alt={game.name} width="100%" />
          <p dangerouslySetInnerHTML={{ __html: game.description }} />
        </>
      )}
    </Container>
  );
}

export default GameDetail;
