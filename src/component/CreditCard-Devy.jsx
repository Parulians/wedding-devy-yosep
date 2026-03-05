import React from "react";
import mastercard from "../assetsU2/mastercard.png";

const CreditCard = () => {
  return (
    <div className="w-full max-w-[360px] aspect-[1.586] rounded-2xl bg-gradient-to-br from-[#ce7133] via-[#cc1010] to-[#b7d122] text-white p-5 relative overflow-hidden shadow-2xl">
      {/* subtle light overlay */}
      <div className="absolute inset-0 bg-white/5 pointer-events-none" />

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-start">
        <h2 className="text-xs tracking-widest -translate-y-2 uppercase opacity-80">
          Bank Mandiri
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
      <div className=" flex justify-around text-lg mt-1 tracking-[0.3em] translate-y-2 text-[16px]">
        <span>1290</span>
        <span>0152</span>
        <span>7604</span>
        <span>7</span>
      </div>

      {/* ===== FOOTER ===== */}
      <div className="absolute bottom-4 left-5 right-6 flex justify-between items-end">
        {/* name & expiry */}
        <div>
          {/* <div className="text-[10px] uppercase opacity-70">Good Thru</div>
          <div className="text-sm mb-1">02 / 30</div> */}
          <div className="text-[16px] uppercase tracking-wide font-semibold">
            DEVY JULIETHA
          </div>
        </div>

        {/* Visa */}
        <div className="absolute bottom-0 right-0 translate-y-3 translate-x-10">
          <img
            src={mastercard}
            alt="MasterCard Logo"
            className="w-28 h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
