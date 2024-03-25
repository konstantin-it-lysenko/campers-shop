import FavoritesList from 'components/FavoritesList';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/catalog/catalogSelectors';
import NoFavorites from 'components/NoFavorites';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return favorites.length > 0 ? (
    <FavoritesList favorites={favorites} />
  ) : (
    <NoFavorites />
  );
};

export default Favorites;
