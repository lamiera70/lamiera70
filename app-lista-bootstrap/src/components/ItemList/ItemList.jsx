
import "./ItemList.css";

function ItemList({ items, editText, setEditText, editingId, handleClickDelete, handleClickSave, handleClickEditId, handleClickCancel  }) {


  

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          
          {editingId !== item.id ? (
            <>
              {item.testo}
              <button 
                className="btn btn-info btn-sm"
                onClick={() => handleClickEditId(item)}>
                {editingId === item.id ? "Salva" : "Modifica"}
              </button>
            </>
          ) : (
            <>
             
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Inserisci prodotto"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  
                />

                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => handleClickDelete(item)}>
                  Elimina
                </button>
                <button
                  className="btn btn-secondary btn-sm ms-2"
                  onClick={() => handleClickCancel(item)}>
                  Annulla
                </button>
                <button
                  className= {editingId === item.id ? "btn btn-success btn-sm ms-2" : "btn btn-info btn-sm ms-2"}
                  onClick={() => handleClickSave(item)}>
                  {editingId === item.id ? "Salva" : "Modifica"}
                </button>
                
              </div>

            </>
          )}
          

        </li>
      ))}
    </ul>
  );
}

export default ItemList;
