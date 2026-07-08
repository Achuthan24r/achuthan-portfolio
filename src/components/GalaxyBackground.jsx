import React, { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Star Class
    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        // Orbit parameters relative to canvas center
        const centerX = width / 2;
        const centerY = height / 2;
        
        // Distribute stars in a spiral or circular distribution
        this.distance = Math.random() * (Math.max(width, height) * 0.8);
        this.angle = Math.random() * Math.PI * 2;
        this.speed = (0.0001 + Math.random() * 0.0003) * (Math.random() > 0.5 ? 1 : -1); // slow orbital speed
        this.size = Math.random() * 1.5 + 0.2;
        
        // Colors: mix of white, bluish, purplish, and emerald stars
        const rand = Math.random();
        if (rand < 0.6) {
          this.color = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`; // white
        } else if (rand < 0.8) {
          this.color = `rgba(168, 85, 247, ${Math.random() * 0.8 + 0.2})`; // purple (lucide primary/slate matches)
        } else {
          this.color = `rgba(16, 185, 129, ${Math.random() * 0.8 + 0.2})`; // emerald (theme primary matches)
        }
        
        this.twinkleSpeed = 0.01 + Math.random() * 0.02;
        this.twinkleFactor = Math.random();
        
        // Current coordinates
        this.x = centerX + Math.cos(this.angle) * this.distance;
        this.y = centerY + Math.sin(this.angle) * this.distance;
        this.baseX = this.x;
        this.baseY = this.y;
      }

      update() {
        const centerX = width / 2;
        const centerY = height / 2;

        // Update angle for orbital rotation
        this.angle += this.speed;
        
        // Calculate new base position
        this.baseX = centerX + Math.cos(this.angle) * this.distance;
        this.baseY = centerY + Math.sin(this.angle) * this.distance;

        // Twinkle effect
        this.twinkleFactor += this.twinkleSpeed;
        const opacityModifier = Math.abs(Math.sin(this.twinkleFactor));

        // Mouse interaction: subtle warp/drift away from mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.baseX;
          const dy = mouse.y - this.baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouse.radius) {
            // Push stars slightly away
            const force = (mouse.radius - dist) / mouse.radius;
            const pushX = (dx / dist) * force * -25;
            const pushY = (dy / dist) * force * -25;
            this.x = this.baseX + pushX;
            this.y = this.baseY + pushY;
          } else {
            // Return smoothly
            this.x += (this.baseX - this.x) * 0.05;
            this.y += (this.baseY - this.y) * 0.05;
          }
        } else {
          // Return smoothly to orbital path
          this.x += (this.baseX - this.x) * 0.05;
          this.y += (this.baseY - this.y) * 0.05;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // Adjust twinkle
        const brightness = Math.max(0.2, Math.abs(Math.sin(this.twinkleFactor)));
        ctx.globalAlpha = brightness;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
    }

    // Nebula spots
    class Nebula {
      constructor(color, sizeMultiplier) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = (Math.random() * 200 + 150) * sizeMultiplier;
        this.color = color; // e.g. "rgba(16, 185, 129, 0.04)"
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce at borders
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.color.replace('0.', '0.0')); // fade
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        // Spawn from random positions (top-left or top-right quadrant)
        this.x = Math.random() * width;
        this.y = Math.random() * (height * 0.4); // spawn in top 40% of viewport
        this.length = Math.random() * 80 + 50;
        this.speed = Math.random() * 12 + 8;
        // Direction angle: diagonal downwards (45 degrees / PI/4)
        this.angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.15; 
        this.dx = Math.cos(this.angle) * this.speed;
        this.dy = Math.sin(this.angle) * this.speed;
        this.opacity = 1.0;
        this.fade = Math.random() * 0.02 + 0.015;
        this.active = false;
      }

      update() {
        if (!this.active) {
          // rare random trigger to spawn
          if (Math.random() < 0.0008) {
            this.active = true;
          }
          return;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.opacity -= this.fade;

        // Reset if transparent or out of bounds
        if (this.opacity <= 0 || this.x > width || this.y > height) {
          this.reset();
        }
      }

      draw() {
        if (!this.active) return;

        // Draw a glowing gradient trail
        const gradient = ctx.createLinearGradient(
          this.x, this.y,
          this.x - this.dx * 6, this.y - this.dy * 6
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(0.3, `rgba(168, 85, 247, ${this.opacity * 0.6})`); // fading purple/blue glow
        gradient.addColorStop(1, 'transparent');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = Math.random() * 1.5 + 1.0;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.dx * 6, this.y - this.dy * 6);
        ctx.stroke();
      }
    }

    // Create stars
    const starCount = Math.floor((width * height) / 3500); // responsive star count
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    // Create shooting stars (2 concurrent maximum instances)
    const shootingStars = [new ShootingStar(), new ShootingStar()];

    // Create nebulae (emerald and purple colors matching portfolio theme)
    const nebulae = [
      new Nebula('rgba(16, 185, 129, 0.04)', 1.2), // theme emerald
      new Nebula('rgba(168, 85, 247, 0.04)', 1.5), // theme purple
      new Nebula('rgba(59, 130, 246, 0.03)', 1.8), // royal blue
    ];

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      // Update star count or reset positions
      stars.length = 0;
      const newStarCount = Math.floor((width * height) / 3500);
      for (let i = 0; i < newStarCount; i++) {
        stars.push(new Star());
      }
      // Reset shooting stars
      shootingStars.forEach(s => s.reset());
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      // Clear screen with a very dark blue/black space color
      ctx.fillStyle = '#05070f'; 
      ctx.fillRect(0, 0, width, height);

      // Render nebulae first
      nebulae.forEach((nebula) => {
        nebula.update();
        nebula.draw();
      });

      // Render stars
      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      // Render shooting stars on top of normal stars
      shootingStars.forEach((sStar) => {
        sStar.update();
        sStar.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }} // screen blend mode overlays perfectly
    />
  );
};

export default GalaxyBackground;
