import { useState } from "react";
import "./ItemList.css";

function ItemList({ items, modItem, handleClickEdit, listaIdEdit }) {

  const [toggleMod, setToggleMod] = useState(false)
  const [itemId, setItemId] = useState([])

  function handleMod(item) {
    
    modItem(item);
    
    
  }

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          
          {!listaIdEdit.includes(item.id) ? (
            <>
              {item.testo}
              <button className="btn btn-info btn-sm" onClick={() => handleClickEdit(item.id)}>
              {listaIdEdit.includes(item.id) ? "Salva" : "Modifica"}
              </button>
            </>
          ) : (
            <>
              <input type="text" />
              <div>

                <button className="btn btn-danger btn-sm" onClick={() => handleClickEdit(item.id)}>
                  Elimina
                </button>
                <button
                  className= {listaIdEdit.includes(item.id) ? "btn btn-success btn-sm ms-2" : "btn btn-info btn-sm ms-2"}
                  onClick={() => handleClickEdit(item.id)}>
                  {listaIdEdit.includes(item.id) ? "Salva" : "Modifica"}
                </button>
              </div>

            </>
          )}
          

          {/* <button className="btn btn-info btn-sm" onClick={() => handleClickEdit(item.id)}>
            {listaIdEdit.includes(item.id) ? "Salva" : "Modifica"}
          </button> */}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
