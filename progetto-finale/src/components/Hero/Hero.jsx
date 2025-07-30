import { useContext } from 'react';
import './Hero.css';
import { FaRegStar, FaStar } from "react-icons/fa6";
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router';

export default function Hero({ hero, toggleFavorite }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="col-12 col-md-6 mb-4">
      <div className={`card hero-card shadow-sm p-3 d-flex flex-row justify-content-between align-items-center ${isDarkMode ? 'bg-dark text-white' : 'bg-light'}`}>
        
        <div>
          <h3 className="mb-0">
            <Link to={`/detail/${hero.id}`} className="text-decoration-none text-primary">
              {hero.name}
            </Link>
          </h3>
        </div>

        <div
          className="star-icon"
          onClick={toggleFavorite}
          role="button"
          style={{ cursor: 'pointer', fontSize: '1.5rem' }}
        >
          {hero.isFavorite ? <FaStar color="gold" /> : <FaRegStar />}
        </div>

      </div>
    </div>
  );
}
