import React from "react";
import { useState } from "react";
import ornamenHead from "../assetsU2/ornamenHead.png";
import decorationSide from "../assetsU2/decorationSide.png";
import ulosBottom from "../assetsU2/ulosLimit.png";
import pigeon from "../assetsU2/pigeon.webp";
import butterfly from "../assetsU2/butterfly.webp";
import background from "../assetsU2/background.webp";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import AudioButton from "./AudioButton";
import Menu from "./Menu";
import { Icon } from "@iconify/react";

const Date = () => {
  // Link Google Maps Akurat
  const linkMapsGereja =
    "https://www.google.com/maps/search/?api=1&query=GEREJA+HKBP+Gedong+Jakarta+Timur";
  const linkMapsGedung =
    "https://www.google.com/maps/search/?api=1&query=Gedung+Sopo+Marpingkir+HKBP+Pulo+Gebang";

  return (
    <div className="w-full min-h-screen bg-[#721315] flex justify-center">
      <div className="relative overflow-hidden w-full max-w-[430px] bg-[#AD1919] text-[#FFF1B2] min-h-screen shadow-lg rounded-2xl">
        {/* backgroundImage */}
        <img
          src={background}
          loading="lazy"
          alt="background"
          className="absolute inset-0 z-0 w-full h-full rounded-2xl object-cover opacity-60"
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

        {/* Decoration - Side Floating */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src={decorationSide}
            className="absolute z-3 top-[550px] left-0 h-40"
          />
          <motion.img
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src={decorationSide}
            className="absolute z-3 top-[550px] right-0 h-40 transform scale-x-[-1]"
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

        {/* Animals Animation */}
        <motion.img
          animate={{ y: [0, -52, 0], x: [0, 4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          src={butterfly}
          className="absolute z-4 top-55 left-0 h-20"
        />
        <motion.img
          animate={{ y: [0, -22, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          src={pigeon}
          className="absolute z-4 top-[370px] right-2 h-20"
        />

        {/* Main Content */}
        <div className="relative z-20 flex flex-col items-center pt-21 pb-40 px-6 gap-12 text-center">
          {/* Title Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-3 w-100"
          >
            <p className="text-xs tracking-[0.3em] text-[#ffd3d3] font-medium uppercase">
              Pemberkatan
            </p>
            <h1 className="text-[36px] font-bold text-[#fff1b2] leading-tight">
              RESEPSI
            </h1>
            <div className="flex items-center gap-3 w-full justify-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#fff1b2]/40" />
              <Icon
                icon="fluent-emoji-high-contrast:wedding"
                width="22"
                className="text-[#fff1b2]"
              />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#fff1b2]/40" />
            </div>
          </motion.div>

          {/* Section: Pemberkatan */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <h2 className="font4 text-6xl text-[#FFF1B2]">Pemberkatan</h2>
            <div className="flex flex-col gap-1 text-lg">
              <p className="font-semibold text-xl">Sabtu, 11 April 2026</p>
              <p>Pukul 09.00 WIB - Selesai</p>
              <p className="text-[16px] mt-2 leading-relaxed px-4 uppercase">
                GEREJA HKBP GEDONG RESSORT KRAMAT JATI,
                <br />
                JAKARTA TIMUR
              </p>
            </div>
            {/* Tombol Lokasi Pemberkatan */}
            <a
              href={linkMapsGereja}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-[#ffb8b8] text-[#AD1919] rounded-full font-bold text-sm shadow-lg active:scale-95 transition-all hover:bg-[#FFF1B2]"
            >
              <FiMapPin /> LIHAT LOKASI GEREJA
            </a>
          </motion.div>

          {/* Section: Resepsi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-4 mt-4"
          >
            <h2 className="font4 text-6xl text-[#FFF1B2]">Resepsi</h2>
            <div className="flex flex-col gap-1 text-lg">
              <p className="font-semibold text-xl">Sabtu, 11 April 2026</p>
              <p>Pukul 12.00 WIB - Selesai</p>
              <p className="text-[16px] mt-2 leading-relaxed px-4 uppercase">
                GEDUNG SOPO MARPINGKIR HKBP
                <br />
                Pulo Gebang, Kec. Cakung, Kota Jakarta Timur
              </p>
            </div>
            {/* Tombol Lokasi Resepsi */}
            <a
              href={linkMapsGedung}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-[#ffb8b8] text-[#AD1919] rounded-full font-bold text-sm shadow-lg active:scale-95 transition-all hover:bg-[#FFF1B2]"
            >
              <FiMapPin /> LIHAT LOKASI GEDUNG
            </a>
          </motion.div>
        </div>
        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex relative z-100 bottom-0 pt-20 -translate-y-35 justify-center"
        >
          <div className="flex gap-3 items-center bottom-0 text-white">
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

        {/* Floating Audio Button */}
        <div className="fixed top-5 right-5 z-[100]">
          <AudioButton />
        </div>
      </div>
    </div>
  );
};

export default Date;
