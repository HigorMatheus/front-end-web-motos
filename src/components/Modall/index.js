import React from 'react';
import './style.css';
// import '../../assets/css/partials/Modal.css'
// require('../../assets/css')

const Modal =({ id ="modal", onClose = ()=>{},children})=> {
  
  const handleOutsideClick = (e) =>{
    if (e.target.id === id) onClose();
  }

  return (
    <div className="bg-modal" id={id} onClick={handleOutsideClick} >
      <div className="modal">
          <span className="close" onClick={onClose}>&times;</span>
          <div className="content">{children}</div>
      </div>
    </div>
  );
}
export default Modal;
