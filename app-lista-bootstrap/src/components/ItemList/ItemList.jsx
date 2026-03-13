import "./ItemList.css";

function ItemList({ items }) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {item.testo}

          <button className="btn btn-danger btn-sm">Elimina</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
