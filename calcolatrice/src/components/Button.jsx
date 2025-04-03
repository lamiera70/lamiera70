

import './Button.css';

export default function Button({children, onClickButton}) {

  return (
    
    <>
      <button onClick={onClickButton}>{children}</button>
    </>
    
  );
}
