import React from 'react';
import VideoDetail from './video_detail'

const VideoListItem = ({ video, onVideoSelect }) => {
  return (
    <li onClick = {() => onVideoSelect(video)} className= "list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={video.snippet.thumbnails.default.url}/>
        </div>
        <div>
          {video.snippet.title}
        </div>
      </div>
    </li>
  )
};


export default VideoListItem
