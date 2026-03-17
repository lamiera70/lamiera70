import "./Header.css";

export default function Header({ message, saveList, loadList, clearList }) {
  return (

    <nav className="navbar bg-body-tertiary mb-4">

      <div className="container-fluid position-relative">

        <span className="navbar-brand">
          {message}
        </span>

        <div className="position-absolute end-0">

          <button
            className="btn btn-success btn-sm me-2"
            onClick={saveList}
          >
            Salva
          </button>

          <button
            className="btn btn-primary btn-sm me-2"
            onClick={loadList}
          >
            Apri
          </button>

          <button
            className="btn btn-danger btn-sm"
            onClick={clearList}
          >
            Reset
          </button>

        </div>

      </div>

    </nav>

  );
}