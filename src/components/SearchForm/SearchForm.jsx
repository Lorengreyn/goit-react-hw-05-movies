import PropTypes from 'prop-types';
import css from './SearchForm.module.css';
export function SearchForm({ handleSetQuery, handleSubmit, value }) {
  return (
    <div className={css.searchbar}>
    <form onSubmit={handleSubmit} className={css.form}>
        <input type="text" onChange={handleSetQuery} value={value} className={css.searchFormInput} />
      <button type="submit" className={css.button}>Search</button>
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  handleSetQuery: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
