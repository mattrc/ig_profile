import React, { useRef } from 'react';
import './Modal.scss';

export function Modal({ show, children, onClose }) {
  const node = useRef(null);

  function handleClick(event) {
    if (event.target.className === node.current.className) {
      onClose();
    }
  }

  return (
    <div className={`modal${show ? '' : ' modal--hidden'}`} ref={node} onClick={handleClick}>
      <div className="modal__content">
        {show ? children : null}
      </div>
      <span className="modal__close" onClick={onClose}>&times;</span>
    </div>
  );
}