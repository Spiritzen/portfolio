// src/components/Carousel.jsx
// Composant générique réutilisé par InkRedPlumes et SessionPlanning
import { useEffect, useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./CarrouselIRP.css";

export default function Carousel({ slides }) {
  const [open, setOpen] = useState(null);
  const closeBtnRef = useRef(null);
  const swiperRef = useRef(null);

  // ── Accessibilité de l'autoplay ──
  // 1) Si "mouvement réduit" est déjà actif au chargement, l'autoplay ne
  //    démarre pas (état initial du bouton Pause/Lecture cohérent).
  // 2) L'utilisateur garde toujours la main via le bouton Pause/Lecture,
  //    actionnable au clavier, jamais masqué derrière un hover.
  // 3) La navigation manuelle (flèches, pagination, ouverture de la
  //    modale) reste inchangée dans tous les cas.
  const [playing, setPlaying] = useState(
    () => !(typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)
  );

  const openModal = useCallback((i) => {
    setOpen(i);
    swiperRef.current?.autoplay?.stop?.();
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setOpen(null);
    if (playing) swiperRef.current?.autoplay?.start?.();
    document.body.style.overflow = "";
  }, [playing]);

  const togglePlaying = useCallback(() => {
    setPlaying((p) => {
      const next = !p;
      if (next) swiperRef.current?.autoplay?.start?.();
      else swiperRef.current?.autoplay?.stop?.();
      return next;
    });
  }, []);

  // Coupe l'autoplay dès le montage si la préférence était déjà active
  // (Swiper le démarre par défaut via la prop `autoplay`).
  useEffect(() => {
    if (!playing) swiperRef.current?.autoplay?.stop?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Écoute un changement de préférence en cours de visite : si
  // "mouvement réduit" devient actif, on met en pause proprement.
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => {
      if (e.matches) {
        setPlaying(false);
        swiperRef.current?.autoplay?.stop?.();
      }
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const goPrev = useCallback((e) => {
    e?.stopPropagation?.();
    setOpen((i) => (i + slides.length - 1) % slides.length);
  }, [slides.length]);

  const goNext = useCallback((e) => {
    e?.stopPropagation?.();
    setOpen((i) => (i + 1) % slides.length);
  }, [slides.length]);

  // Raccourcis clavier
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

  // Focus sur "Fermer" à l'ouverture
  useEffect(() => {
    if (open !== null) setTimeout(() => closeBtnRef.current?.focus(), 0);
  }, [open]);

  const modal = open === null ? null : createPortal(
    <div
      className="irp-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="carousel-modal-title"
      onClick={closeModal}
    >
      <div
        className="irp-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <img
          className="irp-modal-img"
          src={slides[open].src}
          alt={slides[open].title}
          width="768"
          height="432"
        />
        <h3
          id="carousel-modal-title"
          className="home-h3"
          style={{ textAlign: "center" }}
        >
          {slides[open].title}
        </h3>
        <p>{slides[open].caption}</p>

        <div className="irp-modal-actions">
          <button type="button" className="home-chip" onClick={goPrev} aria-label="Image précédente">‹‹</button>
          <button ref={closeBtnRef} type="button" className="home-chip" onClick={closeModal}>Fermer</button>
          <button type="button" className="home-chip" onClick={goNext} aria-label="Image suivante">››</button>
        </div>
      </div>
    </div>,
    document.body
  );

  return (
    <section className="home-card home-span-2 irp-section">
      <h2 className="home-h2">Captures commentées</h2>

      <div className="irp-controls">
        <p className="home-hint">Cliquez une vignette pour ouvrir la fiche détaillée</p>
        <button
          type="button"
          className="home-chip irp-play-toggle"
          onClick={togglePlaying}
          aria-pressed={playing}
        >
          {playing ? "⏸️ Mettre le carrousel en pause" : "▶️ Relancer le carrousel"}
        </button>
      </div>

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
            900:  { slidesPerView: 3, spaceBetween: 20, loop: true },
            600:  { slidesPerView: 2, spaceBetween: 16, loop: true },
            0:    { slidesPerView: 1, spaceBetween: 10, loop: true },
          }}
        >
          {slides.map((s, i) => (
            <SwiperSlide key={s.src}>
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

      {modal}
    </section>
  );
}
