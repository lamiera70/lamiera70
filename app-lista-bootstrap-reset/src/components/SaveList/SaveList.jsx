
import "./SaveList.css";

export default function SaveList({saveItems, onOpenList, onDeleteList}) {

  

  return (

    <>

      <ul className="list-group">

        {saveItems.map((list) => (
    
         

            <li 
              key={list.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              
              
              <div className="flex-grow-1 text-center">
                {list.name}

              </div>

              <button 
                type="button"
                className="btn btn-success ms-2"
                onClick={() => onOpenList(list)}
                
              >Apri</button>
              
              
              <button 
                type="button"
                className="btn btn-danger ms-2"
                onClick={() => onDeleteList(list.id)}
              >elimina</button>
                  
              

            </li>

       
              
        ))}
         
      </ul>
    
    </>

  );
}

