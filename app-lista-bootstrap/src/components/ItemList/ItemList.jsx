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

            item.testo
          ) : (
            <input type="text" />
          )}
          

          <button className="btn btn-info btn-sm" onClick={() => handleClickEdit(item.id)}>
            Modifica
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
