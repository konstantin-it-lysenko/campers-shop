import BookForm from 'components/BookForm';
import Rating from 'components/Rating';
import {
  ReviewerAvatar,
  ReviewerComment,
  ReviewerName,
  ReviewerWrap,
  ReviewsList,
  ReviewsWrap,
} from './Reviews.styled';

const Reviews = ({ card }) => {
  const { reviews } = card;

  return (
    <ReviewsWrap>
      <ReviewsList>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }) => {
          return (
            <li key={reviewer_name}>
              <ReviewerWrap>
                <ReviewerAvatar>{reviewer_name.slice(0, 1)}</ReviewerAvatar>
                <div>
                  <ReviewerName>{reviewer_name}</ReviewerName>
                  <Rating rating={reviewer_rating} />
                </div>
              </ReviewerWrap>
              <ReviewerComment>{comment}</ReviewerComment>
            </li>
          );
        })}
      </ReviewsList>
      <BookForm />
    </ReviewsWrap>
  );
};

export default Reviews;
