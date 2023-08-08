import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();

    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {
     videos.map((video)=> (
     
    <Link to={"/watch?v="+video.id} key={video.id}><VideoCard  info={video} /></Link>
     ))}
     
    </div>
  );
}

export default VideoContainer;
