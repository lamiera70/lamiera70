export default function Dropdown({handleResetItems}) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Menu
      </button>

      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" type="button">
            Apri
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            Salva con nome
          </button>
        </li>
        <li>
          <button 
            className="dropdown-item"
            type="button"
            onClick={handleResetItems}
          >
            Reset Lista
          </button>
        </li>
      </ul>
    </div>
  );
}

