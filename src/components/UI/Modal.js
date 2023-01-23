import { Fragment } from 'react';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.deletecart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};


const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop deletecart={props.deletecart}/>
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
