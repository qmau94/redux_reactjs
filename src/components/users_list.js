import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search_bar'


const PUREACH_HOST= 'http://localhost:3000/api/users'
export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
  }

  render() {
    return (
      <div>
        <h1> ALL USERS </h1>
        <SearchBar />
        {this.getUsersfromApi}
      </div>
    );
  }
}

