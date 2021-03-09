import { useState } from 'react';
import jsonData from '../stays.json';
import CardList from './CardList';
import './Main.css';

const Main = () => {
  const [data, setData] = useState(jsonData);
  return (
    <div className='main'>
      <CardList data={data} />
    </div>
  );
};

export default Main;
