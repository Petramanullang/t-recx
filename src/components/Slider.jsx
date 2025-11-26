import React, { useEffect, useRef, useState } from "react";

const dataSampah = {
  2018: { nyata: 67.1, kelolaMin: 53.7, kelolaMax: 40.2, delta: "20-40%" },
  2019: { nyata: 68.3, kelolaMin: 54.8, kelolaMax: 41.0, delta: "20-40%" },
  2020: { nyata: 69.0, kelolaMin: 55.2, kelolaMax: 41.6, delta: "20-40%" },
  2021: { nyata: 70.4, kelolaMin: 56.3, kelolaMax: 42.5, delta: "20-40%" },
  2022: { nyata: 71.0, kelolaMin: 57.0, kelolaMax: 43.0, delta: "20-40%" },
  2023: { nyata: 71.9, kelolaMin: 57.8, kelolaMax: 43.5, delta: "20-40%" },
};

export default function Slider({ initialYear = "2018" }) {
  const years = Object.keys(dataSampah);
  const shellRef = useRef(null);
  const trackRef = useRef(null);
  const pointsRef = useRef([]);
  const indicatorRef = useRef(null);

  const [activeYear, setActiveYear] = useState(initialYear);

  // format number like 67,1
  const fmt = (n) =>
    (typeof n === "number" ? n : parseFloat(n)).toLocaleString("id-ID", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });

  // move indicator to the DOM point center
  function moveIndicatorToYear(year, animate = true) {
    const shell = shellRef.current;
    const indicator = indicatorRef.current;
    const idx = years.indexOf(String(year));
    const point = pointsRef.current[idx];
    if (!shell || !indicator || !point) return;
    const shellRect = shell.getBoundingClientRect();
    const pointRect = point.getBoundingClientRect();
    // center relative to shell
    let center = pointRect.left - shellRect.left + pointRect.width / 2;

    // clamp so indicator won't overflow container
    const half = indicator.offsetWidth / 2;
    center = Math.max(half, Math.min(center, shellRect.width - half));

    if (!animate) indicator.style.transition = "none";
    else indicator.style.transition = "left 220ms cubic-bezier(.2,.9,.2,1)";

    indicator.style.left = `${center}px`;
    // small accessible label
    indicator.setAttribute("data-year", year);
  }

  // find nearest year from clientX
  function clientXToNearestYear(clientX) {
    const shell = shellRef.current;
    if (!shell) return years[0];
    const shellRect = shell.getBoundingClientRect();
    let nearestIdx = 0;
    let minDist = Infinity;
    years.forEach((y, idx) => {
      const p = pointsRef.current[idx];
      if (!p) return;
      const pRect = p.getBoundingClientRect();
      const pCenter = pRect.left - shellRect.left + pRect.width / 2;
      const dist = Math.abs(clientX - shellRect.left - pCenter);
      if (dist < minDist) {
        minDist = dist;
        nearestIdx = idx;
      }
    });
    return years[nearestIdx];
  }

  // pointer drag handlers (works for mouse & touch)
  useEffect(() => {
    const shell = shellRef.current;
    const track = trackRef.current;
    const indicator = indicatorRef.current;
    if (!shell || !track || !indicator) return;

    let dragging = false;

    function onPointerDown(e) {
      dragging = true;
      if (e.pointerId != null && indicator.setPointerCapture)
        indicator.setPointerCapture(e.pointerId);
      const year = clientXToNearestYear(e.clientX);
      setActiveYear(year);
      e.preventDefault();
    }
    function onPointerMove(e) {
      if (!dragging) return;
      const year = clientXToNearestYear(e.clientX);
      setActiveYear(year);
      e.preventDefault();
    }
    function onPointerUp(e) {
      dragging = false;
      if (e.pointerId != null && indicator.releasePointerCapture)
        indicator.releasePointerCapture(e.pointerId);
      e.preventDefault();
    }

    track.addEventListener("pointerdown", onPointerDown);
    indicator.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      indicator.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // reposition on resize and when active changes
  useEffect(() => {
    function handleResize() {
      moveIndicatorToYear(activeYear, false);
    }
    window.addEventListener("resize", handleResize);
    // initial
    moveIndicatorToYear(activeYear, false);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    moveIndicatorToYear(activeYear);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeYear]);

  // CTA button label
  const ctaLabel = `Cek total sampah tahun ${activeYear}`;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="rounded-[18px] border-2 border-bg-secondary p-6 bg-white shadow-md">
        <div className="text-center mb-15">
          <h2 className="text-2xl font-semibold text-gray-800">
            Simulasi hitung total sampah di Indonesia
          </h2>
          <p className="text-base text-text-gray mt-1">
            Masukkan tahun yang ingin disimulasikan
          </p>
        </div>

        {/* slider shell */}
        <div ref={shellRef} className="relative mt-6">
          {/* track */}
          <div
            ref={trackRef}
            className="relative h-3 rounded-full bg-gray-200 mx-4"
            aria-hidden
          >
            {/* points */}
            {years.map((year, idx) => {
              const pct = (idx / (years.length - 1)) * 88;
              return (
                <div
                  key={year}
                  ref={(el) => (pointsRef.current[idx] = el)}
                  className="absolute -top-1.5 w-4 h-4 flex items-center justify-center"
                  style={{
                    left: `calc(${pct}% + 50px)`,
                    transform: "translateX(-50%)",
                  }}
                ></div>
              );
            })}

            {/* draggable indicator */}
            <div
              ref={indicatorRef}
              className="absolute top-0 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center shadow-md"
              style={{
                left: 0,
                transform: "translate(-100%)",
                background: "#2f7f5a",
                color: "#fff",
                transition: "left 220ms cubic-bezier(.2,.9,.2,1)",
                zIndex: 30,
              }}
              aria-hidden
            >
              <span className="text-lg">
                <img src="/public/svg/home/down-arrow.svg" alt="" />
              </span>
            </div>
          </div>

          {/* year labels */}
          <div className="flex justify-between mt-5 px-10 pl-12 text-sm select-none">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setActiveYear(y)}
                className={`text-base focus:outline-none ${
                  activeYear === y
                    ? "text-gray-800 font-semibold"
                    : "text-gray-400"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-end mt-6 px-4">
          <button
            className="bg-emerald-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
            type="button"
            onClick={() => {
              // placeholder behaviour - you can replace with real action
              alert(`Menampilkan data tahun ${activeYear}`);
            }}
          >
            {ctaLabel}
          </button>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-4">
          {/* left card */}
          <div className="border-2 border-emerald-200 rounded-lg p-5 min-h-[140px]">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm text-gray-600">Sebelum dikelola</div>
                <div className="text-xs text-gray-500">ton / Tahun</div>
              </div>
              <div className="text-3xl font-light text-red-600">
                {fmt(dataSampah[activeYear].nyata)}
              </div>
            </div>
          </div>

          {/* right card */}
          <div className="border-2 border-emerald-200 rounded-lg p-5 min-h-[140px] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm text-gray-600">Setelah dikelola</div>
                <div className="text-xs text-gray-500">ton / Tahun</div>
              </div>
              <div className="text-3xl font-light text-emerald-600">
                {fmt(dataSampah[activeYear].kelolaMin)} -{" "}
                {fmt(dataSampah[activeYear].kelolaMax)}
              </div>
            </div>

            <div className="mt-3 text-sm text-gray-600">
              Berkurang sebanyak{" "}
              <span className="font-semibold text-gray-800">
                {dataSampah[activeYear].delta}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* source */}
      <div className="text-center text-xs text-gray-500 mt-6">
        Sumber : SIPSN
      </div>
    </div>
  );
}
