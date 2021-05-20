import s from './Button.module.css';

function Button({ onBtnClick, label }) {
  return (
    <>
      <button className={s.Button} onClick={onBtnClick}>
        {label}
      </button>
    </>
  );
}

export default Button;
