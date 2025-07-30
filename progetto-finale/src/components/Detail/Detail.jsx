import { useNavigate, useParams } from 'react-router';
import './Detail.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { MdBackspace } from 'react-icons/md';

export default function Detail({ children, heroes }) {
  const { id } = useParams();
  const hero = heroes ?  heroes.find(h => h.id.toString() === id.toString()) : [];
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      {children}
      <div className={"container mt-4"}>
        <div className={`card p-4 shadow text-center ${isDarkMode ? 'dark-card' : ''}`}>
          <h2>{hero.name}</h2>
          <p>Età: {hero.age}</p>
          <p>Genere: {hero.gnre}</p>
          <img src={hero.img_url} alt={hero.name} className="img-fluid mb-3" />
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            <MdBackspace /> Indietro
          </button>
        </div>
      </div>
    </>
  );
}
