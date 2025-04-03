
import './Container.css';

export default function Container({children}) {

  return (

    <>
      <div className='contenitore'>
            <h3>CALCOLATRICE</h3>
            {children}       
      </div>
    </>
  );
}
