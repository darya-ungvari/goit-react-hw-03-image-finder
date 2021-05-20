import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ searchedImgs, onClickImage }) {
  return (
    <div>
      <ul className={s.ImageGallery}>
        {searchedImgs.map(img => (
          <ImageGalleryItem
            onClickImage={onClickImage}
            key={img.id}
            item={img}
          ></ImageGalleryItem>
        ))}
      </ul>
    </div>
  );
}

export default ImageGallery;
