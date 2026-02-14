import { useEffect, useState } from 'react';
import './StartAnimation.css';
import logo from '../assets/shreeNavlogo.png';

const StartAnimation = ({ onComplete }) => {
  const [animationStage, setAnimationStage] = useState('assembling'); // assembling -> moving -> complete
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    // Create 16 pieces (4x4 grid)
    const gridSize = 4;
    const pieceArray = [];
    
    // Get viewport dimensions
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    
    // Responsive sizing
    const isMobile = vw <= 768;
    const logoSize = isMobile ? 200 : 300;
    const pieceSize = isMobile ? 50 : 75;
    
    // Center position where logo container will be
    const centerX = vw / 2 - logoSize / 2;
    const centerY = vh / 2 - logoSize / 2;
    
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        // Random starting position across entire screen
        const randomX = Math.random() * vw - pieceSize;
        const randomY = Math.random() * vh - pieceSize;
        
        // Final position in grid
        const finalX = centerX + (col * pieceSize);
        const finalY = centerY + (row * pieceSize);
        
        // Calculate offset from final position to random start
        const offsetX = randomX - finalX;
        const offsetY = randomY - finalY;
        
        pieceArray.push({
          id: `${row}-${col}`,
          row,
          col,
          offsetX,
          offsetY,
          rotation: Math.random() * 720 - 360,
        });
      }
    }
    
    setPieces(pieceArray);

    // Stage 1: Assemble pieces (2 seconds)
    setTimeout(() => {
      setAnimationStage('assembled');
    }, 2000);

    // Stage 2: Move to navbar position (1 second delay + 1.5 second animation)
    setTimeout(() => {
      setAnimationStage('moving');
    }, 3000);

    // Stage 3: Complete and cleanup (reduced timing)
    setTimeout(() => {
      setAnimationStage('complete');
      if (onComplete) {
        setTimeout(onComplete, 300);
      }
    }, 4800);

  }, [onComplete]);

  if (animationStage === 'complete') {
    return null;
  }

  return (
    <div className={`start-animation-overlay ${animationStage}`}>
      <div className={`logo-container stage-${animationStage}`}>
        {pieces.map((piece) => (
          <div
            key={piece.id}
            className="logo-piece"
            style={{
              '--offset-x': `${piece.offsetX}px`,
              '--offset-y': `${piece.offsetY}px`,
              '--start-rotation': `${piece.rotation}deg`,
              '--row': piece.row,
              '--col': piece.col,
              '--delay': `${(piece.row + piece.col) * 0.05}s`,
              backgroundImage: `url(${logo})`,
              backgroundSize: '400% 400%',
              backgroundPosition: `${piece.col * 33.333}% ${piece.row * 33.333}%`,
            }}
          />
        ))}
        
        {/* Complete logo that appears after assembly */}
        <img 
          src={logo} 
          alt="Emblazon Logo" 
          className={`complete-logo ${animationStage === 'assembled' || animationStage === 'moving' ? 'visible' : ''}`}
        />
      </div>
    </div>
  );
};

export default StartAnimation;
