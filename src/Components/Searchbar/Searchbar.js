import s from './Searchbar.module.css';
import { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchImg: '',
  };

  onFormChange = e => {
    this.setState({ searchImg: e.target.value.toLowerCase() });
  };

  formSubmit = e => {
    e.preventDefault();
    this.setState({ searchImg: '' });
    this.props.onInputChange(this.state.searchImg);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.formSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.onFormChange}
            className={s.SearchFormInput}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
