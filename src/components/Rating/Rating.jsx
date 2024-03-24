import { RatingContainer, Star } from './Rating.styled';

const Rating = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.round(rating);

  const stars = [];
  for (let i = 0; i < maxStars; i++) {
    stars.push(
      <Star key={i} filled={i < filledStars ? 'true' : 'false'}>
        {i < filledStars ? '★' : '☆'}
      </Star>
    );
  }

  return <RatingContainer>{stars}</RatingContainer>;
};

export default Rating;
