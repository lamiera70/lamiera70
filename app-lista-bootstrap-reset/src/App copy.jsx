
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AddItem from './components/AddItem/AddItem'
import ItemList from './components/ItemList/ItemList'
import Dropdown from './components/Dropdown/Dropdown'
import SaveList from './components/SaveList/SaveList'

export default function App() {

  const [items, setItems] = useState(() =>
    JSON.parse(localStorage.getItem('localItems')) || [])

  const [selectId, setSelectId] = useState(null)
  const [editText, setEditText] = useState("")

  const [currentListName, setCurrentListName] = useState("Lista della spesa");
  
  const [isVisible, setIsVisible] = useState(false)

  const [savedLists, setSavedLists] = useState(() =>
    JSON.parse(localStorage.getItem('savedLists')) || []
  )

  useEffect(() => {
    localStorage.setItem('savedLists', JSON.stringify(savedLists))
  }, [savedLists])
  
    
  useEffect(() => {

    localStorage.setItem('localItems', JSON.stringify(items))
  
  }, [items])


  function addItem(text) {

    const newItem = {id: crypto.randomUUID(), testo: text, isCheck: false}
    setItems([...items, newItem])
  }
  


  function handleCheck(id) {
    
    setItems(items.map((item) =>
      item.id === id ? { ...item, isCheck: !item.isCheck } : item ));
  }

  function handleEditText(id, value) {
    
    setItems(items.map((item) =>
      item.id === id ? { ...item, testo: value } : item ));
    setSelectId(null)
  }


  function handleEditItem(item) {

    setSelectId(item.id)
    setEditText(item.testo)
  }
  
  function handleDeleteItem(id) {

    setItems(items.filter((item) =>item.id !== id));
  }

  function handleResetItems() {

    const conferma = window.confirm("Vuoi cancellare la lista?");
    if (conferma) {
      setItems([]);
      setCurrentListName("Lista della spesa")
    }
  }

  function handleOpenItems() {

    if (savedLists.length === 0) {
      alert('non ci sono liste salvate')
      return
    } 

      setIsVisible(!isVisible)
    
  }

  function handleSaveList() {
    
    if (items.length === 0) {
      alert('la lista della spesa è vuota')
      return
    } 
    
    let name = prompt("Nome della lista:");

    if (!name) return;

    // pulizia nome
    name = name.trim().toLowerCase();

    if (name === "") {
      alert("Inserisci un nome valido");
      return;
    }

    const newList = {
      id: crypto.randomUUID(),
      name: name,
      items: items
    };

    setSavedLists(prev => [...prev, newList]);
    setCurrentListName(name);
  }

  

  function handleOpenList(list) {
    setItems(list.items);
    setIsVisible(!isVisible)
    setCurrentListName(list.name);
  }

  function handleDeleteList(id) {
    setSavedLists(prev => prev.filter(list => list.id !== id));
  }


 


  return (
    <>

    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-12 col-md-8 col-lg-6">

          <div className="card p-4 shadow-sm">

            <Header message={currentListName}>
              <Dropdown
                handleResetItems={handleResetItems}
                handleOpenItems={handleOpenItems}
                onSaveList={handleSaveList}
              />
            </Header>
       
          </div>

        </div>

      </div>

       <div className="row justify-content-center">

        <div className="col-12 col-md-8 col-lg-6">

          <div className="card p-4 shadow-sm">
                
            <AddItem addText={addItem}/>

          </div>

        </div>

      </div>

       <div className="row justify-content-center">

        <div className="col-12 col-md-8 col-lg-6">

          <div className="card p-4 shadow-sm">

            {isVisible ? (
               <SaveList 
                  saveItems={savedLists}
                  onOpenList={handleOpenList}
                  onDeleteList={handleDeleteList}
                  

               /> 
            ) : (

              <ItemList
                items={items}
                selectId={selectId}
                editText={editText}
                setEditText={setEditText}
                handleCheck={handleCheck}
                handleEditText={handleEditText}
                handleEditItem={handleEditItem}
                handleDeleteItem={handleDeleteItem}
              
              />
            )}
            

          </div>

        </div>

      </div>
    </div>
    
    </>
  )
}


