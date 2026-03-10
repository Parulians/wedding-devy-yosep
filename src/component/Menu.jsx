import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineInsertInvitation } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { BsCalendarDateFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { GiJourney } from "react-icons/gi";
import { RiGalleryFill } from "react-icons/ri";
import { GiFallingStar } from "react-icons/gi";
import { RiMenuFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const menu = [
  { id: 1, title: "Invitation",    link: "/",            icon: <MdOutlineInsertInvitation /> },
  { id: 2, title: "Home",          link: "/home",        icon: <IoHomeSharp /> },
  { id: 3, title: "Our Journey",   link: "/ourJourney",  icon: <GiJourney /> },
  { id: 4, title: "Gallery",       link: "/gallery",     icon: <RiGalleryFill /> },
  { id: 5, title: "Date",          link: "/date",        icon: <ImLocation2 /> },
  { id: 6, title: "Wedding Wish",  link: "/weddingWish", icon: <GiFallingStar /> },
  { id: 7, title: "Count The Date",link: "/countTheDate",icon: <BsCalendarDateFill /> },
];

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.35, ease: "easeOut" },
  }),
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileTap={{ scale: 0.88 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(true)}
        className="relative flex items-center gap-2 px-4 rounded-2xl cursor-pointer overflow-hidden shrink-0 self-center"
        style={{
          background: "linear-gradient(135deg, #d12222 0%, #AD1919 100%)",
          boxShadow: "0 4px 16px rgba(173,25,25,0.5)",
          border: "1px solid rgba(255,241,178,0.2)",
          color: "#fff1b2",
          height: "36px",
          minWidth: "max-content",
        }}
        aria-label="Open Menu"
      >
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-lg"
        >
          <RiMenuFill />
        </motion.span>
        <span className="text-sm font-semibold tracking-widest">MENU</span>
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,241,178,0.12), transparent)",
            width: "60%",
          }}
        />
      </motion.button>

      {/* Overlay + Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-500"
              style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
              onClick={() => setIsOpen(false)}
            />

            {/* Bottom Sheet Panel */}
            <motion.div




key="panel"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-600 rounded-t-3xl overflow-hidden pb-safe"
              style={{
                background: "linear-gradient(160deg, #1a0101 0%, #2D0404 60%, #3d0606 100%)",
                border: "1px solid rgba(255,241,178,0.1)",
                borderBottom: "none",
                boxShadow: "0 -8px 40px rgba(0,0,0,0.5)",
              }}
            >
              {/* Handle bar */}
              <div className="flex justify-center pt-3 pb-1">
                <motion.div
                  className="w-10 h-1 rounded-full"
                  style={{ background: "rgba(255,241,178,0.25)" }}
                />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-5 pt-2 pb-4">
                <div>
                  <p className="text-[#fff1b2] font-bold text-base tracking-wide">Navigasi</p>
                  <p className="text-[#ffd3d3] text-[11px] mt-0.5 opacity-70">Pilih halaman yang ingin dituju</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.85, rotate: 90 }}
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,241,178,0.15)",
                    color: "#fff1b2",
                  }}
                >
                  <AiOutlineClose className="text-base" />
                </motion.button>
              </div>

              {/* Divider */}
              <div className="mx-5 mb-4 h-px" style={{ background: "rgba(255,241,178,0.08)" }} />

              {/* Menu Grid */}
              <div className="grid grid-cols-4 gap-3 px-5 pb-8">
                {menu.map((item, i) => {
                  const isActive = currentPath === item.link;
                  return (
                    <motion.div
                      key={item.id}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to={item.link}
                        onClick={() => setIsOpen(false)}
                        className="flex flex-col items-center gap-1.5 py-3 px-1 rounded-2xl relative overflow-hidden transition-all duration-200"
                        style={{
                          background: isActive
                            ? "linear-gradient(135deg, rgba(236,73,108,0.35), rgba(173,25,25,0.4))"
                            : "rgba(255,255,255,0.04)",
                          border: isActive
                            ? "1px solid rgba(255,241,178,0.35)"
                            : "1px solid rgba(255,241,178,0.07)",
                          boxShadow: isActive
                            ? "0 0 18px rgba(236,73,108,0.25), inset 0 0 12px rgba(255,241,178,0.05)"
                            : "none",
                        }}
                      >
                        {/* Active glow pulse */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                              background: "radial-gradient(circle at center, rgba(236,73,108,0.2), transparent 70%)",
                            }}
                          />
                        )}

                        {/* Icon container */}
                        <motion.div
                          animate={isActive ? { scale: [1, 1.12, 1] } : { scale: 1 }}
                          transition={isActive ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
                          className="flex items-center justify-center w-9 h-9 rounded-xl"
                          style={{
                            background: isActive
                              ? "linear-gradient(135deg, #ec496c, #AD1919)"
                              : "rgba(255,241,178,0.07)",
                            color: isActive ? "#fff1b2" : "rgba(255,241,178,0.55)",
                            fontSize: "18px",
                            boxShadow: isActive ? "0 4px 12px rgba(236,73,108,0.4)" : "none",
                          }}
                        >
                          {item.icon}
                        </motion.div>

                        {/* Label */}
                        <p
                          className="text-center leading-tight font-medium"
                          style={{
                            fontSize: "9px",
                            color: isActive ? "#fff1b2" : "rgba(255,241,178,0.45)",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {item.title}
                        </p>

                        {/* Active dot */}
                        {isActive && (
                          <motion.div
                            layoutId="active-dot"
                            className="w-1 h-1 rounded-full"
                            style={{ background: "#fff1b2" }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
