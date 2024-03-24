import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCatalog } from '../../redux/catalog/catalogOperations';
import { selectAllCatalog } from '../../redux/catalog/catalogSelectors';
import CatalogItem from 'components/CatalogItem';
import { CatalogList } from './CamperList.styled';

const CamperList = () => {
  const dispatch = useDispatch();
  const allCatalog = useSelector(selectAllCatalog);

  useEffect(() => {
    dispatch(getAllCatalog());
  }, [dispatch]);

  return (
    <CatalogList>
      {allCatalog.map(card => {
        return <CatalogItem key={card._id} id={card._id} card={card} />;
      })}
    </CatalogList>
  );
};

export default CamperList;
