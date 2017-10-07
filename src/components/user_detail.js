import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search_bar'


const PUREACH_HOST= 'http://localhost:3000/api/users'
const PUREACH_API_AUTHORIZATION= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ik1hdSIsImV4cCI6MTUwNzQ0MjIwN30.ABhiwqMygdv6QCffwPnpoa-64EgJ4CAPsL4QuhFd5Rc';

export default class UserDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };

    function getUsersfromApi() {
      fetch(PUREACH_HOST,
        {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'Accept': 'application/pureach_api.v1',
            'Content-Type':'application/x-www-form-urlencoded',
          }
        }, (users) => {
         this.setState({ users });
        }
      );
    }
  }

  render() {
    return (
      <div>
        <SearchBar />
        {this.getUsersfromApi}
      </div>
    );
  }
}

