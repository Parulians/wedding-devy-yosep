import React, { useState, useEffect, useCallback } from "react";
import ornamenHead from "../assetsU2/ornamenHead.png";
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
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoImagesOutline } from "react-icons/io5";
import AudioButton from "./AudioButton";
import Menu from "./Menu";

const allPhotos = [
  { id: 1, src: prewedTop2, span: "row-span-2" },
  { id: 2, src: prewedTop1, span: "row-span-1" },
  { id: 3, src: prewedMid1, span: "row-span-1" },
  { id: 4, src: prewedMid3, span: "row-span-2" },
  { id: 5, src: prewedMid2, span: "row-span-1" },
  { id: 6, src: prewedBot1, span: "row-span-1" },
  { id: 7, src: prewedMid4, span: "row-span-1" },
  { id: 8, src: prewedBot2, span: "row-span-2" },
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const isOpen = lightboxIndex !== null;
  const total = allPhotos.length;

  const openLightbox = (index) => {
    setDirection(0);
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setDirection(1);
    setLightboxIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setLightboxIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, goNext, goPrev]);

  // Touch/swipe support
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
    setTouchStart(null);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.92 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.92 }),
  };

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
        <div className="absolute inset-0 bg-black/40 rounded-2xl" />

        {/* Side ornament */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute left-0 top-0 h-full w-[90px] opacity-40"
            style={{
              backgroundImage: `url(${ornamenSide})`,
              backgroundRepeat: "repeat-y",
              backgroundSize: "contain",
            }}
          />
          <div
            className="absolute right-0 top-0 h-full w-[90px] opacity-40 scale-x-[-1]"
            style={{
              backgroundImage: `url(${ornamenSide})`,
              backgroundRepeat: "repeat-y",
              backgroundSize: "contain",
            }}
          />
        </div>

        {/* Decoration Head */}
        <div className="absolute top-0 w-full flex items-center justify-between z-10 pointer-events-none">
          <img src={ornamenHead} alt="" className="w-42 object-cover h-50 rounded-t-2xl" />
          <img src={ornamenHead} alt="" className="w-42 object-cover h-50 rounded-t-2xl transform scale-x-[-1]" />
        </div>

        {/* Decoration Bottom */}
        <motion.img
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          src={ulosBottom}
          className="absolute z-10 bottom-0 w-full h-20 object-cover rounded-b-2xl pointer-events-none"
        />
        <div className="absolute z-0 bottom-0 w-full flex justify-between -translate-y-17 pointer-events-none">
          <img src={decorationBottom} alt="" className="w-40 h-full object-cover rounded-2xl opacity-70" />
          <img src={decorationBottom} alt="" className="w-40 h-full object-cover rounded-2xl opacity-70 transform scale-x-[-1]" />
        </div>

        {/* Content */}
        <div className="relative pb-32 z-10">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col text-center items-center gap-2 mt-22 mb-6 text-white px-5"
          >
            <p className="text-xs tracking-[0.3em] text-[#ffd3d3] font-medium uppercase">Pre-Wedding</p>
            <h1 className="text-[28px] font-bold text-[#fff1b2] leading-tight">
              Our Gallery
            </h1>
            <div className="flex items-center gap-3 w-full justify-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#fff1b2]/40" />
              <IoImagesOutline className="text-[#fff1b2] text-lg" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#fff1b2]/40" />
            </div>
            {/* Photo count badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "linear-gradient(135deg, #ec496c 0%, #AD1919 100%)",
                color: "#fff1b2",
                boxShadow: "0 4px 12px rgba(236,73,108,0.35)",
              }}
            >
              <IoImagesOutline />
              <span>{total} Foto</span>
            </motion.div>
          </motion.div>

          {/* Masonry Grid */}
          <div className="px-4">
            <div className="grid grid-cols-2 gap-2.5 auto-rows-[140px]">
              {allPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  className={`${photo.span} relative overflow-hidden rounded-2xl cursor-pointer group`}
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openLightbox(index)}
                  style={{
                    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  }}
                >
                  <img
                    src={photo.src}
                    loading="lazy"
                    alt={`Gallery photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <IoImagesOutline className="text-white text-[10px]" />
                      </div>
                      <span className="text-white text-[10px] font-medium">
                        {index + 1}/{total}
                      </span>
                    </div>
                  </div>
                  {/* Shimmer border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#fff1b2]/0 group-hover:border-[#fff1b2]/30 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="relative z-10 flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex relative z-40 bottom-0 -translate-y-35 justify-center w-full"
          >
            <div className="flex gap-3 items-center bottom-0 text-white">
              <Menu />
              <Link to="/weddingWish" className="flex items-center gap-2">
                <button className="flex justify-center items-center w-9 h-9 rounded-2xl bg-[#AD1919] hover:bg-[#d12222] transition-all ease-in-out duration-300 cursor-pointer shrink-0">
                  <FiArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Audio Button */}
        <div className="fixed flex justify-center z-200 top-0 right-0 translate-y-5 -translate-x-2">
          <AudioButton />
        </div>

        {/* ====== LIGHTBOX / MODAL PREMIUM ====== */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
              style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Top bar */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 pt-5 pb-3 z-10"
                style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)" }}
              >
                {/* Counter */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold"
                    style={{
                      background: "rgba(255,241,178,0.12)",
                      border: "1px solid rgba(255,241,178,0.25)",
                      color: "#fff1b2",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <IoImagesOutline className="text-base" />
                    <span>{lightboxIndex + 1}</span>
                    <span className="text-[#ffd3d3] font-normal">/ {total}</span>
                  </div>
                </motion.div>

                {/* Close button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileTap={{ scale: 0.85 }}
                  onClick={closeLightbox}
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)",
                    color: "#fff",
                  }}
                >
                  <FiX className="text-xl" />
                </motion.button>
              </div>

              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-20">
                <motion.div
                  key={lightboxIndex}
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #ec496c, #fff1b2)" }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${((lightboxIndex + 1) / total) * 100}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>

              {/* Photo Slide */}
              <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden px-14">
                <AnimatePresence custom={direction} mode="popLayout">
                  <motion.img
                    key={lightboxIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    src={allPhotos[lightboxIndex].src}
                    alt={`Photo ${lightboxIndex + 1}`}
                    className="max-w-full max-h-[70vh] rounded-2xl object-contain"
                    style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={(e, info) => {
                      if (info.offset.x < -60) goNext();
                      else if (info.offset.x > 60) goPrev();
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* Prev / Next Buttons */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                whileTap={{ scale: 0.85 }}
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(10px)",
                  color: "#fff",
                }}
              >
                <FiChevronLeft className="text-2xl" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                whileTap={{ scale: 0.85 }}
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(10px)",
                  color: "#fff",
                }}
              >
                <FiChevronRight className="text-2xl" />
              </motion.button>

              {/* Dot indicators */}
              <div className="absolute bottom-8 flex gap-2 items-center">
                {allPhotos.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => {
                      setDirection(i > lightboxIndex ? 1 : -1);
                      setLightboxIndex(i);
                    }}
                    animate={{
                      width: i === lightboxIndex ? 24 : 6,
                      background: i === lightboxIndex ? "#fff1b2" : "rgba(255,241,178,0.3)",
                    }}
                    transition={{ duration: 0.25 }}
                    className="h-1.5 rounded-full cursor-pointer"
                  />
                ))}
              </div>

              {/* Thumbnail strip */}
              <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto">
                {allPhotos.map((photo, i) => (
                  <motion.div
                    key={i}
                    onClick={() => {
                      setDirection(i > lightboxIndex ? 1 : -1);
                      setLightboxIndex(i);
                    }}
                    animate={{
                      opacity: i === lightboxIndex ? 1 : 0.4,
                      scale: i === lightboxIndex ? 1 : 0.85,
                      borderColor: i === lightboxIndex ? "#fff1b2" : "transparent",
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer border-2"
                  >
                    <img src={photo.src} alt="" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
