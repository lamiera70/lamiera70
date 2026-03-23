import "./ItemList.css";

export default function ItemList({items}) {
  return (

    <>

      <ul className="list-group">

        {items && 

            items.map((item) => (
    
              <li
                key={item.id}
                className="list-group-item"
              >
    
                {item.testo}
    
                
    
              </li>
    
            ))}
         
    </ul>
    
    </>

  );
}

