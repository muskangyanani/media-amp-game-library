import { useSelector, useDispatch } from 'react-redux';
import GameCard from '../components/GameCard';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import { getGames } from '../services/api';
import { useEffect, useState } from 'react';

export default function LibraryPage() {
  const favorites = useSelector(state => state.favorites.items);

    const [games, setGames] = useState([]);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
      getGames({ search }).then(res => setGames(res.data.results));
    }, [search]);

  return (
    <Container>
      <Header onSearch={setSearch} />
      <h2>Your Bookmarked Games</h2>
      {favorites.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </Container>
  );
}
