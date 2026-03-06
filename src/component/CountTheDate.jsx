import React, { useState, useEffect } from "react";
import ornamenHead from "../assetsU2/ornamenHead.png";
import ulosBottom from "../assetsU2/ulosLimit.png";
import ornamenSide from "../assetsU2/ornamenSide.webp";
import decorationBottom from "../assetsU2/decorationBottom.png";
import background from "../assetsU2/background.webp";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import { FaCalendarDays } from "react-icons/fa6";
import Menu from "./Menu";
import AudioButton from "./AudioButton";

const CountTheDate = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-06-02T08:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#721315] flex justify-center">
      <div className="relative overflow-hidden w-full min-h-screen max-w-[430px] bg-[#AD1919] text-[#fff1b2] shadow-lg rounded-2xl">
        {/* decorations */}
        <div>
          {/* imageBackground */}
          <img
            src={background}
            loading="lazy"
            alt=""
            className="absolute h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

          {/* decorationHead */}
          <div className="absolute z-1 top-0 w-full flex items-center justify-between ">
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

          {/* Side Background */}
          <div className="absolute inset-0 z-0">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 h-full w-[120px]"
              style={{
                backgroundImage: `url(${ornamenSide})`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "contain",
              }}
            />

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute right-0 top-0 h-full w-[120px] scale-x-[-1]"
              style={{
                backgroundImage: `url(${ornamenSide})`,
                backgroundRepeat: "repeat-y",

                backgroundSize: "contain",
              }}
            />
          </div>

          {/* decorationBottom */}
          <div>
            <img
              src={ulosBottom}
              alt=""
              className="absolute z-2 bottom-0 h-20 rounded-b-2xl translate-y-3"
            />
          </div>
          {/* Footer Background */}
          <div className="absolute z-0 bottom-0 w-full flex justify-between -translate-y-15">
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
        </div>

        {/* content */}
        <div className="relative min-h-screen flex flex-col justify-center items-center translate-y-20 text-white">
          {/* desc */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute top-0 flex flex-col justify-center items-center gap-3"
          >
            <h1 className="uppercase text-[32px] text-[#fff1b2]">
              Count The Date
            </h1>
            <div className="border-t w-90 border-[#fff1b2]"></div>
          </motion.div>

          <div className="flex flex-col items-center pt-60 justify-center">
            <div className="absolute flex flex-col items-center top-0 translate-y-20 text-[#fff1b2]">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="font2 text-[40px]"
              >
                The Wedding Of
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="font2 text-[66px]"
              >
                Yosep & Devy
              </motion.h1>
            </div>

            {/* countingDate */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="w-98 h-40 bg-[#AD1919]/30 rounded-[3px] flex justify-center"
            >
              <div className="flex justify-between mx-3 gap-5 items-center">
                <div className="w-18 h-18 bg-[#ffb8b8] text-[#AD1919] flex flex-col items-center justify-center rounded-xl">
                  <h1 className="text-center text-2xl">
                    {String(timeLeft.days).padStart(2, "0")}
                  </h1>
                  <p className="text-center text-sm">Hari</p>
                </div>
                <div className="w-18 h-18 bg-[#ffb8b8] text-[#AD1919] flex flex-col items-center justify-center rounded-xl">
                  <h1 className="text-center text-2xl">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </h1>
                  <p className="text-center text-sm">Jam</p>
                </div>
                <div className="w-18 h-18 bg-[#ffb8b8] text-[#AD1919] flex flex-col items-center justify-center rounded-xl">
                  <h1 className="text-center text-2xl">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </h1>
                  <p className="text-center text-sm">Menit</p>
                </div>
                <div className="w-18 h-18 bg-[#ffb8b8] text-[#AD1919] flex flex-col items-center justify-center rounded-xl">
                  <h1 className="text-center text-2xl">
                    {" "}
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </h1>
                  <p className="text-center text-sm">Detik</p>
                </div>
              </div>
            </motion.div>

            {/* buttonCalender */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="pt-10"
            >
              <button className="bg-[#ffb8b8] text-[#AD1919] w-55 h-10 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#AD1919] hover:text-[#ffb7dc] transition-all duration-200 ease-in-out cursor-pointer">
                <FaCalendarDays />
                <h1>SIMPAN DI KALENDER</h1>
              </button>
            </motion.div>

            {/* text */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <p className="w-90 text-center text-[#fff1b2] text-xl py-15">
                Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
                berkenan hadir dalam hari bahagia kami. Terima kasih segala
                ucapan, doa, dan perhatian yang diberikan
              </p>
            </motion.div>

            {/* goodBye */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="pb-80"
            >
              <p className="flex text-center font2 text-6xl text-[#fdd1d1]">
                See You In <br /> Our Wedding
              </p>
            </motion.div>
          </div>
        </div>

          {/* Button */}
        <div className="relative z-10 flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex relative z-40 bottom-0 -translate-y-35 justify-center w-full"
          >
            <div className="flex gap-3 items-center bottom-0 text-white">
              {/* Menu Button */}
              <Menu />
              {/* Next Page */}
              <Link to="/home" className="flex items-center gap-2">
                <button className="flex justify-center items-center w-9 h-9 rounded-2xl bg-[#AD1919] hover:bg-[#d12222] transition-all ease-in-out duration-300 cursor-pointer shrink-0">
                  <FiArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Audio Button */}
          <div className="fixed flex justify-center z-200 top-0 right-0 translate-y-5 -translate-x-2">
            <AudioButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountTheDate;
