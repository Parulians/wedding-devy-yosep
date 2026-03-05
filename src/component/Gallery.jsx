import React, { useState } from "react";
import ornamenHead from "../assetsU2/ornamenHead.png";
import decorationSide from "../assetsU2/decorationSide.png";
import ornamenSide from "../assetsU2/ornamenSide.webp";
import ulosBottom from "../assetsU2/ulosLimit.png";
import decorationBottom from "../assetsU2/decorationBottom.png";
import background from "../assetsU2/background.webp";
import prewedTop1 from "../assetsU2/photo-5.webp";
import prewedTop2 from "../assetsU2/photo-2.webp";
import prewedBot1 from "../assetsU2/photo-1.webp";
import prewedBot2 from "../assetsU2/photo-4.webp";
import prewedMid1 from "../assetsU2/photo-3.webp";
import prewedMid2 from "../assetsU2/photo-4.webp";
import prewedMid3 from "../assetsU2/photo-6.webp";
import prewedMid4 from "../assetsU2/photo-1.webp";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import AudioButton from "./AudioButton";
import Menu from "./Menu";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageTop = [
    { id: 1, imgSrc: prewedTop2 },
    { id: 2, imgSrc: prewedTop1 },
  ];

  const imageMiddle = [
    { id: 1, imgSrc: prewedMid1 },
    { id: 2, imgSrc: prewedMid2 },
    { id: 3, imgSrc: prewedMid3 },
    { id: 4, imgSrc: prewedMid4 },
  ];

  const imageBottom = [
    { id: 1, imgSrc: prewedBot1 },
    { id: 2, imgSrc: prewedBot2 },
  ];

  return (
    <div className="w-full min-h-screen bg-[#721315] flex justify-center">
      <div className="relative overflow-hidden w-full max-w-[430px] bg-[#AD1919] text-[#fff1b2] min-h-screen shadow-lg rounded-2xl">
        {/* Background */}
        <img
          src={background}
          loading="lazy"
          alt=""
          className="absolute z-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

        {/* Decoration - Head */}
        <div className="absolute top-0 w-full flex items-center justify-between z-10">
          <img
            src={ornamenHead}
            alt="Head Decoration"
            className="w-42 object-cover h-50 rounded-t-2xl"
          />
          <img
            src={ornamenHead}
            alt="Head Decoration"
            className="w-42 object-cover h-50 rounded-t-2xl transform scale-x-[-1]"
          />
        </div>

        {/* Decoration - Bottom */}
        <motion.img
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          src={ulosBottom}
          className="absolute z-10 bottom-0 w-full h-20 object-cover rounded-b-2xl"
        />

        {/* Footer Background */}
        <div className="absolute z-0 bottom-0 w-full flex justify-between -translate-y-17">
          <img
            src={decorationBottom}
            alt="footer decoration"
            className="w-40 h-full object-cover rounded-2xl opacity-70"
          />
          <img
            src={decorationBottom}
            alt="footer decoration"
            className="w-40 h-full object-cover rounded-2xl opacity-70 transform scale-x-[-1]"
          />
        </div>

        {/* Content */}
        <div className="relative pb-20 z-10">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col text-center items-center gap-3 mt-20 text-white"
          >
            <h1 className="text-[32px] text-[#fff1b2]">
              OUR GALLERY <br /> PRE-WEDDING
            </h1>
            <div className="border-t w-90 border-[#fff1b2]"></div>
          </motion.div>

          {/* IMAGE TOP */}
          <div className="flex gap-5 px-15 mt-10 overflow-auto">
            {imageTop.map((item) => (
              <img
                key={item.id}
                src={item.imgSrc}
                loading="lazy"
                alt=""
                onClick={() => setSelectedImage(item.imgSrc)}
                className="cursor-pointer hover:scale-105 transition duration-300 rounded-xl object-cover"
              />
            ))}
          </div>

          {/* IMAGE MIDDLE */}
          <div className="flex gap-5 mx-5 overflow-hidden mt-10">
            <motion.div
              className="flex gap-5 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            >
              {[...imageMiddle, ...imageMiddle].map((item, index) => (
                <img
                  key={index}
                  src={item.imgSrc}
                  loading="lazy"
                  alt=""
                  onClick={() => setSelectedImage(item.imgSrc)}
                  className="w-[200px] h-[200px] object-cover flex-shrink-0 cursor-pointer hover:scale-105 transition duration-300 rounded-xl"
                />
              ))}
            </motion.div>
          </div>

          {/* IMAGE BOTTOM */}
          <div className="flex gap-5 px-9 mt-10 mb-10 overflow-auto">
            {imageBottom.map((item) => (
              <img
                key={item.id}
                src={item.imgSrc}
                loading="lazy"
                alt=""
                onClick={() => setSelectedImage(item.imgSrc)}
                className="w-full h-100 object-cover cursor-pointer hover:scale-105 transition duration-300 rounded-xl"
              />
            ))}
          </div>
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex relative z-100 bottom-0 pt-40 -translate-y-35 justify-center"
        >
          <div className="flex gap-3 bottom-0 text-white">
            {/* Menu Button */}
            <Menu />
            {/* Next Page */}
            <Link to="/weddingWish">
              <button className="flex justify-center items-center w-9 h-9 rounded-2xl bg-[#AD1919] hover:bg-[#d12222] transition-all ease-in-out duration-300 cursor-pointer">
                <FiArrowRight className="text-2xl" />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Audio Button */}
        <div className="absolute z-50 top-5 right-5">
          <AudioButton />
        </div>

        {/* MODAL PREVIEW */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Preview"
              className="max-w-[90%] max-h-[85%] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
