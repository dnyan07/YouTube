import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

function WatchPage() {
  let [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="px-5">
      <iframe
        width="674"
        height="379"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="Event Bubbling, Capturing aka Trickling in Javascript | Oyo UI/Frontend Interview Question"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage;
