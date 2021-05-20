import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import { Component } from 'react';
import Modal from './Components/Modal/Modal';
import Button from './Components/Button/Button';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const API_KEY = '19021321-24050a2d959b5df6ac2754b2c';
class App extends Component {
  state = {
    images: [],
    loading: false,
    searchQuery: '',
    selectedItem: null,
    currentPage: 1,
    totalHits: null,
  };
  async componentDidMount() {
    window.addEventListener('keydown', evt => {
      if (evt.key === 'Escape') {
        this.onModalClose();
      }
    });
  }

  clickOnImage = id => {
    let item = this.state.images.find(item => item.id === id);
    this.setState({
      selectedItem: item,
    });
  };

  fetchImages = (update = false) => {
    this.setState({ loading: true });

    fetch(
      `https://pixabay.com/api/?q=${this.state.searchQuery}&per_page=12&page=${this.state.currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal`,
    )
      .then(res => res.json())
      .then(images => {
        if (update) {
          this.setState({
            images: [...this.state.images, ...images.hits],
            loading: false,
            totalHits: images.totalHits,
          });
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        } else {
          this.setState({
            images: images.hits,
            loading: false,
            totalHits: images.totalHits,
          });
        }
      });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }

    if (prevState.currentPage !== this.state.currentPage) {
      this.fetchImages(true);
    }
  }

  onModalClose = e => {
    this.setState({ selectedItem: null });
  };

  onFormChange = value => {
    this.setState({ searchQuery: value, currentPage: 1 });
  };

  onLoadMore = e => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  render() {
    return (
      <>
        <Searchbar onInputChange={this.onFormChange}></Searchbar>
        {this.state.loading && <h1>Loading</h1>}

        {this.state.selectedItem && (
          <Modal
            item={this.state.selectedItem}
            onModalClose={this.onModalClose}
          ></Modal>
        )}

        <ImageGallery
          onClickImage={this.clickOnImage}
          searchedImgs={this.state.images}
        ></ImageGallery>

        {this.state.loading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          ></Loader>
        )}

        {this.state.images.length > 0 &&
          !this.state.loading &&
          this.state.totalHits > this.state.images.length && (
            <Button label="Load More" onBtnClick={this.onLoadMore}></Button>
          )}
      </>
    );
  }
}

export default App;
