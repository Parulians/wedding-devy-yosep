import React, { useState } from "react";
import ornamenHome from "../assetsU2/ornamenHome.png";
import ornamenHead from "../assetsU2/ornamenHead.png";
import decorationSide from "../assetsU2/decorationSide.png";
import ornamenSide from "../assetsU2/ornamenSide.webp";
import ulosBottom from "../assetsU2/ulosLimit.png";
import decorationBottom from "../assetsU2/decorationBottom.png";
import pigeon from "../assetsU2/pigeon.webp";
import butterfly from "../assetsU2/butterfly.webp";
import background from "../assetsU2/background.webp";
import groom from "../assetsU2/groom-img.webp";
import bride from "../assetsU2/bride-img.webp";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import AudioButton from "./AudioButton";
import Menu from "../component/Menu";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#721315] flex justify-center">
      <div className="relative w-full max-w-md bg-[#AD1919] text-[#fff1b2] min-h-screen shadow-2xl rounded-2xl overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={background}
            loading="lazy"
            alt="background"
            className="w-full h-full object-cover opacity-60 rounded-2xl"
          />
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
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

        {/* Decoration - Fixed Position */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* decorationTop */}
          <div className="absolute z-100 top-0 w-full flex items-center justify-between ">
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

          {/* decorationLeftSide */}
          <motion.img
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={decorationSide}
            alt="flower decoration"
            className="absolute top-[65%] left-0 h-40"
          />

          {/* decorationRightSide */}
          <motion.img
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={decorationSide}
            alt="flower decoration"
            className="absolute top-[26%] right-0 h-40 transform scale-x-[-1]"
          />

          {/* decorationBottom */}
          <div className="absolute z-1 bottom-0 w-full">
            <img
              src={ulosBottom}
              alt="Bottom decoration"
              className="w-full h-20 rounded-b-2xl translate-y-3"
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

        {/* Animated Elements */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Butterfly */}
          <motion.img
            animate={{ y: [0, -42, 0], x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src={butterfly}
            alt="Animated Butterfly"
            className="absolute bottom-[34rem] left-4 h-22"
          />

          {/* Pigeon */}
          <motion.img
            animate={{ y: [0, -22, 0], x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src={pigeon}
            alt="Animated Pigeon"
            className="absolute top-[38rem] right-5 h-22"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-30 flex flex-col min-h-screen px-6 py-22">
          {/* Header Section */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-6 mb-12"
          >
            <h1 className="font4 text-[35px] mt-2">Efesus 4 : 2-3</h1>

            <p className="text-lg max-w-xs leading-relaxed">
              Hendaklah kamu selalu rendah hati, lemah lembut, dan sabar,
              Tunjukkanlah kasihmu dalam hal saling membantu dan berushalah
              memeihara kesatuan roh oleh ikatan damai sejahtera
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.7, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute top-1/8"
            >
              <img
                src={ornamenHome}
                alt="Ornamen Home"
                className="h-[250px] object-contain mt-13"
                loading="lazy"
              />
            </motion.div>
          </motion.header>

          {/* Groom Section */}
          <motion.section
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex items-start flex-col mt-20"
          >
            <div className="flex-shrink-0">
              <img
                src={groom}
                alt="Groom"
                className="h-[200px] object-contain"
              />
            </div>
            <div className="flex-1 text-left">
              <h2 className="font4 text text-[32px] leading-tight">
                Eko Sahat Tua Yosep Maranatha Sianturi, S.Ak
              </h2>
              <div className="flex flex-col text-lg items-start">
                <p className="max-w-xs leading-relaxed pt-2 text-[16px]">
                  Putra pertama dari :
                </p>
                <p className="max-w-xs leading-relaxed">
                  Bapak Mayor Arh M. Sianturi
                </p>
                <p>&</p>
                <p className="max-w-xs leading-relaxed">Ibu Maria Sitorus</p>
              </div>
            </div>
          </motion.section>

          {/* Divider */}
          <div className="flex justify-center my-10">
            <h2 className="text-6xl font2">&</h2>
          </div>

          {/* Bride Section */}
          <motion.section
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-end mb-26"
          >
            <div className="flex-shrink-0">
              <img
                src={bride}
                alt="Bride"
                className="h-[200px] object-contain"
              />
            </div>
            <div className="flex-1 text-right">
              <h2 className="font4 text-[32px] leading-tight">
                Devy Julietha <br /> br. Marbun, S.Pd
              </h2>
              <div className="flex flex-col text-lg items-end">
                <p className="max-w-xs leading-relaxed pt-2 text-[16px]">
                  Putri pertama dari :
                </p>
                <p className="max-w-xs leading-relaxed">Bapak Korman Marbun</p>
                <p>&</p>
                <p className="max-w-xs leading-relaxed">
                  Ibu Rosmawati Pandiangan
                </p>
              </div>
            </div>
          </motion.section>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex relative z-100 bottom-0 -translate-y-17 justify-center py-5"
          >
            <div className="flex gap-3 bottom-0 text-white">
              {/* Menu Button */}
              <Menu isOpen={menuOpen} setIsOpen={setMenuOpen} />
              {/* Next Page */}
              <Link to="/ourJourney" className="flex items-center gap-2">
                <button className="flex justify-center items-center w-9 h-9 rounded-2xl bg-[#AD1919] hover:bg-[#d12222] transition-all ease-in-out duration-300 cursor-pointer">
                  <FiArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Audio Button */}
        <div className="fixed flex justify-center absolute z-200 top-0 right-0 translate-y-5 -translate-x-2">
          <AudioButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
