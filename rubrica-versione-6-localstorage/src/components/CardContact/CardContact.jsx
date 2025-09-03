
import './CardContact.css';
import { MdEmail, MdLocalPhone } from "react-icons/md";


export default function CardContact({handleClick, card, children}) {

  return (

    <>
      <div className='card-contact'>
        <div onClick={() => handleClick()}>
          <h3>{card.firstName} {card.lastName}</h3>
          <h4><MdLocalPhone /> {card.phone}</h4>
          <h4><MdEmail /> {card.email}</h4>
          {children}
        </div>
      </div>
    
    </>

  );

} 


