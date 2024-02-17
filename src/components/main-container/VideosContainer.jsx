import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { ShimmerCard } from "../layout/Shimmer";

const VideosContainer = ({ videos, className, ...rest }) => {
  const renderVideoCards = videos?.length > 0;

  if (!renderVideoCards) return <ShimmerCard />;
  return (
    <div
      className={`video-container pb-32 flex flex-wrap gap-y-3 ${className}`}
      {...rest}
    >
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};
export default VideosContainer;