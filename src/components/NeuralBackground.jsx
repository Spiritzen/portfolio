import { useEffect, useRef } from "react";

export default function NeuralBackground({
  density = 0.00008,
  maxLinks = 3,
  baseSpeed = 0.18,
  linkDist = 140,
  zMin = 0.3,
  zMax = 1.4,
  opacity = 0.35,
  glow = true,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  // ✅ Scroll parallax: suit window.scrollY avec inertie (ne revient PAS à 0)
  const scrollRef = useRef({
    targetY: 0,
    currentY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    let W = 0,
      H = 0,
      DPR = 1;

    const points = [];
    const rnd = (a, b) => a + Math.random() * (b - a);

    const resize = () => {
      DPR = Math.min(2, window.devicePixelRatio || 1);
      W = Math.floor(window.innerWidth);
      H = Math.floor(window.innerHeight);

      canvas.width = Math.floor(W * DPR);
      canvas.height = Math.floor(H * DPR);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;

      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      points.length = 0;
      const count = Math.floor(W * H * density);
      for (let i = 0; i < count; i++) points.push(makePoint());
    };

    const makePoint = () => {
      const z = rnd(zMin, zMax);
      return {
        x: rnd(0, W),
        y: rnd(0, H),
        z,
        vx: rnd(-baseSpeed, baseSpeed),
        vy: rnd(-baseSpeed, baseSpeed),
        tw: rnd(0, Math.PI * 2),
        tws: rnd(0.004, 0.012),
        r: rnd(0.9, 1.8),
      };
    };

    const onMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };
    const onLeave = () => (mouseRef.current.active = false);

    // ✅ Scroll: target = scrollY (immédiat)
    const onScroll = () => {
      scrollRef.current.targetY = window.scrollY || 0;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    // init
    scrollRef.current.targetY = window.scrollY || 0;
    scrollRef.current.currentY = scrollRef.current.targetY;

    resize();

    ctx.lineWidth = 1;
    ctx.lineCap = "round";

    const step = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.globalAlpha = opacity;

      const mouse = mouseRef.current;
      const mx = mouse.active ? mouse.x : W * 0.5;
      const my = mouse.active ? mouse.y : H * 0.5;

      // Parallax souris (inchangé)
      const px = (mx - W * 0.5) * 0.015;
      const py = (my - H * 0.5) * 0.015;

      // ✅ Parallax scroll (durable + inertie)
      const s = scrollRef.current;

      // lerp => suit en retard (inertie)
      const lerp = 0.18; // un peu plus réactif
      s.currentY += (s.targetY - s.currentY) * lerp;

      // convertit scroll en offset “monde”
      // ratio = combien de pixels de fond bougent par pixel de scroll
      const ratio = 0.12; // léger (0.08..0.18 selon goût)

      // IMPORTANT:
      // si tu descends (scrollY augmente), le décor doit "monter" => signe négatif
      const scrollParallaxY = -(s.currentY * ratio);

      // petit drift X optionnel ultra léger (sinon mets 0)
      const scrollParallaxX = 0; // ou: -(s.currentY * ratio) * 0.08;

      // --- update points (inchangé) ---
      for (const p of points) {
        p.tw += p.tws;

        p.x += p.vx * p.z;
        p.y += p.vy * p.z;

        if (p.x < -30) p.x = W + 30;
        if (p.x > W + 30) p.x = -30;
        if (p.y < -30) p.y = H + 30;
        if (p.y > H + 30) p.y = -30;
      }

      // --- draw links ---
      ctx.save();
      if (glow) ctx.shadowBlur = 10;
      if (glow) ctx.shadowColor = "rgba(255,255,255,0.15)";
      ctx.strokeStyle = "rgba(255,255,255,0.18)";

      for (let i = 0; i < points.length; i++) {
        const a = points[i];

        const ax = a.x + (px + scrollParallaxX) * (1 / a.z);
        const ay = a.y + (py + scrollParallaxY) * (1 / a.z);

        let links = 0;
        for (let j = i + 1; j < points.length; j++) {
          if (links >= maxLinks) break;

          const b = points[j];
          const bx = b.x + (px + scrollParallaxX) * (1 / b.z);
          const by = b.y + (py + scrollParallaxY) * (1 / b.z);

          const dx = ax - bx;
          const dy = ay - by;

          const dz = Math.abs(a.z - b.z);
          const dist = Math.sqrt(dx * dx + dy * dy) + dz * 55;

          if (dist < linkDist) {
            const t = 1 - dist / linkDist;
            ctx.globalAlpha = opacity * (0.12 + 0.55 * t);

            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();

            links++;
          }
        }
      }
      ctx.restore();

      // --- draw points ---
      ctx.save();
      if (glow) ctx.shadowBlur = 14;
      if (glow) ctx.shadowColor = "rgba(255,255,255,0.22)";
      ctx.fillStyle = "rgba(255,255,255,0.55)";

      for (const p of points) {
        const x = p.x + (px + scrollParallaxX) * (1 / p.z);
        const y = p.y + (py + scrollParallaxY) * (1 / p.z);

        const tw = 0.75 + 0.25 * Math.sin(p.tw);
        const size =
          p.r * tw * (0.7 + 0.6 * (p.z - zMin) / (zMax - zMin));

        ctx.globalAlpha = opacity * (0.35 + 0.45 * (p.z / zMax));
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [density, maxLinks, baseSpeed, linkDist, zMin, zMax, opacity, glow]);

  return <canvas ref={canvasRef} className="neural-bg" aria-hidden="true" />;
}
