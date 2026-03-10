import React, { useState } from "react";
import mastercard from "../assetsU2/mastercard.png";

const ACCOUNT_NUMBER = "6281862216";

const CreditCard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ACCOUNT_NUMBER).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <>
      {/* ===== TOAST POPUP ===== */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          copied
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2 bg-white text-green-700 font-semibold text-sm px-5 py-3 rounded-2xl shadow-2xl border border-green-200">
          {/* checkmark icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Nomor rekening berhasil disalin!
        </div>
      </div>

      {/* ===== CREDIT CARD ===== */}
      <div className="w-full max-w-[360px] aspect-[1.586] rounded-2xl bg-gradient-to-br from-[#0b1023] via-[#102a55] to-[#1c5fd4] text-white p-5 relative overflow-hidden shadow-2xl">
        {/* subtle light overlay */}
        <div className="absolute inset-0 bg-white/5 pointer-events-none" />

        {/* ===== HEADER ===== */}
        <div className="flex justify-between items-start">
          <h2 className="text-xs tracking-widest -translate-y-2 uppercase opacity-80">
            Bank Central Asia
          </h2>
        </div>

        {/* ===== CHIP ===== */}
        <div className="w-12">
          <svg viewBox="0 0 387.8 380.3">
            <defs>
              <linearGradient id="chipGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f9e29c" />
                <stop offset="50%" stopColor="#e6c86e" />
                <stop offset="100%" stopColor="#b8963f" />
              </linearGradient>
            </defs>
            <rect
              x="10"
              y="10"
              width="360"
              height="360"
              rx="28"
              fill="url(#chipGold)"
            />
          </svg>
        </div>

        {/* ===== CARD NUMBER ===== */}
        <div className="flex justify-around text-lg mt-1 tracking-[0.3em] translate-y-2 text-[16px]">
          <span>628</span>
          <span>186</span>
          <span>221</span>
          <span>6</span>
        </div>

        {/* ===== COPY BUTTON (top-right) ===== */}
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/15 hover:bg-white/25 active:scale-95 text-white text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-full border border-white/30 backdrop-blur-sm transition-all duration-200 cursor-pointer z-10"
        >
          {/* copy icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
          Salin
        </button>

        {/* ===== FOOTER ===== */}
        <div className="absolute bottom-4 left-5 right-6 flex justify-between items-end">
          {/* name */}
          <div>
            <div className="text-[16px] uppercase tracking-wide font-semibold">
              EKO SAHAT TUA YOSEP M
            </div>
          </div>

          {/* MasterCard logo */}
          <div className="absolute bottom-0 right-0 translate-y-3 translate-x-10">
            <img
              src={mastercard}
              alt="MasterCard Logo"
              className="w-28 h-auto "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCard;
