import React from "react";
import ornamenHead from "../assetsU2/ornamenHead.png";
import ulosBottom from "../assetsU2/ulosLimit.png";
import ornamenSide from "../assetsU2/ornamenSide.webp";
import decorationBottom from "../assetsU2/decorationBottom.png";
import pigeon from "../assetsU2/pigeon.webp";
import butterfly from "../assetsU2/butterfly.webp";
import background from "../assetsU2/background.webp";
import CreditCardEko from "./CreditCard-Eko";
import CreditCardDevy from "./CreditCard-Devy";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { easeInOut, motion } from "framer-motion";
import AudioButton from "./AudioButton";
import Menu from "./Menu";

const WeddingWish = () => {
  const dummyComment = [
    {
      id: 1,
      icon: <IoMdHeart />,
      styleColor:
        "bg-[#ffd3d3] text-[#AD1919] border border-[#AD1919] shadow-xl",
      iconStyle: "bg-[#AD1919] text-[#ffd3d3]",
      relation: "Keluarga",
      name: "Steven Yudianto",
      desc: "Selamat menikah untuk Yosep & Devy",
      hours: "2 Jam yang lalu",
    },
    {
      id: 2,
      icon: <FaUserFriends />,
      styleColor: "bg-blue-200 text-black border border-black shadow-xl",
      iconStyle: "bg-black text-blue-200",
      relation: "Sahabat",
      name: "Ricardo",
      desc: "Selamat menempuh hidup baru! Bahagia selalu untuk kalian berdua",
      hours: "3 Jam yang lalu",
    },
    {
      id: 3,
      icon: <FaSuitcase />,
      styleColor: "bg-teal-200 text-blue-700 border border-blue-700 shadow-xl",
      iconStyle: "bg-blue-700 text-teal-200",
      relation: "Rekan",
      name: "Askar",
      desc: "Semoga pernikahan kalian menjadi awal dari kebahagiaan yang abadi. Selamat!",
      hours: "4 Jam yang lalu",
    },
    {
      id: 4,
      icon: <FaHandshakeSimple />,
      styleColor:
        "bg-[#ec496c] text-[#fff1b2] border border-[#fff1b2] shadow-xl",
      iconStyle: "bg-[#fff1b2] text-[#ec496c]",
      relation: "Lainnya",
      name: "Ikhsan Skuter",
      desc: "Barakallah! Semoga menjadi keluarga yang sakinah, mawaddah, wa rahmah. Aamiin",
      hours: "5 Jam yang lalu",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#721315] flex justify-center">
      <div className="relative overflow-hidden w-full max-w-[430px] bg-[#AD1919] text-[#fff1b2] min-h-screen shadow-lg rounded-2xl">
        {/* decorations */}
        <div>
          {/* imageBackground */}
          <img
            src={background}
            loading="lazy"
            alt=""
            className="absolute z-0  w-full h-full object-cover opacity-60"
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

          {/* decorationFooter */}
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

          {/* decorationBottom */}
          <div className="flex justify-center">
            <img
              src={ulosBottom}
              alt=""
              className="absolute z-1 h-20 bottom-0 rounded-b-2xl translate-y-3"
            />
          </div>
        </div>

        {/* content */}
        <div className="relative flex flex-col justify-center items-center translate-y-20 min-h-screen text-white">
          {/* desc */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute flex flex-col items-center text-center gap-3 top-0 "
          >
            <h1 className="text-[32px] text-[#fff1b2]">
              WEDDING WISH &<br />
              WEDDING GIFT
            </h1>
            <div className="border-t w-90 border-[#fff1b2]"></div>
          </motion.div>

          {/* Wedding Wish */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center gap-5 pb-15 translate-y-25"
          >
            {/* pigeon */}
            <div>
              <motion.img
                animate={{ rotate: 5 }}
                initial={{ rotate: -5 }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                viewport={{ once: true }}
                src={pigeon}
                alt=""
                className="absolute z-20 h-23 top-0 left-0 translate-y-17 -translate-x-10"
              />
            </div>
            {/* butterfly */}
            <div>
              <motion.img
                animate={{ rotate: 5 }}
                initial={{ rotate: -5 }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                viewport={{ once: true }}
                src={butterfly}
                alt=""
                className="absolute z-20 h-22 bottom-0 right-0 translate-x-10 -translate-y-10"
              />
            </div>
            <h1 className="font2 text-6xl text-[#fff1b2]">Wedding Wish</h1>
            <div className="bg-[#AD1919]/30 relative z-0 flex flex-col items-center gap-5 w-85 h-full py-5 rounded-[3px] text-[#fff1b2]">
              {/* Container Wedding Wish */}
              <div className="flex flex-col items-center pt-5 gap-3 overflow-auto">
                <label>HUBUNGAN</label>
                <div className="flex gap-3">
                  <button className="bg-[#fff1b2] text-[#ec496c] flex flex-col items-center rounded-full px-3 py-2 hover:bg-[#ec496c] hover:text-[#fff1b2] transition-all duration-200 ease-in-out cursor-pointer">
                    <IoMdHeart />
                    <p>Keluarga</p>
                  </button>
                  <button className="bg-[#fff1b2] text-[#ec496c] flex flex-col items-center rounded-full px-3 py-2 hover:bg-[#ec496c] hover:text-[#fff1b2] transition-all duration-200 ease-in-out cursor-pointer">
                    <FaUserFriends />
                    <p>Sahabat</p>
                  </button>
                  <button className="bg-[#fff1b2] text-[#ec496c] flex flex-col items-center rounded-full px-3 py-2 hover:bg-[#ec496c] hover:text-[#fff1b2] transition-all duration-200 ease-in-out cursor-pointer">
                    <FaSuitcase />
                    <p>Rekan</p>
                  </button>
                  <button className="bg-[#fff1b2] text-[#ec496c] flex flex-col items-center rounded-full px-3 py-2 hover:bg-[#ec496c] hover:text-[#fff1b2] transition-all duration-200 ease-in-out cursor-pointer">
                    <FaHandshakeSimple />
                    <p>Lainnya</p>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <label>NAMA</label>
                <input
                  name=""
                  id=""
                  className="bg-white rounded-2xl w-60 h-8 text-black px-3 outline-none font3"
                ></input>
              </div>
              <div className="flex flex-col items-center gap-2">
                <label>UCAPAN</label>
                <textarea
                  name=""
                  id=""
                  className="bg-white rounded-2xl w-60 h-45 py-2 text-black px-3 outline-none font3"
                ></textarea>
              </div>
              <div className="flex items-center justify-center py-5">
                <button className="w-40 h-12 rounded-4xl text-[#AD1919] bg-[#ffb8b8] hover:bg-[#d12222] hover:text-[#FFF1B2] transition-all duration-200 ease-in-out cursor-pointer">
                  <h1 className="text-xl">KIRIM</h1>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Comment */}
          <div className="bg-white/30 backdrop-blur-sm p-10 translate-y-25 flex flex-col items-center justify-center gap-5 w-85 rounded-[3px] text-[#fff1b2]">
            <div className="flex w-full gap-10 justify-between items-center text-center">
              <p className="text-xl w-full">Doa Teman & Kerabat</p>
              <p className="w-full p-2 bg-red-500 rounded-full">4 Ucapan</p>
            </div>
            {dummyComment.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col gap-2 p-3 ${item.styleColor} w-full h-full rounded-tl-2xl rounded-br-2xl text-center`}
              >
                <div className="flex justify-between">
                  <div
                    className={`flex items-center gap-2 px-2 rounded-xl ${item.iconStyle}`}
                  >
                    <div>{item.icon}</div>
                    <p>{item.relation}</p>
                  </div>
                  <p>{item.hours}</p>
                </div>
                <p>{item.name}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Wedding Gift */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center gap-5 min-h-screen translate-y-25 pb-100"
          >
            {/* pigeon */}
            <div>
              <motion.img
                animate={{ rotate: 5 }}
                initial={{ rotate: -5 }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                viewport={{ once: true }}
                src={pigeon}
                alt=""
                className="absolute z-20 h-23 top-0 left-0 translate-y-17 -translate-x-10"
              />
            </div>
            {/* butterfly */}
            <div>
              <motion.img
                animate={{ rotate: 5 }}
                initial={{ rotate: -5 }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                viewport={{ once: true }}
                src={butterfly}
                alt=""
                className="absolute z-50 h-22 bottom-0 right-10 translate-x-20 -translate-y-95"
              />
            </div>
            <h1 className="font2 text-6xl text-[#fff1b2]">Wedding Gift</h1>
            <div className="bg-[#AD1919]/30 relative z-0 flex flex-col items-center gap-5 w-85 h-auto py-5 rounded-[3px] text-[#fff1b2]">
              <div className="flex flex-col items-center px-5 gap-2">
                <p className="text-center">
                  Doa dan restu anda merupakan karunia dan keberkahan untuk
                  memulai perjalanan bahtera rumah tangga kami. Kami sangat
                  menghargai setiap pemberian hati anda untuk keluarga kecil
                  kami sehingga apabila anda ingin mengirim hadiah dan ungkapan
                  selamat, anda bisa klik tombol dibawah ini
                </p>

                {/* Card Eko */}
                <div className="w-full translate-y-6 flex justify-center">
                  <div className="flex flex-col gap-6 pb-5 w-full max-x-[360px]">
                    <CreditCardEko />
                    <div className="flex flex-col items-center text-xl">
                      <h1>a/n EKO SAHAT TUA YOSEP M</h1>
                      <h1>BCA</h1>
                      <p>6281862216</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p></p>
                </div>

                {/* Card Devy */}
                <div className="w-full translate-y-6 flex justify-center">
                  <div className="flex flex-col gap-6 pb-5 w-full max-x-[360px]">
                    <CreditCardDevy />
                    <div className="flex flex-col items-center text-xl">
                      <h1>a/n DEVY JULIETHA</h1>
                      <h1>MANDIRI</h1>
                      <p>1290015276047</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative z-30 pb-10 flex justify-center text-[#fff1b2]"
          >
            <h1 className="uppercase -translate-y-62 text-center text-xl mx-10">
              kirimkan ucapan dan doa serta hadiah kepada kedua mempelai
            </h1>
          </motion.div>
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex relative z-40 bottom-0 -translate-y-35 justify-center"
        >
          <div className="flex gap-3 bottom-0 text-white">
            {/* Menu Button */}
            <Menu />
            {/* Next Page */}
            <Link to="/countTheDate">
              <button className="flex justify-center items-center w-9 h-9 rounded-2xl bg-[#AD1919] hover:bg-[#d12222] transition-all ease-in-out duration-300 cursor-pointer">
                <FiArrowRight className="text-2xl" />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Audio Button */}
        <div className="fixed flex justify-center absolute z-200 top-0 right-0 translate-y-5 -translate-x-2">
          <AudioButton />
        </div>
      </div>
    </div>
  );
};

export default WeddingWish;
