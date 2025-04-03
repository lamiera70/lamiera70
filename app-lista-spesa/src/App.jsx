
import { useState } from 'react';
import './App.css';
import Additem from './components/Additem/Additem';
import Header from './components/Header/Header';
import Item from './components/Item/Item';

export default function App() {

  const [listaItem, setListaItem] = useState([
    {id: crypto.randomUUID(), description: 'pane'},
    {id: crypto.randomUUID(), description: 'salame'},
    {id: crypto.randomUUID(), description: 'vino'},
  ]);

  const [listaId, setListaID] = useState([]);
  
  const [listaIdEdit, setListaIDEdit] = useState([]);

  


  function handleClickAdd(item, addItem) {

    if(item !== '')
      { setListaItem([...listaItem, {id: crypto.randomUUID(), description: item}])
        addItem('')
      } else {
        alert('devi inserire qualcosa')
      }
  }

  function handleClickSelected(id) {
    
    if(listaId.includes(id))
      { setListaID(listaId.filter(lista => lista !== id))
      } else {
        setListaID([...listaId, id])
      }
  }


  function handleClickEdit(id) {

    if(listaIdEdit.includes(id))
      { setListaIDEdit(listaIdEdit.filter(lista => lista !== id))
      } else {
        setListaIDEdit([...listaIdEdit, id])
      }

  }


  function handleClickRemove(id) {

    setListaItem(listaItem.filter(lista => lista.id !== id))
    
  };

  function onChangeInputEdit(id, value) {

    setListaItem(() => listaItem.map((item) => (item.id === id ? {...item, description: value} : item)));
  }
  

  return (
    <>
      
      <Header messaggio={'Lista della spesa'}/>



      <Additem handleClickAdd={handleClickAdd}/>

      

      <Item listaItem={listaItem} listaId={listaId} listaIdEdit={listaIdEdit}
      handleClickSelected={handleClickSelected}
      handleClickEdit={handleClickEdit}
      handleClickRemove={handleClickRemove}
      onChangeInputEdit={(id, value) => onChangeInputEdit(id, value)}

      />
      
    </>
  );
}


