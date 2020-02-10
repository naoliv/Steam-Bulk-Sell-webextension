import React, { useEffect, useRef } from 'react';
const styles = require('./index.scss');

export const Modal = (props) => {
  const {
    id,
    open,
    onOpen = () => {},
    onClose = () => {},
    children = [],
  } = props;
  
  useEffect(onOpen, []);

  const modalRef = useRef(null);
  const backdropClickHandler = (e) => {
    const target  = e.target as Element;
    if (target === modalRef.current && target.closest(modalRef.current)) {
      return;
    }
    onClose();
  };

  console.log('render modal', props);

  return open && (
    <div id={id}>
      <div className={styles.modal__container} ref={modalRef}>
        {children}
      </div>
      <div className={styles.modal__backdrop} onClick={backdropClickHandler}></div>
    </div>
  );
};

export default Modal;
