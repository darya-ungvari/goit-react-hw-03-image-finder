import s from './Modal.module.css';

function Modal({ item, onModalClose }) {
  return (
    <div className={s.Overlay} onClick={onModalClose}>
      <div className={s.Modal}>
        <img src={item.largeImageURL} alt="" />
      </div>
    </div>
  );
}

export default Modal;
