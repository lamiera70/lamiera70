import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem/AddItem";
import ItemList from "./components/ItemList/ItemList";
import Header from "./components/Header/Header";

export default function App() {
  const [items, setItems] = useState([]);

  function addItem(text) {
    setItems([...items, { id: crypto.randomUUID(), testo: text }]);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card p-4 shadow-sm">
              <Header message={"Lista della spesa"} />
              <AddItem addItem={addItem} />
              <ItemList items={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
