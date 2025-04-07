import { useSelector } from 'react-redux';
import GameCard from '../components/GameCard';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import { useState } from 'react';

export default function LibraryPage() {
  const favorites = useSelector(state => state.favorites.items);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter favorites by search term
  const filteredFavorites = favorites.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header onSearch={setSearchTerm} /> {/* Pass search handler */}
      <Container className="mt-4">
        <h2 className="mb-4 text-center">🎮 Your Bookmarked Games</h2>

        {filteredFavorites.length === 0 ? (
          <p className="text-center">No matching bookmarked games found.</p>
        ) : (
          <Row className="g-4">
            {filteredFavorites.map((game) => (
              <Col key={game.id} xs={12} sm={6} md={4} lg={3}>
                <GameCard game={game} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}
