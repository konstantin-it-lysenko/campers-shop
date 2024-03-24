import { useEffect, useState } from 'react';
import sprite from '../../assets/icons/symbol-defs.svg';
import {
  AdditionBtn,
  AdditionInfoList,
  Backdrop,
  CamperImg,
  CamperImgList,
  CamperTitle,
  Description,
  LocWrap,
  Modal,
  ModalScrollWrap,
  NameCrossWrap,
  Price,
  Rating,
  RevLocWrap,
  RevWrap,
} from './Popup.styled';
import Reviews from 'components/Reviews';
import Features from 'components/Features';

const Popup = ({ card, onClose }) => {
  const { gallery, name, price, reviews, location, description, rating } = card;

  const [isActiveTab, setIsActiveTab] = useState('');

  const handleOnEscapeClose = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleFeaturesClick = () => {
    setIsActiveTab('features');
  };

  const handleReviewsClick = () => {
    setIsActiveTab('reviews');
  };

  const handleOnBackdropClick = e => {
    onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleOnEscapeClose);
    return () => {
      document.removeEventListener('keydown', handleOnEscapeClose);
    };
  });

  return (
    <Backdrop onClick={handleOnBackdropClick}>
      <Modal onClick={event => event.stopPropagation()}>
        <NameCrossWrap>
          <CamperTitle>{name}</CamperTitle>
          <span>
            <button onClick={onClose}>
              <svg width={28} height={28}>
                <use xlinkHref={`${sprite}#icon-cross`}></use>
              </svg>
            </button>
          </span>
        </NameCrossWrap>
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
        <Price>&#x20AC;{price}</Price>

        <ModalScrollWrap>
          <CamperImgList>
            <li>
              <CamperImg src={gallery[0]} alt={name} />
            </li>
            <li>
              <CamperImg src={gallery[1]} alt={name} />
            </li>
            <li>
              <CamperImg src={gallery[2]} alt={name} />
            </li>
          </CamperImgList>

          <Description>{description}</Description>

          <AdditionInfoList>
            <li>
              <AdditionBtn
                onClick={handleFeaturesClick}
                active={isActiveTab === 'features'}
              >
                Features
              </AdditionBtn>
            </li>
            <li>
              <AdditionBtn
                onClick={handleReviewsClick}
                active={isActiveTab === 'reviews'}
              >
                Reviews
              </AdditionBtn>
            </li>
          </AdditionInfoList>

          {isActiveTab === 'features' ? (
            <Features card={card} />
          ) : (
            <Reviews card={card} />
          )}
        </ModalScrollWrap>
      </Modal>
    </Backdrop>
  );
};

export default Popup;
