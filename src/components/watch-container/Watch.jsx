import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import WatchLeft from "./WatchLeft";
import WatchRight from "./WatchRight";
import { closeMenu } from "../../redux/appSlice";
import { setWatchVideo } from "../../redux/videosSlice";
import getVideoById from "../../utils/helpers/getVideoById";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");
  const videoData = useSelector((store) => store.videos.watchVideo);

  useEffect(() => {
    dispatch(closeMenu());
    const getVideoData = async () => {
      const data = await getVideoById(id);
      dispatch(setWatchVideo(data));
    };

    getVideoData();
  }, [id, dispatch]);
  if (!videoData) return;

  return (
    <div className='h-[100dvh] overflow-auto pb-24'>
      <div className='w-[91%] mx-auto grid grid-cols-[3fr,_2fr] gap-6 py-4 '>
        <WatchLeft {...videoData} />
        <WatchRight currentId={id} />
      </div>
    </div>
  );
};

export default Watch;
