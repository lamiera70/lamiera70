
import "./ItemList.css";

export default function ItemList({items}) {

    

  return (

    <>

      <ul className="list-group">

        {items &&

            items.map((item) => (
    
            
                <li 
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <input className="form-check-input me-2" type="checkbox" value="" />
                  
                  {item.testo}
      
      
                  <button 
                    type="button"
                    className="btn btn-info"
                  >modifica</button>
                </li>
              
              
    
            ))}
         
    </ul>
    
    </>

  );
}

