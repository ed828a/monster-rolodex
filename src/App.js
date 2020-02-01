import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MonsterList from './components/MonsterList'
import { Search } from './components/Search';
import Title from './components/Title';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchField: "",
    }

    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({
          monsters: users,
        });
      });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

   render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.username.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log('lowercase:', searchField.toLowerCase());

    return (
      <div className="App">
        <Title />
        <Search placeholder="search monsters" handleChange={this.handleChange} />
        <MonsterList monsters={filteredMonsters} />
      </div>
    )
  }
}

