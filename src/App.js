import { useState, useEffect } from "react";
import SearchBox from "./components/searchBox/searchBox.component";
import CardList from "./components/cardList/cardList.component";
import "./App.css";

const App = () => {
  //Create the get/set and initialize searchField as an empty string
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  //The condition array will be empty since this effect will only be runned one time (first render)
  //// If we wanted to run again based in a variable we passed into the conditional array
  useEffect(() => {
    return async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const responseUsers = await response.json();
      setMonsters(responseUsers);
    };
  }, []);

  //The condition array includes the searchField state field since will be re-runned everytime it's changed
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList list={filteredMonsters} />
    </div>
  );
};

export default App;
