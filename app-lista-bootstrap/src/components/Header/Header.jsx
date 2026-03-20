import "./Header.css";

export default function Header({ listName, saveList, clearList, setShowModal, setShowSuggestionsModal }) {
  return (

    <nav className="navbar bg-body-tertiary mb-4">

        <button
          className="btn btn-dark btn-sm me-2"
          onClick={() => setShowSuggestionsModal(true)}
        >
          Suggerimenti
        </button>

        

      <div className="container-fluid position-relative">


        <span className="navbar-brand">
          {listName || "Lista nuova"}
        </span>

        <div className="position-absolute end-0">

          {listName === "" && (
            <button
              className="btn btn-success btn-sm me-2"
              onClick={saveList}
            >
              Salva
            </button>
          )}

          <button
            className="btn btn-primary btn-sm me-2"
            onClick={() => setShowModal(true)}
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