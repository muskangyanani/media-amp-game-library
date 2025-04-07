import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import GameCard from '../components/GameCard';
import Header from '../components/Header';
import { getGames } from '../services/api';

function Home() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);

  useEffect(() => {
    getGames({ search, page }).then(res => {
      setGames(res.data.results);
      setHasNext(!!res.data.next); // enables/disables Next button
    });
  }, [search, page]);

  const handlePrev = () => {
    if (page > 1) setPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (hasNext) setPage(prev => prev + 1);
  };

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

        {/* Pagination Buttons */}
        <div className="d-flex justify-content-center my-4">
          <Button variant="secondary" onClick={handlePrev} disabled={page === 1}>
            Previous
          </Button>
          <span className="mx-3 align-self-center">Page {page}</span>
          <Button variant="secondary" onClick={handleNext} disabled={!hasNext}>
            Next
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Home;
