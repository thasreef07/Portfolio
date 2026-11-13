import React, { useRef, useEffect } from 'react';

export default function NeuralNetworkCanvas({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      const dpr = window.devicePixelRatio || 1;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const nodeCount = Math.min(48, Math.floor((width * height) / 12000) + 24);
    const nodes = [];

    // Color choices: Neon green and electric cyan
    const colors = ['#6DFF9B', '#00D9FF', '#A3FFC2', '#38E5FF'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 200 + 50, // 3D depth
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.2 + 1.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.03 + Math.random() * 0.02,
        layer: Math.floor(Math.random() * 4), // 4 virtual layers
      });
    }

    // Synaptic transmission pulses
    const pulses = [];
    const createPulse = (fromNode, toNode) => {
      pulses.push({
        from: fromNode,
        to: toNode,
        progress: 0,
        speed: 0.015 + Math.random() * 0.02,
        color: Math.random() > 0.4 ? '#6DFF9B' : '#00D9FF'
      });
    };

    // Mouse tracking
    let mouse = { x: -1000, y: -1000, radius: 140 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    let pulseInterval = 0;

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Randomly spawn synaptic pulses
      pulseInterval++;
      if (pulseInterval % 25 === 0 && pulses.length < 12) {
        const fromIdx = Math.floor(Math.random() * nodes.length);
        const fromNode = nodes[fromIdx];
        // find a close neighbor
        for (let j = 0; j < nodes.length; j++) {
          if (fromIdx !== j) {
            const dx = nodes[j].x - fromNode.x;
            const dy = nodes[j].y - fromNode.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
              createPulse(fromNode, nodes[j]);
              break;
            }
          }
        }
      }

      // Update and connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;

        // Bounce
        if (node.x < 10) { node.x = 10; node.vx *= -1; }
        if (node.x > width - 10) { node.x = width - 10; node.vx *= -1; }
        if (node.y < 10) { node.y = 10; node.vy *= -1; }
        if (node.y > height - 10) { node.y = height - 10; node.vy *= -1; }

        // Mouse interaction
        const mdx = mouse.x - node.x;
        const mdy = mouse.y - node.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < mouse.radius) {
          const force = (1 - mDist / mouse.radius) * 1.5;
          node.x -= (mdx / mDist) * force;
          node.y -= (mdy / mDist) * force;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const target = nodes[j];
          const dx = target.x - node.x;
          const dy = target.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 135;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.28;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);

            // Subtle gradient line
            const grad = ctx.createLinearGradient(node.x, node.y, target.x, target.y);
            grad.addColorStop(0, `rgba(109, 255, 155, ${alpha})`);
            grad.addColorStop(1, `rgba(0, 217, 255, ${alpha * 0.8})`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw connections to mouse if close
        if (mDist < mouse.radius) {
          const alpha = (1 - mDist / mouse.radius) * 0.45;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(109, 255, 155, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        // Draw node with glow
        const currentRadius = node.radius + Math.sin(node.pulse) * 0.6;
        
        // Outer soft glow
        const glowGrad = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, currentRadius * 4.5
        );
        glowGrad.addColorStop(0, `${node.color}55`);
        glowGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw and update traveling pulses (synaptic action potentials)
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const px = pulse.from.x + (pulse.to.x - pulse.from.x) * pulse.progress;
        const py = pulse.from.y + (pulse.to.y - pulse.from.y) * pulse.progress;

        ctx.fillStyle = pulse.color;
        ctx.shadowColor = pulse.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(px, py, 2.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
    />
  );
}
