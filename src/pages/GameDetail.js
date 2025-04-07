import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameDetails, getScreenshots } from '../services/api';
import { Container, Row, Col, Card } from 'react-bootstrap';

function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    getGameDetails(id).then(res => setGame(res.data));
    getScreenshots(id).then(res => setScreenshots(res.data.results));
  }, [id]);

  return (
    <Container className="mt-4">
      {game && (
        <>
          {/* Title & Main Image */}
          <h1 className="mb-3">{game.name}</h1>
          <img
            src={game.background_image}
            alt={game.name}
            className="img-fluid mb-4 rounded shadow"
          />

          {/* Description */}
          <div dangerouslySetInnerHTML={{ __html: game.description }} className="mb-4" />

          {/* Screenshots */}
          <h4 className="mt-4">Screenshots</h4>
          <Row className="mb-4">
            {screenshots.slice(0, 4).map((shot, idx) => (
              <Col md={3} key={idx} className="mb-3">
                <img
                  src={shot.image}
                  alt={`Screenshot ${idx + 1}`}
                  className="img-fluid rounded"
                />
              </Col>
            ))}
          </Row>

          {/* Ratings */}
          <h5>Ratings: ⭐ {game.rating} / 5</h5>
          <p>Total Ratings Count: {game.ratings_count}</p>

          {/* Pricing */}
          <h5 className="mt-3">Pricing</h5>
          {game.stores?.length > 0 ? (
            <ul>
              {game.stores.map(store => (
                <li key={store.id}>
                  <a
                    href={`https://${store.store.domain}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Buy from {store.store.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Pricing info not available.</p>
          )}

          {/* System Requirements */}
          {game.platforms?.length > 0 && (
            <>
              <h5 className="mt-3">System Requirements</h5>
              {game.platforms.map((p, idx) => (
                <Card key={idx} className="mb-3">
                  <Card.Body>
                    <Card.Title>{p.platform.name}</Card.Title>
                    {p.requirements?.minimum && (
                      <Card.Text>
                        <strong>Minimum:</strong> {p.requirements.minimum}
                      </Card.Text>
                    )}
                    {p.requirements?.recommended && (
                      <Card.Text>
                        <strong>Recommended:</strong> {p.requirements.recommended}
                      </Card.Text>
                    )}
                  </Card.Body>
                </Card>
              ))}
            </>
          )}
        </>
      )}
    </Container>
  );
}

export default GameDetail;
