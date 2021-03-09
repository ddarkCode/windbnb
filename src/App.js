import { useState } from 'react';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import jsonData from './stays.json';

function App() {
  const [data, setData] = useState(jsonData);

  const [inputs, setInputs] = useState({
    location: '',
    addGuest: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const filteredData = data.filter((item) =>
    item.city.toLowerCase().includes(inputs.location.toLowerCase())
  );

  return (
    <>
      <Header inputs={inputs} onChange={handleChange} />
      <Main data={filteredData} />
      <Footer />
    </>
  );
}

export default App;
