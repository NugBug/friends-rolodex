import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.components.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    const users = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    this.setState({ friends: users });
  }

  render() {
    const { friends, searchField } = this.state;
    const filteredFriends = friends.filter((friend) =>
      friend.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Friend Rolodex</h1>
        <SearchBox
          placeholder="search friends"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList friends={filteredFriends} />
      </div>
    );
  }
}

export default App;
