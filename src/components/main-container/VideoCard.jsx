import {
  DotsThreeOutlineVertical,
  Television,
  DotOutline,
} from "@phosphor-icons/react";
import getTimeformat from "../../utils/custom-hooks/getTimeformat";
import getDuration from "../../utils/custom-hooks/getDuration";
import getStatsCount from "../../utils/custom-hooks/getStatsCount";
import { useSelector } from "react-redux";
import { TITLE_MAX_LENGTH } from "../../utils/constants";
import getTextTrim from "../../utils/custom-hooks/getTextTrim";
import { useState } from "react";
const VideoCard = ({ info }) => {
  const [showIconInfo, setShowIconInfo] = useState(false);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isHomePage = useSelector((store) => store.videos.isHomePage);
  if (!info) return;

  const {
    contentDetails: { duration },
    snippet: {
      channelTitle,
      publishedAt,
      title,
      thumbnails: { standard = "", high = "", medium = "" },
    },
    statistics: { viewCount },
  } = info;

  const dateTime = getTimeformat(publishedAt, "days");
  const views = getStatsCount(viewCount, "views");
  const videoDuration = getDuration(duration);
  const homePageURL = standard?.url || medium?.url || high?.url;
  const titleTrim = !isHomePage
    ? getTextTrim(title, 0, TITLE_MAX_LENGTH)
    : getTextTrim(title, 0, 73);

  const handleInfoIconIn = () => {
    setShowIconInfo(true);
  };
  const handleInfoIconOut = () => {
    setShowIconInfo(false);
  };
  return (
    <div
      className={`video-card ${
        isMenuOpen ? "max-w-[22rem] " : "max-w-[25rem]"
      } flex ${isHomePage ? "flex-col gap-3" : "gap-[10px] items-start"}`}>
      <div
        className={` ${
          isHomePage
            ? isMenuOpen
              ? "w-[22rem] h-[12rem] rounded-xl"
              : "w-[25rem]  h-[13.5rem] rounded-xl"
            : "w-[11rem] h-[6rem] rounded-lg"
        }  overflow-hidden relative`}>
        <img
          className='w-full h-full object-cover'
          src={isHomePage ? homePageURL : medium?.url}
          alt={title}
        />
        <div className='absolute right-2 bottom-1 rounded-md bg-[#000000d3] px-2 py-[2px] '>
          <p className={`text-white text-xs font-medium`}>{videoDuration}</p>
        </div>
      </div>
      <div
        className={`${
          isHomePage ? "flex items-start gap-3 py-2 " : "w-[14rem]"
        } `}>
        {isHomePage && (
          <div className='channel-logo flex items-center justify-center min-w-9 h-9 rounded-full bg-gradient-to-b from-neutral-600 to-black/75'>
            <Television size={22} color={"#fff"} />
          </div>
        )}
        <div className='flex w-full flex-col gap-1 items-start'>
          <div
            onMouseEnter={handleInfoIconIn}
            onMouseLeave={handleInfoIconOut}
            className='w-full flex items-start justify-between'>
            <h3
              className={`title w-[95%] ${
                isHomePage ? "font-medium" : "text-sm font-[500]"
              }`}>
              {titleTrim}
            </h3>

            <div
              className={`pt-1  ${
                showIconInfo
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}>
              <DotsThreeOutlineVertical size={14} weight='fill' />
            </div>
          </div>
          <div className='info flex flex-col'>
            <p
              className={`text-zinc-500 ${
                isHomePage ? "text-[15px] " : "text-[13px]"
              }`}>
              {channelTitle}
            </p>
            <div
              className={`flex items-center ${
                isHomePage ? "gap-[2px] text-[15px]" : "gap-[1px] text-[13px]"
              } text-zinc-500`}>
              <p>{views}</p>

              <DotOutline size={18} weight='fill' />

              <p> {dateTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
