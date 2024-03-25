import CatalogItem from 'components/CatalogItem';
import { FavoriteList } from './FavoritesList.styled';

const FavoritesList = ({ favorites }) => {
  return (
    <FavoriteList>
      {favorites.map(card => {
        return <CatalogItem key={card._id} id={card._id} card={card} />;
      })}
    </FavoriteList>
  );
};

export default FavoritesList;
