import Video from "./video";

export default function Videos(props) {
  const topVideoList = props.topVideoList;
  return (
    <ul className="videos">
      {
        topVideoList.map(topVideo => (
          <Video 
            key={topVideo.id}
            topVideo={topVideo}
          />
        ))
      }
    </ul>
  )
}