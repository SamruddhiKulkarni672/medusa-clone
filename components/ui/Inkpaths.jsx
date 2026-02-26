'use client';

import { useEffect, useRef, useState } from "react";

const INK_COLORS = [
  { r: 15, g: 52, b: 96 },    // deep navy
  { r: 139, g: 30, b: 63 },   // crimson
  { r: 20, g: 83, b: 45 },    // forest
  { r: 90, g: 24, b: 154 },   // violet
  { r: 180, g: 100, b: 10 },  // amber
  { r: 10, g: 110, b: 130 },  // teal
  { r: 160, g: 30, b: 30 },   // burgundy
  { r: 30, g: 60, b: 120 },   // cobalt
];

class InkDrop {
  constructor(x, y, color, canvasWidth, canvasHeight) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.particles = [];
    this.age = 0;
    this.maxAge = 280 + Math.random() * 120;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.absorbed = false;
    this.spreadRadius = 0;
    this.maxSpread = 60 + Math.random() * 80;

    // Spawn initial particles
    const count = 18 + Math.floor(Math.random() * 14);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.4 + Math.random() * 2.2;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 1.5 + Math.random() * 4,
        alpha: 0.7 + Math.random() * 0.3,
        life: 1,
        decay: 0.004 + Math.random() * 0.008,
        wander: (Math.random() - 0.5) * 0.08,
      });
    }
  }

  update() {
    this.age++;
    this.spreadRadius = Math.min(
      this.maxSpread,
      this.spreadRadius + (this.maxSpread - this.spreadRadius) * 0.03
    );

    const absorbFactor = Math.max(0, 1 - this.age / this.maxAge);

    this.particles = this.particles.filter((p) => p.life > 0.01);
    this.particles.forEach((p) => {
      p.vx += p.wander + (Math.random() - 0.5) * 0.04;
      p.vy += p.wander + (Math.random() - 0.5) * 0.04;
      p.vx *= 0.97;
      p.vy *= 0.97;
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay * (1 + (1 - absorbFactor) * 2);
      p.size *= 0.998;
    });

    if (this.age > this.maxAge * 0.6 && this.particles.length < 6) {
      this.absorbed = true;
    }
  }

  draw(ctx) {
    const absorbFactor = Math.max(0, 1 - this.age / this.maxAge);
    const { r, g, b } = this.color;

    // Draw the main blot (the absorbed center)
    if (this.spreadRadius > 2) {
      const blotAlpha = absorbFactor * 0.55;
      if (blotAlpha > 0.01) {
        const grad = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.spreadRadius
        );
        grad.addColorStop(0, `rgba(${r},${g},${b},${Math.min(blotAlpha * 1.4, 0.7)})`);
        grad.addColorStop(0.4, `rgba(${r},${g},${b},${blotAlpha * 0.8})`);
        grad.addColorStop(0.75, `rgba(${r},${g},${b},${blotAlpha * 0.3})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.spreadRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Draw spreading particles
    this.particles.forEach((p) => {
      const alpha = p.life * absorbFactor * p.alpha;
      if (alpha < 0.01) return;
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.5);
      grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
      grad.addColorStop(0.5, `rgba(${r},${g},${b},${alpha * 0.5})`);
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Feathered edge tendrils
    if (absorbFactor > 0.1 && this.spreadRadius > 10) {
      const tendrilCount = 6;
      for (let i = 0; i < tendrilCount; i++) {
        const angle = (i / tendrilCount) * Math.PI * 2 + this.age * 0.01;
        const len = this.spreadRadius * (0.6 + Math.sin(this.age * 0.05 + i) * 0.3);
        const tx = this.x + Math.cos(angle) * len;
        const ty = this.y + Math.sin(angle) * len;
        const tAlpha = absorbFactor * 0.15;
        const tGrad = ctx.createRadialGradient(tx, ty, 0, tx, ty, 8);
        tGrad.addColorStop(0, `rgba(${r},${g},${b},${tAlpha})`);
        tGrad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = tGrad;
        ctx.beginPath();
        ctx.arc(tx, ty, 8, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}

export default function InkCanvas() {
  const canvasRef = useRef(null);
  const dropsRef = useRef([]);
  const animRef = useRef(null);
  const lastDropTime = useRef(0);
  const bgLayerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      // Re-init background
      bgLayerRef.current = null;
    };

    resize();
    window.addEventListener("resize", resize);

    const spawnDrop = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const color = INK_COLORS[Math.floor(Math.random() * INK_COLORS.length)];
      const margin = 80;
      const x = margin + Math.random() * (w - margin * 2);
      const y = margin + Math.random() * (h - margin * 2);
      dropsRef.current.push(new InkDrop(x, y, color, w, h));
    };

    const loop = (timestamp) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      // Auto-spawn drops
      if (timestamp - lastDropTime.current > 900 + Math.random() * 600) {
        spawnDrop();
        lastDropTime.current = timestamp;
      }

      // Subtle fade to "paper" color to simulate absorption
      ctx.fillStyle = "rgba(245, 240, 232, 0.018)";
      ctx.fillRect(0, 0, w, h);

      // Update & draw drops
      dropsRef.current = dropsRef.current.filter((d) => !d.absorbed || d.age < d.maxAge + 60);
      dropsRef.current.forEach((d) => {
        d.update();
        d.draw(ctx);
      });

      animRef.current = requestAnimationFrame(loop);
    };

    // Init background
    ctx.fillStyle = "rgb(245, 240, 232)";
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const color = INK_COLORS[Math.floor(Math.random() * INK_COLORS.length)];
    dropsRef.current.push(new InkDrop(x, y, color, canvas.offsetWidth, canvas.offsetHeight));
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#f5f0e8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Georgia', serif",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", width: "90vw", height: "80vh", boxShadow: "0 8px 60px rgba(0,0,0,0.18)", borderRadius: 4 }}>
        <canvas
          ref={canvasRef}
          onClick={handleClick}
          style={{
            width: "100%",
            height: "100%",
            cursor: "crosshair",
            borderRadius: 4,
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 18,
            left: 0,
            right: 0,
            textAlign: "center",
            color: "rgba(60,40,20,0.35)",
            fontSize: 13,
            letterSpacing: "0.12em",
            fontStyle: "italic",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          click to drop ink · watch it breathe
        </div>
      </div>
    </div>
  );
}