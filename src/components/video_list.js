import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyAuOKxB6Fk7xpYFy1TUbemPiBLi1hJRTWE'
export default class VideoList extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    YTSearch({key: YOUTUBE_API_KEY, term: "best rock"}, (videos) => this.setState({ videos }))
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

