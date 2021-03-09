import { useState } from 'react';
import { ReactComponent as WindLogo } from '../assets/logo.svg';
import { ReactComponent as SearchLogo } from '../assets/search-24px.svg';
import './Headers.css';

const Header = () => {
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

  return (
    <nav>
      <div className='navigation'>
        <a href='/'>
          <WindLogo />
        </a>
        <form className='header-form'>
          <input
            className='search-input'
            type='search'
            placeholder='Helsinki, Finland'
            aria-label='Search'
            name='location'
            value={inputs.location}
            onChange={handleChange}
          />

          <input
            className='search-input '
            type='search'
            placeholder='Add guests'
            aria-label='Search'
            name='addGuest'
            value={inputs.addGuest}
            onChange={handleChange}
          />
          <button type='submit'>
            <SearchLogo />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
