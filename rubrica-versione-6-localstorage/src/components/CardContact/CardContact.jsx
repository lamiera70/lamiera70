
import './CardContact.css';
import { MdEmail, MdLocalPhone } from "react-icons/md";


export default function CardContact({handleClick, card, children}) {

  return (

    <>
      <div className='card-contact'>
        <div onClick={() => handleClick()}>
          <h3>{card.firstName} {card.lastName}</h3>
          <p><MdLocalPhone /> {card.phone}</p>
          <p><MdEmail /> {card.email}</p>
          {children}
        </div>
      </div>
    
    </>

  );

} 


