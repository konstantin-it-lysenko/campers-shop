import { BackLink, NoContent } from './NoFavorites.styled';

const NoFavorites = () => {
  return (
    <div>
      <NoContent>
        It appears that you don't have favorite vans. Please return to catalog
        page.
      </NoContent>
      <BackLink to="/catalog">Back to Catalog</BackLink>
    </div>
  );
};

export default NoFavorites;
