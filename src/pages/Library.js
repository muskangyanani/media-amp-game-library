import { useSelector, useDispatch } from 'react-redux';
import GameCard from '../components/GameCard';
import { Container } from 'react-bootstrap';

export default function LibraryPage() {
  const favorites = useSelector(state => state.favorites.items);

  return (
    <Container>
      <h2>Your Bookmarked Games</h2>
      {favorites.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </Container>
  );
}
