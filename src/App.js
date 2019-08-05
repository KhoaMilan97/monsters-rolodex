import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/Search-box";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchFeild: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user =>
        this.setState({
          monsters: user
        })
      );
  }

  render() {
    const { monsters, searchFeild } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={e =>
            this.setState({
              searchFeild: e.target.value
            })
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
//P3. Lesson 20
