import { Component } from "react";
import CardList from "./components/cardList/cardList.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responseUsers = await response.json();
    this.setState(() => {
      return { monsters: responseUsers, filteredMonstersList: responseUsers };
    });
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return {
        searchField: event.target.value.toLowerCase(),
      };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        <CardList list={filteredMonsters} />
      </div>
    );
  }
}

export default App;
