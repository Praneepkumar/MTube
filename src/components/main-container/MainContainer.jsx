import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideosContainer from "./VideosContainer";
import { setHomePage } from "../../redux/videosSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const videos = useSelector((store) => store.videos.homePageData);
  const className = isMenuOpen ? "gap-x-3" : "gap-x-4";

  useEffect(() => {
    dispatch(setHomePage(true));
    return () => {
      dispatch(setHomePage(false));
    };
  }, []);

  return (
    <div className='w-full pl-6 py-3 h-screen overflow-y-auto'>
      <VideosContainer videos={videos} className={className} />
    </div>
  );
};

export default MainContainer;
