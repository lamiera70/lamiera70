import { useState } from 'react';
import './Additem.css';
import { BsPlusLg, } from "react-icons/bs";

export default function Additem({handleClickAdd}) {

  const [addItem, setAddItem] = useState('');

  return (

    <>
      <div className='input-container'>
        <input type="text" id='add' value={addItem} onChange={(e) => setAddItem(e.target.value)}/>
        <button onClick={() => handleClickAdd(addItem, setAddItem)}><BsPlusLg /></button>

      </div>
    </>
  );

}
