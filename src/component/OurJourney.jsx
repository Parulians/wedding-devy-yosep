import React from "react";
import ornamenHead from "../assetsU2/ornamenHead.png";
import ulosBottom from "../assetsU2/ulosLimit.png";
import background from "../assetsU2/background.webp";
import gallery1 from "../assetsU2/photo-6.webp";
import gallery2 from "../assetsU2/photo-5.webp";
import gallery3 from "../assetsU2/photo-2.webp";
import pin from "../assetsU2/pin.png";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import { GiGloves } from "react-icons/gi";
import AudioButton from "./AudioButton";
import Menu from "./Menu";

const OurJourney = () => {
  return (
    <div className="w-full min-h-screen bg-[#721315] flex justify-center">
      <div className="relative overflow-hidden w-full max-w-[430px] bg-[#AD1919] text-[#fff1b2] min-h-screen shadow-lg rounded-2xl">
        {/* backgroundImage */}
        <img
          src={background}
          loading="lazy"
          alt="background"
          className="absolute w-full h-full rounded-2xl  opacity-60"
        />
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

        {/* decorationHead */}
        <div className="absolute  top-0 w-full flex items-center justify-between ">
          <img
            src={ornamenHead}
            alt="Head Decoration"
            className="w-42 object-cover h-50 rounded-t-2xl"
          />
          <img
            src={ornamenHead}
            alt="Head Decoration"
            className="w-42 object-cover h-50 rounded-t-2xl transform scale-x-[-1] right-0 "
          />
        </div>

        {/* Content */}
        <div className="flex justify-center flex-col relative top-20 z-4 min-h-screen">
          {/* desc */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col text-center items-center gap-3 top-0 text-white"
          >
            <p className="text-xs tracking-[0.3em] text-[#ffd3d3] font-medium uppercase">
              Kisah Pertemuan
            </p>
            <h1 className="text-[36px] font-bold text-[#fff1b2] leading-tight">
              CINTA KAMI
            </h1>
            <div className="flex items-center gap-3 w-full justify-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#fff1b2]/40" />
              <GiGloves className="text-[#fff1b2] text-lg" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#fff1b2]/40" />
            </div>
          </motion.div>

          <div className="relative z-4 flex flex-col items-center gap-15 pt-10 pb-65 justify-center">
            {/* desc1 */}
            <div className="flex">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="translate-y-10"
              >
                <h1 className="font2 text-[32px] text-center w-30">
                  Agustus 2021
                </h1>
                <div className="border-1"></div>
                {/* decorations */}
                <div>
                  <motion.img
                    initial={{ opacity: 0, rotate: -8 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{
                      duration: 3.6,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    src={gallery1}
                    alt="Photo 1"
                    className="absolute z-1 w-25 top-0 left-0 translate-y-18 rotate-15 shadow-sm"
                  />

                  <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    src={pin}
                    alt="Pin"
                    className="absolute w-10 top-0 left-0 z-2 translate-y-12 translate-x-3 "
                  />
                </div>
              </motion.div>
              <div className="">
                <motion.div
                  initial={{ opacity: 0, y: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="h-6 w-6 bg-[#fff1b2] rounded-4xl"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="absolute border-l-3 h-140 translate-x-[11px] origin-top"
                ></motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="w-55 flex flex-col items-center gap-3 bg-[#AD1919]/30 p-4 rounded-[3px] translate-y-10"
              >
                <h1 className="font-bold text-4xl text-center">Awal Bertemu</h1>
                <p className="font3 text-center text-lg text-white">
                  Berawal dari pertemuan sederahana di sebuah gereja yang kecil,
                  dan di tempatkan dalam 1 kepanitiaan yang sama pada sebuah
                  Event yang di buat pada tahun 2021, sehingga menjadi awal dari
                  cerita panjang yang penuh makna. Dari perkenalan singkat,
                  tumbuh rasa nyaman yang tak terduga.
                </p>
              </motion.div>
            </div>

            {/* desc2 */}
            <div className="flex">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="translate-y-10"
              >
                <h1 className="font2 text-[32px] text-center w-30">
                  Januari 2025
                </h1>
                <div className="border-1"></div>
                {/* decorations */}
                <div>
                  <motion.img
                    initial={{ opacity: 0, rotate: -15 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{
                      duration: 3.6,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    src={gallery2}
                    alt="Photo 1"
                    className="absolute z-1 w-28 top-0 left-0 translate-y-18 -translate-x-1 rotate-15 shadow-sm"
                  />
                  <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    src={pin}
                    alt="Pin"
                    className="absolute w-10 top-0 left-0 z-2 translate-y-12 "
                  />
                </div>
              </motion.div>
              <div className="">
                <motion.div
                  initial={{ opacity: 0, y: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="h-6 w-6 bg-[#fff1b2] rounded-4xl"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="absolute border-l-3 h-120 translate-x-[11px] origin-top"
                ></motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="w-55 flex flex-col items-center gap-3 bg-[#AD1919]/30 p-4 rounded-[3px] translate-y-10"
              >
                <h1 className="font-bold text-4xl text-center">
                  Berkomitmen Bersama
                </h1>
                <p className="font3 text-center text-lg text-white">
                  Seiring berjalannya waktu, kami bisa belajar untuk saling
                  memahami, saling menerima, dan saling menguatkan. Dalam doa
                  dan keyakinan, kami memutuskan untuk berjalan bersama dalam
                  satu tujuan yang sama.
                </p>
              </motion.div>
            </div>

            {/* desc3 */}
            <div className="flex">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="translate-y-10"
              >
                <h1 className="font2 text-[32px] text-center w-30">
                  April 2026
                </h1>
                <div className="border-1"></div>
                {/* decorations */}
                <div>
                  <motion.img
                    initial={{ opacity: 0, rotate: -15 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{
                      duration: 3.6,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    src={gallery3}
                    alt="Photo 1"
                    className="absolute z-1 w-29 top-0 left-0 translate-y-19 rotate-15 shadow-sm"
                  />
                  <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    src={pin}
                    alt="Pin"
                    className="absolute w-10 top-0 left-0 z-2 translate-y-12 "
                  />
                </div>
              </motion.div>
              <div className="">
                <motion.div
                  initial={{ opacity: 0, y: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="h-6 w-6 bg-[#fff1b2] rounded-4xl"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="absolute border-l-3 h-105 translate-x-[11px] origin-top"
                ></motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="w-55 flex flex-col items-center gap-3 bg-[#AD1919]/30 p-4 rounded-[3px] translate-y-10"
              >
                <h1 className="font-bold text-4xl text-center">
                  Hendak Menikah
                </h1>
                <p className="font3 text-center text-lg text-white">
                  Dan pada akhirnya sama sama komitmen dan memutuskan untuk
                  melangkah bersama di dalam ikatan suci pernikahan yang akan di
                  laksanakan pada 11 april 2026 nanti.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex relative z-100 bottom-0 mb-20 -translate-y-35 justify-center"
          >
            <div className="flex gap-3 items-center bottom-0 text-white">
              {/* Menu Button */}
              <Menu />
              {/* Next Page */}
              <Link to="/gallery">
                <button className="flex justify-center items-center w-9 h-9 rounded-2xl bg-[#AD1919] hover:bg-[#d12222] transition-all ease-in-out duration-300 cursor-pointer">
                  <FiArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* decorationBottom */}
        <div className="relative">
          <motion.img
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            src={ulosBottom}
            alt=""
            className="absolute z-1 h-20 bottom-0 rounded-b-2xl translate-y-3"
          />
        </div>

        {/* Audio Button */}
        <div className="fixed flex justify-center absolute z-200 top-0 right-0 translate-y-5 -translate-x-2">
          <AudioButton />
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
