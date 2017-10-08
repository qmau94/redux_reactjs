import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoListItem from './video_list_item';
import VideoDetail from './video_detail';

const VideoList = (probs) => {
  const videoItems= probs.videos.map((video) => {
    return <VideoListItem
      onVideoSelect={probs.onVideoSelect}
      key={video.etag}
      video={video}
      />
  });

  return (
    <div>
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    </div>
  );
}

export default VideoList;
