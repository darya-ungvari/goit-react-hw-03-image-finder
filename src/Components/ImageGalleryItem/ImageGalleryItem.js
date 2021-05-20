import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ item, onClickImage }) {
  return (
    <>
      <li
        onClick={() => {
          onClickImage(item.id);
        }}
        className={s.ImageGalleryItem}
      >
        <img
          width="400px"
          height="200px"
          src={item.webformatURL}
          alt="img"
          className={s.ImageGalleryItemImage}
        />
      </li>
    </>
  );
}

export default ImageGalleryItem;
