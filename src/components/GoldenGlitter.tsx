import { useEffect, useRef } from "react";

const GoldenGlitter = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Glitter particles
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      opacitySpeed: number;
      hue: number;
    }

    const particles: Particle[] = [];
    const particleCount = 60;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random(),
        opacitySpeed: (Math.random() * 0.02) + 0.005,
        hue: 35 + Math.random() * 15, // Gold hue range (35-50)
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Twinkle effect
        particle.opacity += particle.opacitySpeed;
        if (particle.opacity >= 1 || particle.opacity <= 0.1) {
          particle.opacitySpeed *= -1;
        }

        // Draw glitter particle
        ctx.save();
        ctx.globalAlpha = particle.opacity * 0.7;
        
        // Create gradient for sparkle effect
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 70%, 1)`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 60%, 55%, 0.8)`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 50%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw cross sparkle
        ctx.strokeStyle = `hsla(${particle.hue}, 70%, 75%, ${particle.opacity * 0.5})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particle.x - particle.size * 3, particle.y);
        ctx.lineTo(particle.x + particle.size * 3, particle.y);
        ctx.moveTo(particle.x, particle.y - particle.size * 3);
        ctx.lineTo(particle.x, particle.y + particle.size * 3);
        ctx.stroke();

        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default GoldenGlitter;
