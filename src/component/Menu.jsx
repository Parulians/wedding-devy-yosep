import React, { useState } from "react";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineInsertInvitation } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { BsCalendarDateFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { GiJourney } from "react-icons/gi";
import { RiGalleryFill } from "react-icons/ri";
import { GiFallingStar } from "react-icons/gi";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const menu = [
    {
      id: 1,
      title: "Invitation",
      link: "/",
      logo: <MdOutlineInsertInvitation />,
    },
    {
      id: 2,
      title: "Home",
      link: "/home",
      logo: <IoHomeSharp />,
    },
    {
      id: 3,
      title: "Our Journey",
      link: "/ourJourney",
      logo: <GiJourney />,
    },
    {
      id: 4,
      title: "Gallery",
      link: "/gallery",
      logo: <RiGalleryFill />,
    },
    {
      id: 5,
      title: "Date",
      link: "/date",
      logo: <ImLocation2 />,
    },
    {
      id: 6,
      title: "Wedding Wish",
      link: "/weddingWish",
      logo: <GiFallingStar />,
    },
    {
      id: 7,
      title: "Count The Date",
      link: "/countTheDate",
      logo: <BsCalendarDateFill />,
    },
  ];

  return (
    <div>
      {/* Menu */}
      <div className="w-full flex justify-center gap-3">
        <button
          className={`w-30 h-9 rounded-2xl transition-all ease-in-out duration-300 cursor-pointer flex items-center justify-center ${
            isOpen
              ? "bg-[#d12222] scale-95 shadow-lg"
              : "bg-[#AD1919] hover:bg-[#d12222]"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-pressed={isOpen}
        >
          <h1 className="text-xl text-white">Menu</h1>
        </button>

        {/* Menu Dropdown */}

        <div
          className={`absolute w-[450px] px-10 translate-x-6 bottom-0 pb-5 bg-[#2D0404] text-[#fff1b2] duration-300 ease-in-out ${
            isOpen
              ? "translate-y-35 opacity-100"
              : "translate-y-full opacity-0 pointer-events-none"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="flex pt-3 pb-2">
            <AiOutlineClose
              className={`w-6 h-6 cursor-pointer hover:text-[#fff1b2] transition-transform duration-300 ${
                isOpen ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
              }`}
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex flex-nowrap w-220">
              {menu.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`block py-2 w-full flex items-center justify-center transition-all duration-200 ease-in ${
                    activeId === item.id
                      ? "bg-[#AD1919] text-white"
                      : "hover:bg-[#d12222] hover:text-white"
                  }`}
                  onClick={() => {
                    setActiveId(item.id);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex flex-col items-center">
                    {item.logo}
                    <h1 className="border-b-1 border-[#fff1b2]">
                      {item.title}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
