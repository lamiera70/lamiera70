
import './CardContactEdit.css';


export default function CardContactEdit({editContact, setEditContact,  children}) {

  return (

    <>

<div className="card-edit">
      <h2>Modifica Contatto</h2>
      <input type="text" name="firstName" placeholder="Nome" value={editContact.firstName}
      onChange={(e) => setEditContact({...editContact, firstName: e.target.value})}
      />
      <input type="text" name="lastName" placeholder="Cognome" value={editContact.lastName}
      onChange={(e) => setEditContact({...editContact, lastName: e.target.value})}
      />
      <input type="text" name="work" placeholder="Lavoro" value={editContact.work}
      onChange={(e) => setEditContact({...editContact, work: e.target.value})}
      />
      <input type="text" name="phone" placeholder="Telefono" value={editContact.phone}
      onChange={(e) => setEditContact({...editContact, phone: e.target.value})}
      />
      <input type="email" name="email" placeholder="Email" value={editContact.email}
      onChange={(e) => setEditContact({...editContact, email: e.target.value})}
      />
      <input type="text" name="image" placeholder="URL Immagine" value={editContact.image}
      onChange={(e) => setEditContact({...editContact, image: e.target.value})}
      />
      
      <div>
          <img src={editContact.image} alt="URL Immagine" />
      </div>
      
      <div>
        {children}
      </div>
    </div>
    
    </>

  );

} 


