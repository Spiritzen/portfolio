// src/components/CarrouselSessionPlanning.jsx
import { useEffect, useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./CarrouselIRP.css"; // ✅ on réutilise le même CSS

export default function CarrouselSessionPlanning() {
  const [open, setOpen] = useState(null);
  const closeBtnRef = useRef(null);
  const swiperRef = useRef(null);
  const base = import.meta.env.BASE_URL;

  // ✅ Mets tes screenshots ici (mêmes noms conseillés)
  const slides = [
    { src: `${base}images/session-planning/shot01-768.jpg`, title: "Vue sessions : statuts, dates, école, actions rapides." },
    { src: `${base}images/session-planning/shot02-768.jpg`, title: "Affectations : proposition, acceptation/refus, suivi." },
    { src: `${base}images/session-planning/shot03-768.jpg`, title: "Détection des collisions horaires (règle de chevauchement)." },
    { src: `${base}images/session-planning/shot04-768.jpg`, title: "Gestion multi-rôles : admin/gestionnaire, formateur, école." },
  ];

  const onKeyDown = useCallback(
    (e) => {
      if (!open) return;
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") swiperRef.current?.slidePrev?.();
      if (e.key === "ArrowRight") swiperRef.current?.slideNext?.();
    },
    [open]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKeyDown);
    closeBtnRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onKeyDown]);

  return (
    <section className="home-card home-span-2">
      <h2 className="home-h2">Captures & interface</h2>

      <div className="irp-carousel">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          autoplay={{ delay: 2600, disableOnInteraction: false }}
          spaceBetween={16}
          slidesPerView={1.15}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            980: { slidesPerView: 3.1 },
          }}
          onSwiper={(s) => (swiperRef.current = s)}
        >
          {slides.map((s, idx) => (
            <SwiperSlide key={s.src}>
              <button className="irp-card" onClick={() => setOpen(idx)} type="button">
                <img className="irp-img" src={s.src} alt={s.title} loading="lazy" />
                <div className="irp-caption">{s.title}</div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {open !== null &&
        createPortal(
          <div className="irp-modal-overlay" role="dialog" aria-modal="true">
            <div className="irp-modal">
              <div className="irp-modal-top">
                <div className="irp-modal-title">Détail</div>
                <button
                  ref={closeBtnRef}
                  className="irp-modal-close"
                  onClick={() => setOpen(null)}
                  type="button"
                >
                  Fermer
                </button>
              </div>

              <img className="irp-modal-img" src={slides[open].src} alt={slides[open].title} />

              <div className="irp-modal-actions">
                <button className="irp-nav" onClick={() => swiperRef.current?.slidePrev?.()} type="button">
                  ‹
                </button>
                <div className="irp-modal-text">{slides[open].title}</div>
                <button className="irp-nav" onClick={() => swiperRef.current?.slideNext?.()} type="button">
                  ›
                </button>
              </div>
            </div>

            <button className="irp-modal-backdrop" onClick={() => setOpen(null)} aria-label="Fermer" />
          </div>,
          document.body
        )}
    </section>
  );
}
