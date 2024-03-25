import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCatalog, getTotal } from '../../redux/catalog/catalogOperations';
import {
  selectAllCatalog,
  selectTotal,
} from '../../redux/catalog/catalogSelectors';
import CatalogItem from 'components/CatalogItem';
import { CatalogList, CatalogWrap, LoadMoreBtn } from './CamperList.styled';
import { limit } from 'constants/vars';

const CamperList = () => {
  const dispatch = useDispatch();
  const allCatalog = useSelector(selectAllCatalog);
  const total = useSelector(selectTotal);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getTotal);
    dispatch(getAllCatalog(page));
  }, [dispatch, page]);

  const handleLoadMoreBtn = () => {
    if (page * limit >= total) {
      setPage(1);
    }

    setPage(prev => prev + 1);
  };

  return (
    <CatalogWrap>
      <CatalogList>
        {allCatalog.map(card => {
          return <CatalogItem key={card._id} id={card._id} card={card} />;
        })}
      </CatalogList>
      <LoadMoreBtn onClick={handleLoadMoreBtn}>Load more</LoadMoreBtn>
    </CatalogWrap>
  );
};

export default CamperList;
