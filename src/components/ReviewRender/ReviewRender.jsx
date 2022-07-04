import s from './ReviewRender.module.css';
import PropTypes from 'prop-types';


export default function ReviewRender({ reviews }) {
  return reviews.length > 0 ? (
    <>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <span className={s.text}>We don't have any review for this movie</span>
  );
}

ReviewRender.propTypes = {
  reviews: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          author: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired
        })
      )
}
