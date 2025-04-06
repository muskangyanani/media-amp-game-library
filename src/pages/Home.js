import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GameCard from '../components/GameCard';
import Header from '../components/Header';
import { getGames } from '../services/api';

function Home() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getGames({ search }).then(res => setGames(res.data.results));
  }, [search]);

  return (
    <>
      <Header onSearch={setSearch} />
      <Container>
        <Row>
          {games.map(game => (
            <Col md={4} key={game.id}>
              <GameCard game={game} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
