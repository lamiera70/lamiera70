import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem/AddItem";
import ItemList from "./components/ItemList/ItemList";
import Header from "./components/Header/Header";

export default function App() {
  const [items, setItems] = useState([]);
  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState(null);

  
  
  function addItem(text) {
    setItems([...items, { id: crypto.randomUUID(), testo: text }]);
  }


  function handleClickEditId(item) {
    setEditingId(item.id);
    setEditText(item.testo);
  }

  function handleClickCancel() {

    setEditingId(null)
    setEditText("")
   

  }

  // function handleClickdefinire(item) {

  //   if(listaIdEdit.includes(item.id))
  //     { setListaIDEdit(listaIdEdit.filter(lista => lista !== item.id))
  //     } else {
  //       setListaIDEdit([...listaIdEdit, item.id])
  //     }

  // }
  
  
  
  
  
  
  function handleClickDelete(item) {
    
    
    setItems(items.filter(i => i.id !== item.id ))

  }

  function handleClickSave(item, editText) {

    
    setItems(items.map((lista) => (lista.id === item.id ? {...lista, testo: editText} : lista)));
    setEditingId(null)

  

  }

  

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card p-4 shadow-sm">

              <Header message="Lista della spesa" />

              <AddItem addItem={addItem} />

              <ItemList
               items={items}
               handleClickEditId={handleClickEditId}
               
               handleClickCancel={handleClickCancel}
               handleClickDelete={handleClickDelete}
               handleClickSave={handleClickSave}
               editText={editText}
               editingId={editingId}
               setEditText={setEditText}
               
              
              />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
