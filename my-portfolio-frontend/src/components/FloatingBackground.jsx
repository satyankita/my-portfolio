
import './FloatingBackground.css';

const particles = Array.from({ length: 35 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 13) % 100}%`,
  top: `${(index * 53 + 7) % 100}%`,
  size: `${4 + (index % 3)}px`,
  duration: `${8 + (index % 8)}s`,
  delay: `${-(index % 15)}s`,
  opacity: 0.2 + (index % 5) * 0.1,
}));

function FloatingBackground() {
  return (
    <div className="floating-background" aria-hidden="true">
      <div className="floating-background__glow floating-background__glow--one" />
      <div className="floating-background__glow floating-background__glow--two" />

      {particles.map((particle) => (
        <span
          key={particle.id}
          className="floating-background__particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            animationDuration: particle.duration,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingBackground;
