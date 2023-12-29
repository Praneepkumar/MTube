import {
  List,
  MagnifyingGlass,
  Microphone,
  XCircle,
  User,
  Bell,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

const Header = () => {
  const [input, setInput] = useState("");
  return (
    <header className='header flex justify-between px-5 py-4'>
      <section className='left flex gap-3 items-center '>
        <List size={24} color={"#1a1a1a"} />
        <div className='max-w-36'>
          <img src='../../assets/mocktube.png' className='w-full' alt='logo' />
        </div>
      </section>
      <section className='search flex gap-3 w-[42%]'>
        <div className='input-feild flex  rounded-full w-full '>
          <div className='relative w-full rounded-l-full'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
              placeholder='Search'
              className='py-[0.4rem] inline-flex w-full border border-r-0 border-gray-200 px-5 rounded-l-full placeholder:text-base focus:outline-none focus:ring-2 focus:border-sky-500'
            />
            {input && (
              <div
                className='absolute right-2 top-[0.57rem] cursor-pointer'
                onClick={() => setInput("")}>
                <XCircle size={18} color={"#817f7f"} />
              </div>
            )}
          </div>
          <button className='icon-search inline-flex px-6 border  border-gray-300 items-center rounded-r-full bg-[#605b5b17] hover:bg-[#817f7f2d]'>
            <MagnifyingGlass size={22} color={"#1a1a1a"} />
          </button>
        </div>
        <button className='px-[10px] py-2 flex items-center justify-center rounded-full bg-[#605b5b17] hover:bg-[#817f7f2d]'>
          <Microphone size={22} color={"#1a1a1a"} />
        </button>
      </section>
      <section className='right flex gap-7 items-center flex-row-reverse justify-end pr-3'>
        <div className='p-2 flex items-center justify-center rounded-full bg-[#6d6b6b]'>
          <User size={20} weight='bold' color={"#fff"} />
        </div>
        <Bell size={24} color={"#1a1a1a"} />
        <VideoCamera size={24} color={"#1a1a1a"} />
      </section>
    </header>
  );
};

export default Header;