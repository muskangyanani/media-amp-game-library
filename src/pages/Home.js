import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import GameCard from '../components/GameCard';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { getGames } from '../services/api';

function Home() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);

  useEffect(() => {
    const queryParams = {
      search,
      page,
      ...filters
    };
    getGames(queryParams).then(res => {
      setGames(res.data.results);
      setHasNext(!!res.data.next);
    });
  }, [search, page, filters]);

  const handlePrev = () => {
    if (page > 1) setPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (hasNext) setPage(prev => prev + 1);
  };

  return (
    <>
      <Header onSearch={setSearch} />
      <Container fluid className="mt-4">
        <Row>
          {/* Sidebar */}
          <Col md={3}>
            <Sidebar filters={filters} setFilters={setFilters} />
          </Col>

          {/* Main content */}
          <Col md={9}>
            <Row>
              {games.map(game => (
                <Col md={4} key={game.id}>
                  <GameCard game={game} />
                </Col>
              ))}
            </Row>

            {/* Pagination */}
            <div className="d-flex justify-content-center my-4">
              <Button variant="secondary" onClick={handlePrev} disabled={page === 1}>
                Previous
              </Button>
              <span className="mx-3 align-self-center">Page {page}</span>
              <Button variant="secondary" onClick={handleNext} disabled={!hasNext}>
                Next
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
