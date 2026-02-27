// src/components/CarrouselSessionPlanning.jsx
import { useEffect, useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { getSessionPlanningSlides } from "../data/dataSessionPlanningSlides.js";

import "swiper/css";
import "swiper/css/navigation";
import "./CarrouselIRP.css"; // ✅ on réutilise EXACTEMENT le CSS IRP

export default function CarrouselSessionPlanning() {
  const [open, setOpen] = useState(null);
  const closeBtnRef = useRef(null);
  const swiperRef = useRef(null);

  const base = import.meta.env.BASE_URL;
  const slides = getSessionPlanningSlides(base);

  // ✅ Ouverture modale
  const openModal = useCallback((i) => {
    setOpen(i);
    swiperRef.current?.autoplay?.stop?.();
    document.body.style.overflow = "hidden";
  }, []);

  // ✅ Fermeture modale
  const closeModal = useCallback(() => {
    setOpen(null);
    swiperRef.current?.autoplay?.start?.();
    document.body.style.overflow = "";
  }, []);

  // ✅ Navigation interne (comme IRP)
  const goPrev = useCallback(
    (e) => {
      e?.stopPropagation?.();
      setOpen((i) => (i + slides.length - 1) % slides.length);
    },
    [slides.length]
  );

  const goNext = useCallback(
    (e) => {
      e?.stopPropagation?.();
      setOpen((i) => (i + 1) % slides.length);
    },
    [slides.length]
  );

  // ✅ Raccourcis clavier
  useEffect(() => {
    if (open === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeModal, goPrev, goNext]);

  // ✅ Focus sur bouton Fermer
  useEffect(() => {
    if (open !== null) {
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    }
  }, [open]);

  // ✅ Modale identique IRP
  const Modal = () => {
    if (open === null) return null;
    const slide = slides[open];

    return createPortal(
      <div
        className="irp-modal"
        role="dialog"
        aria-modal="true"
        onClick={closeModal}
      >
        <div
          className="irp-modal-content"
          onClick={(e) => e.stopPropagation()}
          role="document"
        >
          <img
            className="irp-modal-img"
            src={slide.src}
            alt={slide.title}
            width="768"
            height="432"
          />

          <h3 className="home-h3" style={{ textAlign: "center" }}>
            {slide.title}
          </h3>

          <p>{slide.caption}</p>

          <div className="irp-modal-actions">
            <button
              type="button"
              className="home-chip"
              onClick={goPrev}
              aria-label="Image précédente"
            >
              ‹‹
            </button>

            <button
              ref={closeBtnRef}
              type="button"
              className="home-chip"
              onClick={closeModal}
            >
              Fermer
            </button>

            <button
              type="button"
              className="home-chip"
              onClick={goNext}
              aria-label="Image suivante"
            >
              ››
            </button>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <section className="home-card home-span-2 irp-section">
      <h2 className="home-h2">Captures commentées</h2>
      <p className="home-hint">
        Cliquez une vignette pour ouvrir la fiche détaillée
      </p>

      <div className="irp-viewport">
        <Swiper
          modules={[Navigation, Autoplay]}
          className="custom-swiper"
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          grabCursor
          speed={900}
          onSwiper={(sw) => (swiperRef.current = sw)}
          breakpoints={{
            1200: { slidesPerView: 4, spaceBetween: 24, loop: true },
            900: { slidesPerView: 3, spaceBetween: 20, loop: true },
            600: { slidesPerView: 2, spaceBetween: 16, loop: true },
            0: { slidesPerView: 1, spaceBetween: 10, loop: true },
          }}
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <button
                type="button"
                className="irp-slide"
                onClick={() => openModal(i)}
                aria-haspopup="dialog"
                aria-label={`Ouvrir ${s.title}`}
              >
                <span className="irp-card">
                  <img
                    className="irp-img"
                    src={s.src}
                    alt={s.title}
                    width="384"
                    height="216"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="irp-caption">{s.title}</span>
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Modal />
    </section>
  );
}