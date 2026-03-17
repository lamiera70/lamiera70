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

            <div className="mb-3">

              <input
                type="text"
                className="form-control mb-2"
                placeholder="Inserisci prodotto"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />

              <div className="text-end">

                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => handleClickDelete(item.id)}
                >
                  Elimina
                </button>

                <button
                  className="btn btn-secondary btn-sm me-2"
                  onClick={() => handleClickCancel(item.id)}
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