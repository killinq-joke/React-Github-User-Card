import React, { Component } from "react";
import axios from 'axios';


import "./App.css";
import styled from 'styled-components';


import Card from './Card';
import CardList from './CardList';

const Container = styled.div`
background: dodgerblue;
`


class App extends Component {
  constructor() {
    super()
    this.state = {
      peoples: [],
      name: '',
      img: '',
      url: ''
    }
  }

  componentDidMount() {
    Promise.all([axios.get('https://api.github.com/users/killinq-joke'),axios.get('https://api.github.com/users/killinq-joke/followers')])
    
    .then(res => {
      // console.log(res[0])
      // console.log(res[1])
      
      this.setState({ peoples: res[1].data.concat(res[0].data), name: res[0].data.login , img: res[0].data.avatar_url, url: res[0].data.html_url })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    
    const { peoples, name, img, url } = this.state;
    console.log(peoples)
    return <Container className="App">
      <CardList peoples={this.state.peoples}/>
      
    </Container>;
  }
}

export default App;
