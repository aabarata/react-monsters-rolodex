import "./searchBox.styles.css";

const searchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    type="search"
    className={`search-box ${className}`}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default searchBox;
