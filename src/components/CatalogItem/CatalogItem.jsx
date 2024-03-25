import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/catalog/catalogSelectors';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/catalog/catalogSlice';
import Popup from 'components/Popup';
import sprite from '../../assets/icons/symbol-defs.svg';
import {
  Card,
  CardImage,
  CardInfoList,
  CardTitle,
  Description,
  FavBtn,
  GeneralInfoItem,
  GeneralInfoList,
  HeadWrap,
  LocWrap,
  Price,
  PriceFavWrap,
  Rating,
  RevLocWrap,
  RevWrap,
  ShowMoreBtn,
} from './CatalogItem.styled';

const CatalogItem = ({ card }) => {
  const {
    _id,
    gallery,
    name,
    price,
    reviews,
    location,
    description,
    rating,
    adults,
    transmission,
    engine,
    details: { kitchen, beds, airConditioner },
  } = card;

  const [isPopupClicked, setIsPopupClicked] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleOpenCard = () => {
    setIsPopupClicked(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseCard = () => {
    setIsPopupClicked(false);
    document.body.style.overflow = 'auto';
  };

  const isCardFavorite = useMemo(
    () => favorites.find(item => item._id === _id),
    [favorites, _id]
  );

  const handleAddToFavorite = () => {
    isCardFavorite
      ? dispatch(removeFromFavorites(_id))
      : dispatch(addToFavorites(card));
  };

  return (
    <Card>
      <CardImage src={gallery[0]} alt={name} />
      <div>
        <HeadWrap>
          <CardTitle>{name}</CardTitle>
          <PriceFavWrap>
            <Price>&#x20AC;{price.toFixed(2)}</Price>
            <FavBtn onClick={handleAddToFavorite}>
              <svg width={22} height={22}>
                <use xlinkHref={`${sprite}#icon-heart`}></use>
              </svg>
            </FavBtn>
          </PriceFavWrap>
        </HeadWrap>
        <CardInfoList>
          <RevLocWrap>
            <RevWrap>
              <svg width={18} height={18} stroke="#FFC531" fill="#FFC531">
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <Rating>
                {rating} ({reviews.length} Reviews)
              </Rating>
            </RevWrap>
            <LocWrap>
              <svg width={18} height={18} stroke="black">
                <use xlinkHref={`${sprite}#icon-map-pin`}></use>
              </svg>
              {location.split(',').reverse().join(', ')}
            </LocWrap>
          </RevLocWrap>
          <Description>{description}</Description>
          <li>
            <GeneralInfoList>
              <GeneralInfoItem>
                <svg width={18} height={18}>
                  <use xlinkHref={`${sprite}#icon-users`}></use>
                </svg>
                {adults} adults
              </GeneralInfoItem>
              <GeneralInfoItem>
                <svg width={18} height={18}>
                  <use xlinkHref={`${sprite}#icon-transmission`}></use>
                </svg>
                {transmission}
              </GeneralInfoItem>
              <GeneralInfoItem>
                <svg width={18} height={18}>
                  <use xlinkHref={`${sprite}#icon-petrol`}></use>
                </svg>
                {engine}
              </GeneralInfoItem>
              <GeneralInfoItem>
                <svg width={18} height={18} stroke="black">
                  <use xlinkHref={`${sprite}#icon-kitchen`}></use>
                </svg>
                {kitchen ? 'kitchen' : ''}
              </GeneralInfoItem>
              <GeneralInfoItem>
                <svg width={18} height={18} stroke="black">
                  <use xlinkHref={`${sprite}#icon-beds`}></use>
                </svg>
                {beds} beds
              </GeneralInfoItem>
              <GeneralInfoItem>
                <svg width={18} height={18}>
                  <use xlinkHref={`${sprite}#icon-ac`}></use>
                </svg>
                {airConditioner ? 'AC' : ''}
              </GeneralInfoItem>
            </GeneralInfoList>
          </li>
        </CardInfoList>
        <ShowMoreBtn onClick={handleOpenCard}>Show more</ShowMoreBtn>
      </div>

      {isPopupClicked && <Popup card={card} onClose={handleCloseCard} />}
    </Card>
  );
};

export default CatalogItem;
