import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieReviews } from '../../Api/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    FetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, we don't have any reviews for this movie</p>
      )}
    </div>
  );
};
export default Reviews;
