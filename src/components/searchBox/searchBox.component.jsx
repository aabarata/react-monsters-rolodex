import { Component } from "react";
import "./searchBox.styles.css";

class searchBox extends Component {
  onSearchChange = (event) => {
    this.setState(() => {
      return {
        searchField: event.target.value.toLowerCase(),
      };
    });
  };

  render() {
    const { className, placeholder, onChangeHandler } = this.props;

    return (
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default searchBox;
