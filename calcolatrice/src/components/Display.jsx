
import './Display.css';

export default function Display({count, display, deposito}) {
  
  return (
    <>
        <div className="container-display">
            <h3>{display ? deposito : count}</h3>
        </div>
    </>
  );
}


