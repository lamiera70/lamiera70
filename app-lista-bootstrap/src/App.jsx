import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem/AddItem";
import ItemList from "./components/ItemList/ItemList";
import Header from "./components/Header/Header";

export default function App() {
  const [items, setItems] = useState([]);
  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [listName, setListName] = useState("");

  const suggestions = [
    "pollo",
    "pomodori",
    "porri",
    "pane",
    "pasta",
    "tavor 1mg",
    "tachipirina 500",
    "tachipirina 1000",
    "collirio ozodrop",
    "collirio alocross gocce",
    "patatine",
    "limoni",
    "candeggina",
    "aceto domestico",
    "detersivo nelsen verde",
    "detersivo dash classico",
    "prosciutto raspini",
    "pizza",
    "prosciutto",
    "capocollo",
  ];

  function addItem(text) {
    setItems([...items, { id: crypto.randomUUID(), testo: text, done: false }]);
  }

  function handleToggleDone(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  }

  function handleClickEditId(item) {
    setEditingId(item.id);
    setEditText(item.testo);
  }

  function handleClickCancel() {
    setEditingId(null);
    setEditText("");
  }

  function handleClickDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleClickSave(id, editText) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, testo: editText } : item,
      ),
    );
    setEditingId(null);
  }

  function loadList(name) {
    const data = localStorage.getItem(name);

    if (data) {
      setItems(JSON.parse(data));
      setListName(name);
      setShowModal(false);
    }
  }

  function saveList() {
    const keys = Object.keys(localStorage);

    const name = prompt(
      "Salva lista\n\nListe esistenti:\n" + keys.join("\n"),
    )?.trim();

    if (!name) return;

    // controllo duplicato
    if (localStorage.getItem(name)) {
      alert("⚠️ Esiste già una lista con questo nome!");
      return;
    }

    localStorage.setItem(name, JSON.stringify(items));
    setListName(name);

    // apre la modal dopo salvataggio
    // alert("✅ Lista salvata!");
  }

  function deleteList(name) {
    if (confirm("Vuoi eliminare questa lista?")) {
      localStorage.removeItem(name);
      setShowModal(false);
      setTimeout(() => setShowModal(true), 0);
    }
  }

  function clearList() {
    if (confirm("Vuoi cancellare la lista?")) {
      setItems([]);
      setListName("");
    }
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card p-4 shadow-sm">
              <Header
                listName={listName}
                saveList={saveList}
                clearList={clearList}
                setShowModal={setShowModal}
              />

              <AddItem addItem={addItem} suggestions={suggestions} />

              <ItemList
                items={items}
                handleClickEditId={handleClickEditId}
                handleToggleDone={handleToggleDone}
                handleClickCancel={handleClickCancel}
                handleClickDelete={handleClickDelete}
                handleClickSave={handleClickSave}
                editText={editText}
                editingId={editingId}
                setEditText={setEditText}
                suggestions={suggestions}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-backdrop-custom">
          <div className="modal-content-custom">
            <h5 className="mb-3">Seleziona lista</h5>

            {Object.keys(localStorage).length === 0 ? (
              <p>Nessuna lista salvata</p>
            ) : (
              Object.keys(localStorage).map((key) => (
                <div
                  key={key}
                  className="list-item-modal d-flex justify-content-between align-items-center"
                >
                  <span
                    onClick={() => loadList(key)}
                    style={{ cursor: "pointer" }}
                  >
                    {key}
                  </span>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={(e) => {
                      e.stopPropagation(); // 🔥 evita conflitti
                      deleteList(key);
                    }}
                  >
                    Elimina
                  </button>
                </div>
              ))
            )}

            <button
              className="btn btn-secondary mt-3 w-100"
              onClick={() => setShowModal(false)}
            >
              Chiudi
            </button>
          </div>
        </div>
      )}
    </>
  );
}
