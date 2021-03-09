import { ReactComponent as WindLogo } from '../assets/logo.svg';
import { ReactComponent as SearchLogo } from '../assets/search-24px.svg';
import './Headers.css';

const Header = ({ inputs, onChange }) => {
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
            placeholder='Search City'
            aria-label='Search'
            name='location'
            value={inputs.location}
            onChange={onChange}
          />

          <input
            className='search-input '
            type='search'
            placeholder='Add guests'
            aria-label='Search'
            name='addGuest'
            value={inputs.addGuest}
            onChange={onChange}
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
