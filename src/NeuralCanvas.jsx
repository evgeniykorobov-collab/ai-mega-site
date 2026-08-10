import React, { useRef, useEffect } from 'react';

export default function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = Math.min(150, Math.floor(window.innerWidth / 10)); // Responsive count

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1
      });
    }

    const mouse = { x: null, y: null };
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const particleColor = isLight ? 'rgba(8, 145, 178, 0.4)' : 'rgba(0, 240, 255, 0.6)';
      const lineR = isLight ? '8, 145, 178' : '0, 240, 255';
      const mouseStartR = isLight ? '8, 145, 178' : '0, 240, 255';
      const mouseEndR = isLight ? '220, 38, 38' : '255, 0, 60';

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineR}, ${(1 - dist / 130) * 0.5})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Mouse connection
        if (mouse.x) {
          const mDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (mDist < 200) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            // Red/Cyan mix for mouse connection
            const gradient = ctx.createLinearGradient(p.x, p.y, mouse.x, mouse.y);
            gradient.addColorStop(0, `rgba(${mouseStartR}, ${(1 - mDist / 200)})`);
            gradient.addColorStop(1, `rgba(${mouseEndR}, ${(1 - mDist / 200) * 0.8})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas id="neural-canvas" ref={canvasRef} />;
}
