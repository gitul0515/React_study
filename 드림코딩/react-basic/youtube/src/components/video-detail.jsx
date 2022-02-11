import { useLocation } from "react-router-dom";

function VideoDetail() {
  const { video } = useLocation().state;
  console.log(video);
  return (
    <iframe title={video.id}
      id="ytplayer" type="text/html" width="720" height="405"
      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
      frameBorder="0" allow="autoplay" allowFullScreen>
    </iframe>
  )
}

export default VideoDetail;