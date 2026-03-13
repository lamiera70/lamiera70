import { useState } from "react";
import "./ItemList.css";

function ItemList({ items, modItem }) {

  const [toggleMod, setToggleMod] = useState(false)

  function handleMod(item) {
    
    modItem(item);
    setToggleMod(!toggleMod)
    
  }

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          { toggleMod ? (
            <input type="text" />
          ) : (
            item.testo
          ) }

          <button className="btn btn-info btn-sm" onClick={() => handleMod(item)}>
            Modifica
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
