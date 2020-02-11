import React, { Component } from "react";
import axios from 'axios';
import "./App.css";
import Card from './Card';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      img: ''
    }
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/killinq-joke')
    .then(res => {
      console.log(res.data)
      this.setState({ name: res.data.login , img: res.data.avatar_url})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return <div className="App">
      <Card 
          name={this.state.name}
          img={this.state.img}
        />
    </div>;
  }
}

export default App;
