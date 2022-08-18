import { Component } from "react";

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
        className={className}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default searchBox;
