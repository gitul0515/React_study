import Video from "./video";

export default function Videos(props) {
  const { videos } = props;
  return (
    <ul className="videos">
      {
        videos.map(video => (
          <Video 
            key={video.id}
            video={video}
          />
        ))
      }
    </ul>
  )
}