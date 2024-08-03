import React, { useEffect, useState } from 'react';

const CursorTrail = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPositions((prevPositions) => [
        { x: event.clientX, y: event.clientY, id: Date.now() },
        ...prevPositions.slice(0, 9),
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        zIndex: 10000,
      }}
    >
      {positions.map((pos, index) => (
        <div
          key={pos.id}
          style={{
            position: 'absolute',
            width: `${10 - index}px`,
            height: `${10 - index}px`,
            backgroundColor: '#00BFFF',
            borderRadius: '50%',
            opacity: 1 - index * 0.1,
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            transition: 'transform 0.2s ease, opacity 0.2s ease',
            transform: 'scale(1)',
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
