import "./ItemList.css";

function ItemList({
  items,
  editText,
  setEditText,
  editingId,
  handleToggleDone,
  handleClickDelete,
  handleClickSave,
  handleClickEditId,
  handleClickCancel
}) {

  const suggestions = [
    "pollo",
    "pomodori",
    "porri",
    "pane",
    "pasta",
    "pizza",
    "prosciutto",
    "capocollo",
  ];

  const filtered =
    editText.length > 1
      ? suggestions.filter((s) =>
          s.toLowerCase().includes(editText.toLowerCase())
        )
      : [];

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item.id}
          className={
            editingId === item.id
              ? "list-group-item"
              : `list-group-item d-flex justify-content-between align-items-center
                 ${item.done ? "list-group-item-success" : ""}`
          }
        >

          {editingId !== item.id ? (
            <>
              <div className="d-flex align-items-center gap-2">

                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={item.done}
                  onChange={() => handleToggleDone(item.id)}
                />

                <span className={item.done ? "ms-2 text-decoration-line-through text-muted" : "ms-2"}>
                  {item.testo}
                </span>

              </div>

              {!item.done && (
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => handleClickEditId(item)}
                >
                  Modifica
                </button>
              )}
            </>
          ) : (

            <div className="position-relative">

              <input
                type="text"
                className="form-control"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />

              {filtered.length > 0 && (
                <ul className="list-group suggestion-box mt-1">
                  {filtered.map((s, index) => (
                    <li
                      key={index}
                      className="list-group-item suggestion"
                      onClick={() => setEditText(s)}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              )}

              <div className="text-end mt-2">

                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => handleClickDelete(item.id)}
                >
                  Elimina
                </button>

                <button
                  className="btn btn-secondary btn-sm me-2"
                  onClick={handleClickCancel}
                >
                  Annulla
                </button>

                <button
                  className="btn btn-success btn-sm"
                  onClick={() => handleClickSave(item.id, editText)}
                >
                  Salva
                </button>

              </div>

            </div>

          )}

        </li>
      ))}
    </ul>
  );
}

export default ItemList;