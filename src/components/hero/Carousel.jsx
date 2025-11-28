import React, { useState, useRef, useEffect } from "react";

const cardData = [
  {
    id: 1,
    text: "Sampah yang telah disisihkan",
    imageUrl: "/img/home/hero-card_1.png",
  },
  {
    id: 2,
    text: "Relawan Aksi Lingkungan",
    imageUrl: "/img/home/hero-card_2.png",
  },
  {
    id: 3,
    text: "Kerajinan Daur Ulang",
    imageUrl: "/img/home/hero-card_3.png",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const CARD_WIDTH = 360;
  const CARD_HEIGHT = 420;
  const GAP = isMobile ? 30 : 100;
  const DEPTH_STEP = 60;
  const SCALE_STEP = 0.08;

  const prev = () =>
    setCurrentIndex((s) => (s - 1 + cardData.length) % cardData.length);
  const next = () => setCurrentIndex((s) => (s + 1) % cardData.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto pt-10 pb-28">
      <div
        ref={containerRef}
        className="relative mx-auto"
        style={{
          height: `${CARD_HEIGHT}px`,
          perspective: "1200px",
          overflow: "visible",
        }}
      >
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          {cardData.map((card, index) => {
            const n = cardData.length;
            const distance = (index - currentIndex + n) % n;
            const displayOffset = distance;

            if (displayOffset > 4 && displayOffset !== 0) return null;

            const translateX = displayOffset * GAP;
            const translateZ = -displayOffset * DEPTH_STEP;
            const scale = Math.max(0.5, 1 - displayOffset * SCALE_STEP);
            const rotateY = -displayOffset * 6;

            const baseZ = 1000;
            const zIndex = baseZ - displayOffset * 10;

            const opacity =
              displayOffset === 0
                ? 1
                : Math.max(0.18, 1 - displayOffset * 0.15);
            const pointer = displayOffset > 2 ? "none" : "auto";

            const transform = `translate3d(calc(-50% + ${translateX}px), -50%, ${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`;

            return (
              <div
                key={card.id}
                onClick={() => setCurrentIndex(index)}
                className="left-35 lg:left-[40%] translate-y-20 lg:translate-y-0"
                style={{
                  position: "absolute",
                  top: "50%",
                  width: `${CARD_WIDTH}px`,
                  height: `${CARD_HEIGHT}px`,
                  transform,
                  transformStyle: "preserve-3d",
                  transition:
                    "transform 500ms cubic-bezier(.22,.9,.31,1), opacity 300ms ease, box-shadow 300ms",
                  zIndex,
                  opacity,
                  cursor: "pointer",
                  pointerEvents: pointer,
                  willChange: "transform, opacity",
                }}
              >
                <div
                className="w-[270px] lg:w-[285px] h-[90%] lg:h-full"
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow:
                      displayOffset === 0
                        ? "0 30px 60px rgba(0,0,0,0.45)"
                        : "0 10px 30px rgba(0,0,0,0.25)",
                    background: "#111",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={card.imageUrl}
                    alt={card.text}
                    draggable="false"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      userSelect: "none",
                      backfaceVisibility: "hidden",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* teks bawah */}
      <div className="absolute inset-x-0 bottom-0 -translate-x-15 lg:-translate-x-27 -translate-y-5 lg:-translate-y-13 text-center pt-2 w-[300px] lg:w-full">
        <p className="text-white text-xs lg:text-lg font-semibold bg-transparent inline-block px-4 py-1 rounded">
          {cardData[currentIndex].text}
        </p>
        <div className="w-[40%] mx-auto border-b-4 border-white mt-1"></div>
      </div>

      {/* tombol nav */}
      <button
        onClick={prev}
        className="p-3 rounded-full text-white absolute top-1/2 left-0 transform lg:-translate-y-1/2 z-50 -translate-x-23 lg:translate-x-0"
      >
        <img className="h-8 lg:h-11" src="/img/home/previous.png" alt="" />
      </button>

      <button
        onClick={next}
        className="p-3 rounded-full text-white absolute top-1/2 right-0 transform lg:-translate-y-1/2 translate-x-48 lg:-translate-x-2 z-50 "
      >
        <img className="h-8 lg:h-11" src="/img/home/next.png" alt="" />
      </button>
    </div>
  );
};

export default Carousel;
