import { ReactComponent as PlusLogo } from '../assets/plus-solid.svg';

import Card from './Card';

import './CardList.css';

const CardList = ({ data }) => {
  return (
    <div>
      <div className='stays'>
        <h2>Stays In Finland</h2>
        <span className='span'>
          {data.length}
          <PlusLogo className='plus' /> Stays
        </span>
      </div>
      <div className='card-list'>
        {data.map((items) => {
          console.log(items);
          return <Card {...items} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
