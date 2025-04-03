
import './Item.css';
import { BsFillTrash3Fill, BsPencilFill, BsCheckCircleFill, BsFloppyFill } from "react-icons/bs";

export default function Item({listaItem, listaId, listaIdEdit,
     handleClickSelected, handleClickEdit, handleClickRemove, onChangeInputEdit }) {

  

  return (
    <>

          {listaItem.map((lista) =>
            (
              <div className={listaId.includes(lista.id) ? 'item-container selected' : 'item-container'}
                 key={lista.id}>
                
                
                {!listaIdEdit.includes(lista.id) ? (

                  <>
                  <div className='item-description'>
                    <h4>{lista.description}</h4>

                  </div>
                  <div>
                    
                    <button className='item-button-v'
                    onClick={() => handleClickSelected(lista.id)}
                    ><BsCheckCircleFill /></button>
                    <button className='item-button-m'
                    onClick={() => handleClickEdit(lista.id)}
                    ><BsPencilFill /></button>
                    <button className='item-button-x'
                    onClick={() => handleClickRemove(lista.id)}
                    ><BsFillTrash3Fill /></button>

                  </div>
                  </>
                ) : (

                  <>
                  <input className='item-input' type="text" id='edit' value={lista.description}
                   onChange={(e) => onChangeInputEdit(lista.id, e.target.value)} />
                  <div>
                    <button className='item-button-m'
                    onClick={() => handleClickEdit(lista.id)}
                    ><BsFloppyFill /></button>
                  </div>
                  </>

                )}

              </div>
            )
          )}


    </>
  );
}


