import React, { useState, useEffect } from "react";
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
import { FiArrowRight, FiSend } from "react-icons/fi";
import { IoMdHeart, IoMdCheckmarkCircle } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { TfiGift } from "react-icons/tfi";
import AudioButton from "./AudioButton";
import Menu from "./Menu";

const relationOptions = [
  {
    key: "Keluarga",
    icon: <IoMdHeart />,
    iconStyle: "bg-[#AD1919] text-[#ffd3d3]",
    styleColor: "bg-[#ffd3d3] text-[#AD1919] border border-[#AD1919]",
  },
  {
    key: "Sahabat",
    icon: <FaUserFriends />,
    iconStyle: "bg-indigo-700 text-indigo-100",
    styleColor: "bg-indigo-100 text-indigo-700 border border-indigo-700",
  },
  {
    key: "Rekan",
    icon: <FaSuitcase />,
    iconStyle: "bg-teal-700 text-teal-100",
    styleColor: "bg-teal-100 text-teal-700 border border-teal-700",
  },
  {
    key: "Lainnya",
    icon: <FaHandshakeSimple />,
    iconStyle: "bg-[#fff1b2] text-[#ec496c]",
    styleColor: "bg-[#ec496c] text-[#fff1b2] border border-[#fff1b2]",
  },
];

const APP_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxDZSbc3Lt8bFHzIXdL9l5tgYuhjJA4unYcCYCq_xL-3ADBWXTKAwaNCqHIO4--dto-/exec";

const WeddingWish = () => {
  const [selectedRelation, setSelectedRelation] = useState("");
  const [nama, setNama] = useState("");
  const [ucapan, setUcapan] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(APP_SCRIPT_URL);
        const result = await response.json();
        if (result && result.data) {
          const mappedData = result.data.map((item) => {
            const dateObj = new Date(item.timestamp);
            const dateStr = dateObj.toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });
            const timeStr = dateObj.toLocaleTimeString("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
            });
            return {
              id: item.id || Date.now() + Math.random(),
              relation: item.relation,
              name: item.name,
              desc: item.desc,
              hours: `${dateStr} ${timeStr}`,
            };
          });
          setComments(mappedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedRelation || !nama.trim() || !ucapan.trim()) return;
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", nama.trim());
      formData.append("relation", selectedRelation);
      formData.append("desc", ucapan.trim());

      await fetch(APP_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Required to avoid CORS block when sending to App Script
      });

      const newDate = new Date();
      const newComment = {
        id: Date.now(),
        relation: selectedRelation,
        name: nama.trim(),
        desc: ucapan.trim(),
        hours: "Baru saja",
      };

      setComments((prev) => [newComment, ...prev]);
      setSelectedRelation("");
      setNama("");
      setUcapan("");
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            className="absolute flex flex-col items-center text-center gap-1 top-0 w-90"
          >
            <p className="text-[24px] font-bold text-[#fff1b2] leading-tight">
              WEDDING WISH
            </p>
            <p className="text-lg text-[#fff1b2]">&</p>
            <h1 className="text-[24px] font-bold text-[#fff1b2] leading-tight">
              WEDDING GIFT
            </h1>
            <div className="flex items-center gap-3 w-full justify-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#fff1b2]/40" />
              <TfiGift className="text-[#fff1b2] text-lg" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#fff1b2]/40" />
            </div>
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
            {/* Modern Glassmorphism Form */}
            <form
              onSubmit={handleSubmit}
              className="relative z-0 flex flex-col items-center gap-5 w-85 h-full py-6 px-4 rounded-2xl text-[#fff1b2]"
              style={{
                background: "rgba(173,25,25,0.22)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,241,178,0.18)",
                boxShadow: "0 8px 32px 0 rgba(173,25,25,0.25)",
              }}
            >
              {/* Hubungan */}
              <div className="flex flex-col items-center gap-3 w-full">
                <label className="text-xs tracking-[0.25em] font-semibold text-[#ffd3d3] uppercase">
                  Hubungan
                </label>
                <div className="flex gap-2 flex-wrap justify-center">
                  {relationOptions.map((rel) => {
                    const isActive = selectedRelation === rel.key;
                    return (
                      <motion.button
                        key={rel.key}
                        type="button"
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.07 }}
                        onClick={() => setSelectedRelation(rel.key)}
                        className="flex flex-col items-center gap-1 rounded-2xl px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out cursor-pointer border"
                        style={{
                          background: isActive
                            ? "rgba(255,241,178,0.95)"
                            : "rgba(255,255,255,0.08)",
                          borderColor: isActive
                            ? "#fff1b2"
                            : "rgba(255,241,178,0.25)",
                          color: isActive ? "#AD1919" : "#fff1b2",
                          boxShadow: isActive
                            ? "0 0 16px rgba(255,241,178,0.4)"
                            : "none",
                        }}
                      >
                        <span className="text-lg">{rel.icon}</span>
                        <p style={{ fontSize: "11px" }}>{rel.key}</p>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Divider */}
              <div
                className="w-full border-t"
                style={{ borderColor: "rgba(255,241,178,0.15)" }}
              />

              {/* Nama */}
              <div className="flex flex-col gap-1.5 w-full px-2">
                <label className="text-xs tracking-[0.25em] font-semibold text-[#ffd3d3] uppercase">
                  Nama
                </label>
                <input
                  id="wish-nama"
                  name="nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Masukkan nama Anda..."
                  className="w-full h-10 px-4 rounded-xl text-sm outline-none font3 transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,241,178,0.22)",
                    color: "#fff",
                    caretColor: "#fff1b2",
                  }}
                />
              </div>

              {/* Ucapan */}
              <div className="flex flex-col gap-1.5 w-full px-2">
                <label className="text-xs tracking-[0.25em] font-semibold text-[#ffd3d3] uppercase">
                  Ucapan
                </label>
                <textarea
                  id="wish-ucapan"
                  name="ucapan"
                  value={ucapan}
                  onChange={(e) => setUcapan(e.target.value)}
                  placeholder="Tulis doa & ucapan Anda di sini..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none font3 resize-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,241,178,0.22)",
                    color: "#fff",
                    caretColor: "#fff1b2",
                  }}
                />
              </div>

              {/* Submit */}
              <div className="w-full px-2">
                <AnimatePresence mode="wait">
                  {submitSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-2 w-full h-12 rounded-xl text-[#fff1b2] font-semibold"
                      style={{
                        background: "rgba(34,197,94,0.3)",
                        border: "1px solid rgba(34,197,94,0.5)",
                      }}
                    >
                      <IoMdCheckmarkCircle className="text-xl text-green-300" />
                      <span className="text-sm">Ucapan terkirim!</span>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit"
                      type="submit"
                      whileTap={{ scale: 0.96 }}
                      whileHover={{ scale: 1.02 }}
                      disabled={
                        isSubmitting ||
                        !selectedRelation ||
                        !nama.trim() ||
                        !ucapan.trim()
                      }
                      className="flex items-center justify-center gap-2 w-full h-12 rounded-xl font-semibold tracking-widest text-sm transition-all duration-300 cursor-pointer"
                      style={{
                        background:
                          isSubmitting ||
                          !selectedRelation ||
                          !nama.trim() ||
                          !ucapan.trim()
                            ? "rgba(255,184,184,0.3)"
                            : "linear-gradient(135deg, #ec496c 0%, #AD1919 100%)",
                        color:
                          isSubmitting ||
                          !selectedRelation ||
                          !nama.trim() ||
                          !ucapan.trim()
                            ? "rgba(255,241,178,0.5)"
                            : "#fff1b2",
                        border: "1px solid rgba(255,241,178,0.2)",
                        boxShadow:
                          !isSubmitting &&
                          selectedRelation &&
                          nama.trim() &&
                          ucapan.trim()
                            ? "0 4px 20px rgba(236,73,108,0.45)"
                            : "none",
                        cursor:
                          isSubmitting ||
                          !selectedRelation ||
                          !nama.trim() ||
                          !ucapan.trim()
                            ? "not-allowed"
                            : "pointer",
                      }}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 rounded-full border-2 border-[#fff1b2] border-t-transparent"
                        />
                      ) : (
                        <>
                          <FiSend className="text-base" />
                          <span>KIRIM UCAPAN</span>
                        </>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

          {/* Comment Section - Modern */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="translate-y-25 flex flex-col items-center gap-4 w-85 rounded-2xl py-6 px-4 text-[#fff1b2]"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,241,178,0.15)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            {/* Header */}
            <div className="flex w-full items-center justify-between">
              <div>
                <p className="text-base font-semibold tracking-wide">
                  Doa Teman & Kerabat
                </p>
                <p className="text-xs text-[#ffd3d3] mt-0.5">
                  Ucapan dari orang-orang tersayang
                </p>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, #ec496c 0%, #AD1919 100%)",
                  color: "#fff1b2",
                  boxShadow: "0 4px 12px rgba(236,73,108,0.4)",
                }}
              >
                <IoMdHeart />
                <span>{comments.length} Ucapan</span>
              </motion.div>
            </div>

            {/* Divider */}
            <div
              className="w-full border-t"
              style={{ borderColor: "rgba(255,241,178,0.12)" }}
            />

            {/* Comment Cards */}
            <div className="flex flex-col gap-3 w-full">
              <AnimatePresence initial={false}>
                {comments.map((item, index) => {
                  const rel =
                    relationOptions.find((r) => r.key === item.relation) ||
                    relationOptions[0];
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: -20, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -30, scale: 0.9 }}
                      transition={{
                        duration: 0.4,
                        delay: index < 4 ? index * 0.08 : 0,
                        ease: "easeOut",
                      }}
                      className="flex flex-col gap-2 p-4 w-full rounded-2xl"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,241,178,0.12)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {/* Top row */}
                      <div className="flex items-center justify-between">
                        <div
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{
                            background: rel.iconStyle
                              .replace("bg-", "")
                              .includes("[")
                              ? undefined
                              : undefined,
                          }}
                        >
                          <span
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${rel.iconStyle}`}
                          >
                            {rel.icon}
                            {item.relation}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#ffd3d3] opacity-70">
                          {item.hours}
                        </p>
                      </div>
                      {/* Name */}
                      <p className="text-sm font-semibold text-[#fff1b2] tracking-wide">
                        {item.name}
                      </p>
                      {/* Message */}
                      <p className="text-xs text-[#ffe8a0] leading-relaxed italic">
                        &ldquo;{item.desc}&rdquo;
                      </p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>

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
          <div className="flex gap-3 items-center bottom-0 text-white">
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
