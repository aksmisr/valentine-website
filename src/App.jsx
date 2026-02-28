import React, { useState } from 'react';

export default function ValentineWebsite() {
  const [screen, setScreen] = useState(1);
  const [noClickCount, setNoClickCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [confetti, setConfetti] = useState([]);

  // Generate floating hearts for background
  const backgroundHearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
  }));

  // Handle NO button click - make it move away
  const handleNoClick = () => {
    setNoClickCount(prev => prev + 1);
    const newX = Math.random() * 60 - 30;
    const newY = Math.random() * 60 - 30;
    setNoButtonPosition({ x: newX, y: newY });
  };

  // Handle YES button click - show confetti
  const handleYesClick = () => {
    // Generate confetti
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
    }));
    setConfetti(newConfetti);
    setScreen(6);
  };

  // Calculate YES button size based on NO clicks
  const yesButtonScale = 1 + (noClickCount * 0.15);

  // Styles
  const containerStyle = {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    background: 'linear-gradient(135deg, #ffeef8 0%, #ffe0f0 25%, #ffd4e8 50%, #ffc7e0 75%, #ffb6d9 100%)'
  };

const contentContainerStyle = {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    maxWidth: '28rem',
    margin: '0 auto',
    textAlign: 'center',
    padding: '1rem',
    transform: 'translateY(-15%)'
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
    paddingTop: '0.5rem',
    background: 'linear-gradient(45deg, #ff0844, #ff6b9d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: '1.3',
    paddingBottom: '8px',
    width: '100%'
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    color: '#be185d',
    marginBottom: '1.5rem',
    fontWeight: '500',
    textAlign: 'center',
    width: '100%',
    display: 'block',
    margin: '0 auto 1.5rem auto'
  };

  const messageBoxStyle = {
    borderRadius: '1.5rem',
    padding: '2rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    marginBottom: '2rem',
    background: 'linear-gradient(135deg, rgba(255, 182, 217, 0.4) 0%, rgba(255, 200, 224, 0.5) 50%, rgba(255, 220, 240, 0.4) 100%)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(255, 182, 217, 0.3)'
  };

  const messageTextStyle = {
    fontSize: '1.5rem',
    color: '#1f2937',
    lineHeight: '1.625',
    fontWeight: '500',
    textAlign: 'center'
  };

  const buttonStyle = {
    fontSize: '1.125rem',
    padding: '1rem 2rem',
    borderRadius: '9999px',
    fontWeight: '600',
    transition: 'all 0.3s',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(135deg, #ff6b9d 0%, #ff0844 100%)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    userSelect: 'none'
  };

  const questionHeadingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '3rem',
    color: '#831843',
    textAlign: 'center'
  };

  const yesButtonStyle = {
    fontSize: '1.25rem',
    padding: '1.25rem 2.5rem',
    borderRadius: '9999px',
    fontWeight: 'bold',
    transition: 'all 0.3s',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    background: 'linear-gradient(135deg, #00ff88 0%, #00cc66 100%)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transform: `scale(${yesButtonScale})`,
    userSelect: 'none'
  };

  const noButtonStyle = {
    fontSize: '1.125rem',
    padding: '1rem 2rem',
    borderRadius: '9999px',
    fontWeight: '600',
    transition: 'all 0.2s',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(135deg, #ff9999 0%, #ff6666 100%)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
    userSelect: 'none'
  };

  const finalHeadingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#831843',
    textAlign: 'center'
  };

  const finalSubheadingStyle = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#be185d',
    textAlign: 'center'
  };

  const finalTextStyle = {
    fontSize: '1.25rem',
    color: '#be185d',
    fontWeight: '500',
    textAlign: 'center'
  };

  const hintTextStyle = {
    marginTop: '2rem',
    fontSize: '1.125rem',
    color: '#be185d',
    fontWeight: '500',
    animation: 'bounce 1s infinite'
  };

  return (
    <div style={containerStyle}>
      
      {/* Floating Hearts Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        {backgroundHearts.map(heart => (
          <div
            key={heart.id}
            style={{
              position: 'absolute',
              fontSize: '2.25rem',
              opacity: 0.2,
              left: `${heart.left}%`,
              animation: `floatUp ${heart.duration}s ease-in infinite`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      {/* Confetti Effect */}
      {screen === 6 && (
        <div style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}>
          {confetti.map(piece => (
            <div
              key={piece.id}
              style={{
                position: 'absolute',
                fontSize: '1.5rem',
                left: `${piece.left}%`,
                top: '-10%',
                animation: `fallDown ${piece.duration}s ease-in`,
                animationDelay: `${piece.delay}s`,
              }}
            >
              {['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      {/* Main Content Container */}
      <div style={contentContainerStyle}>
        
        {/* Screen 1 - Big Name Heading */}
        {screen === 1 && (
          <div style={{ animation: 'fadeIn 0.6s ease-out', width: '100%' }}>
            <h1 style={{
              ...headingStyle,
              fontSize: '3rem',
              textShadow: '0 4px 20px rgba(255, 8, 68, 0.3)'
            }}>
              For You Bae ❤️
            </h1>
            <p style={subtitleStyle}>
              This is just for you...
            </p>
            <button
              onClick={() => setScreen(2)}
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.target.style.transform = 'scale(1.1)'}
            >
              Let Me Tell You Something 💌
            </button>
          </div>
        )}

        {/* Screen 2 - About Her Eyes */}
        {screen === 2 && (
          <div style={{ animation: 'fadeIn 0.6s ease-out' }}>
            <h1 style={headingStyle}>
              For You Bae ❤️
            </h1>
            <div style={messageBoxStyle}>
              <p style={messageTextStyle}>
                There's something about your eyes... they feel like home and adventure at the same time. 👀✨
              </p>
            </div>
            <button
              onClick={() => setScreen(3)}
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.target.style.transform = 'scale(1.1)'}
            >
              Just One More Thing 🌸
            </button>
          </div>
        )}

        {/* Screen 3 - About Her Beauty */}
        {screen === 3 && (
          <div style={{ animation: 'fadeIn 0.6s ease-out' }}>
            <h1 style={headingStyle}>
              For You Bae ❤️
            </h1>
            <div style={messageBoxStyle}>
              <p style={messageTextStyle}>
                You don't just look beautiful... you carry beauty in the way you exist. 🌷💫
              </p>
            </div>
            <button
              onClick={() => setScreen(4)}
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.target.style.transform = 'scale(1.1)'}
            >
              Before I Ask... 💌
            </button>
          </div>
        )}

        {/* Screen 4 - Her Importance */}
        {screen === 4 && (
          <div style={{ animation: 'fadeIn 0.6s ease-out' }}>
            <h1 style={headingStyle}>
              For You Bae ❤️
            </h1>
            <div style={messageBoxStyle}>
              <p style={messageTextStyle}>
                You're not just someone I like... you're someone who truly matters to me. 🌹💖
              </p>
            </div>
            <button
              onClick={() => setScreen(5)}
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.target.style.transform = 'scale(1.1)'}
            >
              One Last Thing 💖
            </button>
          </div>
        )}

        {/* Screen 5 - The Question */}
        {screen === 5 && (
          <div style={{ animation: 'fadeIn 0.6s ease-out' }}>
            <h1 style={headingStyle}>
              For You Bae ❤️
            </h1>
            <h2 style={questionHeadingStyle}>
              Will you be my Valentine? 💍
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <button
                onClick={handleYesClick}
                style={yesButtonStyle}
                onMouseEnter={(e) => e.target.style.transform = `scale(${yesButtonScale * 1.05})`}
                onMouseLeave={(e) => e.target.style.transform = `scale(${yesButtonScale})`}
              >
                YES 💕
              </button>
              <button
                onClick={handleNoClick}
                style={noButtonStyle}
                onMouseEnter={(e) => e.target.style.transform = `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px) scale(1.05)`}
                onMouseLeave={(e) => e.target.style.transform = `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px) scale(1)`}
              >
                NO 🙈
              </button>
            </div>
            {noClickCount > 0 && (
              <p style={hintTextStyle}>
                The YES button is getting bigger... maybe that's a sign? 😊💕
              </p>
            )}
          </div>
        )}

        {/* Screen 6 - Success */}
        {screen === 6 && (
          <div style={{ animation: 'fadeIn 0.6s ease-out' }}>
            <div style={{
              fontSize: '4.5rem',
              marginBottom: '2rem',
              animation: 'pulse 2s infinite',
              textAlign: 'center'
            }}>
              ❤️
            </div>
            <h2 style={finalHeadingStyle}>
              Thank you Bae ❤️
            </h2>
            <h3 style={finalSubheadingStyle}>
              This means more to me than you know ❤️
            </h3>
            <p style={finalTextStyle}>
              I can't wait to make beautiful memories with you. 💕✨
            </p>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes fallDown {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        * {
          -webkit-tap-highlight-color: transparent;
        }

        @media (max-width: 640px) {
          button {
            font-size: 1rem !important;
            padding: 0.875rem 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}