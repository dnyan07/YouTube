import React from "react";

function VideoCard({ info }) {
  

  return (
    <div className="p-2 m-2 shadow-lg w-72">
      {
        <img
          className="rounded-lg"
          alt="video"
          src={info?.snippet?.thumbnails?.medium?.url}
        />
      }
      <ul>
        <li className="font-bold py-2">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} Views</li>
      </ul>
    </div>
  );
}

export default VideoCard;
