import React, { useState, useEffect } from "react";
import ornamenHead from "../assetsU2/ornamenHead.png";
import decorationSide from "../assetsU2/decorationSide.png";
import ornamenSide from "../assetsU2/ornamenSide.webp";
import ulosBottom from "../assetsU2/ulosLimit.png";
import slider from "../assetsU2/slider.webp";
import pigeon from "../assetsU2/pigeon.webp";
import halaman1 from "../assetsU2/halaman1.jpeg";
import halaman2 from "../assetsU2/halaman2.jpeg";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { useAudio } from "./AudioContext";

/**
 * Membaca nilai param dari query string secara mentah (raw),
 * sehingga karakter '&' di dalam nilai TIDAK diinterpretasikan
 * sebagai pemisah parameter URL.
 *
 * Contoh:
 *   URL: ?tamu=Askar & Qiara  → "Askar & Qiara"  ✓
 *   URL: ?tamu=Askar%20%26%20Qiara → "Askar & Qiara"  ✓
 */
const getRawParam = (paramName) => {
  const search = window.location.search; // e.g. "?tamu=Askar & Qiara"
  const key = paramName + "=";
  const idx = search.indexOf(key);
  if (idx === -1) return null;
  // Ambil semua karakter setelah "tamu=" hingga akhir string
  const raw = search.slice(idx + key.length);
  // Decode karakter yang sengaja di-encode (%20, %26, dst)
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
};

const Invitation = () => {
  const navigate = useNavigate();
  const { play } = useAudio();
  const namaTamu = getRawParam("tamu") || "Tamu Undangan";

  const handleOpen = () => {
    play();
    navigate("/home");
  };

  const sliderLeft = {
    closed: { x: 0 },
    open: { x: "-100%", transition: { duration: 1.2, ease: "easeInOut" } },
  };
  const sliderRight = {
    closed: { x: 0 },
    open: { x: "100%", transition: { duration: 1.2, ease: "easeInOut" } },
  };

  const [isHordeng, setHordeng] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHordeng(true);
    }, 500);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#721315] flex justify-center">
      <div className="relative w-full max-w-md bg-[#AD1919] text-[#fff1b2] min-h-screen shadow-2xl rounded-2xl overflow-hidden">
        {/* slider */}
        <motion.div
          animate={isHordeng ? "open" : "closed"}
          variants={sliderLeft}
          className="fixed w-1/2 overflow-hidden z-50 left-0 top-0"
        >
          <img
            src={slider}
            alt=""
            className="w-full h-screen object-cover left-0"
          />
        </motion.div>
        <motion.div
          animate={isHordeng ? "open" : "closed"}
          variants={sliderRight}
          className="fixed w-1/2 overflow-hidden z-50 right-0 top-0"
        >
          <img
            src={slider}
            alt=""
            className="w-full h-screen object-cover right-0 transform scale-x-[-1]"
          />
        </motion.div>

        <img
          src={halaman1}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 z-10 bg-black/10 rounded-2xl"></div>

        <div className="relative z-20 h-full flex flex-col items-center justify-between">
          <div className="absolute z-100 top-0 w-full flex items-center justify-center ">
            <img
              src={ornamenHead}
              alt="Head Decoration"
              className="w-full object-cover h-50 rounded-t-2xl"
            />
            <img
              src={ornamenHead}
              alt="Head Decoration"
              className="w-full object-cover h-50 rounded-t-2xl transform scale-x-[-1] right-0 "
            />
          </div>

          {/* flower Background Side */}
          <div>
            <img
              src={ornamenSide}
              alt="Flower Side Decoration Right"
              className="h-200 absolute left-0 opacity-90"
            />
            <img
              src={ornamenSide}
              alt="Flower Side Decoration Left"
              className="h-200 absolute transform scale-x-[-1] right-0 opacity-90"
            />
          </div>

          <div className="absolute top-1/4 w-full flex justify-between items-start">
            <motion.img
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src={decorationSide}
              alt="Flower Side Decoration Left"
              className="h-40 opacity-90"
            />
            <motion.img
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src={decorationSide}
              alt="Flower Side Decoration Right"
              className="h-40 transform scale-x-[-1] opacity-90"
            />
          </div>

          <div className="absolute bottom-0 translate-y-3 w-full flex justify-center">
            <img
              src={ulosBottom}
              alt="Bottom Decoration"
              className="w-full rounded-b-2xl h-25"
            />
          </div>

          <div className="relative w-full pt-35 pb-40 flex flex-col items-center">
            <div className="relative w-full max-w-xs h-72 flex justify-center items-center">
              {/* name Groom & Bride */}
              <div className="absolute inset-0 flex flex-col justify-center items-center z-40 -translate-y-15 text-[#fff1b2]">
                {/* Men */}
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                  className="font2 text-7xl absolute top-1/4 transform -translate-y-1/2"
                >
                  Yosep
                </motion.h1>

                {/* & */}
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                  className="font2 text-7xl absolute top-1/2 transform -translate-y-1/2"
                >
                  &
                </motion.h1>

                {/* Women */}
                <motion.h1
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                  className="font2 text-7xl absolute bottom-1/4 transform translate-y-1/2"
                >
                  Devy
                </motion.h1>
              </div>
            </div>

            <div className="mt-8 pt-4 flex flex-col items-center text-center">
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.2, ease: "anticipate" }}
                className="text-xl mb-2 z-40"
              >
                11.04.2026
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.2, ease: "anticipate" }}
                className="text-2xl mb-8 z-40 text-center px-4"
              >
                {namaTamu}
              </motion.h1>

              <Link to="/home" className="z-40">
                <motion.button
                  onClick={handleOpen}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: "easeIn" }}
                  className="bg-[#AD1919] w-56 h-12 rounded-full hover:bg-[#d12222] transition-all ease-in-out duration-300 cursor-pointer flex items-center justify-center"
                >
                  <h1 className="text-lg text-white">Buka Undangan</h1>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <motion.img
            animate={{ y: [0, -22, 0], x: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src={pigeon}
            alt="Animated Pigeon"
            className="absolute z-10 top-15 h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Invitation;
