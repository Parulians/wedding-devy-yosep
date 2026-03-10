import React, { useState, useEffect } from "react";

// ─── Daftar semua gambar yang harus di-preload ───────────────────────────────
import background from "../assetsU2/background.webp";
import ornamenHead from "../assetsU2/ornamenHead.png";
import ornamenHome from "../assetsU2/ornamenHome.png";
import ornamenSide from "../assetsU2/ornamenSide.webp";
import decorationSide from "../assetsU2/decorationSide.png";
import decorationBottom from "../assetsU2/decorationBottom.png";
import ulosBottom from "../assetsU2/ulosLimit.png";
import slider from "../assetsU2/slider.webp";
import pigeon from "../assetsU2/pigeon.webp";
import butterfly from "../assetsU2/butterfly.webp";
import groomImg from "../assetsU2/groom-img.webp";
import brideImg from "../assetsU2/bride-img.webp";
import groom from "../assetsU2/groom.webp";
import bride from "../assetsU2/bride.webp";
import halaman1 from "../assetsU2/halaman1.jpeg";
import halaman2 from "../assetsU2/halaman2.jpeg";
import pin from "../assetsU2/pin.png";
import mastercard from "../assetsU2/mastercard.png";
import ornamen from "../assetsU2/ornamen.png";
import photo1 from "../assetsU2/photo-1.webp";
import photo2 from "../assetsU2/photo-2.webp";
import photo3 from "../assetsU2/photo-3.webp";
import photo4 from "../assetsU2/photo-4.webp";
import photo5 from "../assetsU2/photo-5.webp";
import photo6 from "../assetsU2/photo-6.webp";
import photo7 from "../assetsU2/photo-7.webp";
import photo8 from "../assetsU2/photo-8.webp";
import photo9 from "../assetsU2/photo-9.webp";
import photo10 from "../assetsU2/photo-10.webp";
import photo11 from "../assetsU2/photo-11.webp";
import photo12 from "../assetsU2/photo-12.webp";
import pengantin from "../assetsU2/pengantin.png";

// ─── Semua URL gambar yang perlu di-preload ───────────────────────────────────
const ALL_IMAGES = [
  background,
  ornamenHead,
  ornamenHome,
  ornamenSide,
  decorationSide,
  decorationBottom,
  ulosBottom,
  slider,
  pigeon,
  butterfly,
  groomImg,
  brideImg,
  groom,
  bride,
  halaman1,
  halaman2,
  pin,
  mastercard,
  ornamen,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  pengantin,
];

/**
 * Preload satu gambar, resolve ketika selesai (sukses atau gagal).
 */
const preloadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve; // tetap resolve meski error agar tidak block loading
    img.src = src;
  });

/**
 * ImagePreloader
 * Menampilkan loading screen animasi selama semua gambar belum selesai dimuat.
 * Setelah semua gambar siap, children langsung dirender.
 */
const ImagePreloader = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const total = ALL_IMAGES.length;

    const promises = ALL_IMAGES.map((src) =>
      preloadImage(src).then(() => {
        loadedCount += 1;
        setProgress(Math.round((loadedCount / total) * 100));
      })
    );

    Promise.all(promises).then(() => {
      // Tunggu sebentar agar progress bar sampai 100% terlihat
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setLoaded(true), 700); // durasi fade-out
      }, 400);
    });
  }, []);

  if (loaded) return <>{children}</>;

  return (
    <>
      {/* Loading Screen */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #5a0c0e 0%, #AD1919 50%, #721315 100%)",
          transition: "opacity 0.7s ease",
          opacity: fadeOut ? 0 : 1,
          pointerEvents: fadeOut ? "none" : "auto",
        }}
      >
        {/* Ornamen lingkaran dekoratif */}
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: "1px solid rgba(255,241,178,0.15)",
            animation: "spin 8s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: "50%",
            border: "1px solid rgba(255,241,178,0.1)",
            animation: "spin 5s linear infinite reverse",
          }}
        />

        {/* Nama pengantin */}
        <div style={{ textAlign: "center", color: "#fff1b2", marginBottom: 32, zIndex: 1 }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              opacity: 0.7,
              marginBottom: 4,
            }}
          >
            The Wedding Of
          </p>
          <h1
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 52,
              lineHeight: 1.1,
              fontWeight: 400,
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            Yosep & Devy
          </h1>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              opacity: 0.6,
              marginTop: 4,
            }}
          >
            11 . 04 . 2026
          </p>
        </div>

        {/* Progress bar container */}
        <div
          style={{
            width: 220,
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          {/* Bar */}
          <div
            style={{
              width: "100%",
              height: 3,
              background: "rgba(255,241,178,0.2)",
              borderRadius: 99,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #ffd3d3, #fff1b2)",
                borderRadius: 99,
                transition: "width 0.3s ease",
                boxShadow: "0 0 12px rgba(255,241,178,0.5)",
              }}
            />
          </div>

          {/* Persentase */}
          <p
            style={{
              color: "#fff1b2",
              fontSize: 12,
              letterSpacing: "0.15em",
              opacity: 0.8,
            }}
          >
            Memuat... {progress}%
          </p>
        </div>

        {/* CSS untuk animasi spin */}
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}</style>
      </div>

      {/* App di-render di belakang loading screen agar siap langsung tampil */}
      <div style={{ visibility: loaded ? "visible" : "hidden" }}>
        {children}
      </div>
    </>
  );
};

export default ImagePreloader;
