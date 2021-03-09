import CardList from './CardList';
import './Main.css';

const Main = ({ data }) => {
  return (
    <div className='main'>
      <CardList data={data} />
    </div>
  );
};

export default Main;
