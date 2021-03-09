import './Card.css';
import { ReactComponent as StarLogo } from '../assets/grade-24px.svg';

const Card = ({ photo, superHost, type, bed, rating, title }) => {
  return (
    <div className='card'>
      <img src={photo} alt='' />

      <div className='info'>
        {superHost ? <span className='super-host'>super host </span> : ''}
        {
          <span>
            {type} {bed ? bed : ''}{' '}
          </span>
        }
        <span className='rating'>
          {' '}
          <StarLogo className='star' />
          {rating}
        </span>
      </div>
      <h6>{title}</h6>
    </div>
  );
};

export default Card;
