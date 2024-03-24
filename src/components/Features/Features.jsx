import {
  DetailsItem,
  DetailsList,
  DetailsTitle,
  FeaturesWrap,
  ServiceItem,
  ServiceList,
} from './Features.styled';
import sprite from '../../assets/icons/symbol-defs.svg';
import BookForm from 'components/BookForm';

const Features = ({ card }) => {
  const {
    adults,
    transmission,
    engine,
    details: { kitchen, beds, airConditioner, CD, radio, hob },
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = card;

  return (
    <FeaturesWrap>
      <div>
        <ServiceList>
          <ServiceItem>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-users`}></use>
            </svg>
            {adults} adults
          </ServiceItem>
          <ServiceItem>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-transmission`}></use>
            </svg>
            {transmission}
          </ServiceItem>
          <ServiceItem>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-ac`}></use>
            </svg>
            {airConditioner && 'AC'}
          </ServiceItem>
          <ServiceItem>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-petrol`}></use>
            </svg>
            {engine}
          </ServiceItem>
          <ServiceItem>
            <svg width={18} height={18} stroke="black">
              <use xlinkHref={`${sprite}#icon-kitchen`}></use>
            </svg>
            {kitchen ? 'kitchen' : ''}
          </ServiceItem>
          <ServiceItem>
            <svg width={18} height={18} stroke="black">
              <use xlinkHref={`${sprite}#icon-beds`}></use>
            </svg>
            {beds} beds
          </ServiceItem>
          <ServiceItem>
            <svg width={18} height={18} stroke="black">
              <use xlinkHref={`${sprite}#icon-conditioner`}></use>
            </svg>
            {airConditioner} air conditioner
          </ServiceItem>
          <ServiceItem>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-cd`}></use>
            </svg>
            {CD}
          </ServiceItem>
          <ServiceItem>
            <svg width={18} height={18} stroke="black">
              <use xlinkHref={`${sprite}#icon-radio`}></use>
            </svg>
            {radio && 'radio'}
          </ServiceItem>
          <ServiceItem>
            <svg width={18} height={18} stroke="black" fill="white">
              <use xlinkHref={`${sprite}#icon-hob`}></use>
            </svg>
            {hob} hob
          </ServiceItem>
        </ServiceList>

        <DetailsTitle>Vehicle details</DetailsTitle>
        <DetailsList>
          <DetailsItem>
            <p>Form</p>
            <p>{form}</p>
          </DetailsItem>
          <DetailsItem>
            <p>Length</p>
            <p>{length}</p>
          </DetailsItem>
          <DetailsItem>
            <p>Width</p>
            <p>{width}</p>
          </DetailsItem>
          <DetailsItem>
            <p>Height</p>
            <p>{height}</p>
          </DetailsItem>
          <DetailsItem>
            <p>Tank</p>
            <p>{tank}</p>
          </DetailsItem>
          <DetailsItem>
            <p>Consumption</p>
            <p>{consumption}</p>
          </DetailsItem>
        </DetailsList>
      </div>
      <BookForm />
    </FeaturesWrap>
  );
};

export default Features;
