import { useEffect, useState } from 'react'

export default function Home() {
  const [currentLoveLanguage, setCurrentLoveLanguage] = useState(0);
  
  const loveLanguages = [
    { icon: "💬", text: "Words of Affirmation", subtitle: "Kata-kata penuh cinta" },
    { icon: "⏰", text: "Quality Time", subtitle: "Waktu bersama yang bermakna" },
    { icon: "🎁", text: "Receiving Gifts", subtitle: "Perhatian dalam bentuk hadiah" },
    { icon: "🤝", text: "Acts of Service", subtitle: "Tindakan nyata penuh kasih" },
    { icon: "🤗", text: "Physical Touch", subtitle: "Sentuhan hangat dan pelukan" }
  ];

  useEffect(() => {
    // Cycle through love languages
    const interval = setInterval(() => {
      setCurrentLoveLanguage((prev) => (prev + 1) % loveLanguages.length);
    }, 4000);

    // Simple floating hearts
    function createHeart() {
      const heart = document.createElement('div');
      heart.className = 'simple-heart';
      heart.innerHTML = '💕';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
      
      const container = document.querySelector('.floating-elements');
      if (container) {
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 8000);
      }
    }

    const heartInterval = setInterval(createHeart, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(heartInterval);
    };
  }, []);

  return (
    <>
      <div className="floating-elements"></div>
      
      <div className="container">
        <header className="hero">
          <div className="name-container">
            <h1 className="main-name">Dwi Wulandari</h1>
            <p className="tagline">Seseorang yang Istimewa</p>
          </div>
        </header>

        <div className="love-language-section">
          <h2>💖 Love Languages 💖</h2>
          <div className="love-language-display">
            <div className="love-icon">
              {loveLanguages[currentLoveLanguage].icon}
            </div>
            <div className="love-text">
              <h3>{loveLanguages[currentLoveLanguage].text}</h3>
              <p>{loveLanguages[currentLoveLanguage].subtitle}</p>
            </div>
          </div>
          <div className="love-indicators">
            {loveLanguages.map((_, index) => (
              <div 
                key={index}
                className={`indicator ${index === currentLoveLanguage ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        <div className="music-player">
          <div className="music-header">
            <h2>🎵 Lagu Spesial</h2>
            <div className="song-info">
              <div className="song-title">Season</div>
              <div className="artist">Weave to Earth</div>
            </div>
          </div>
          
          <div className="spotify-embed">
            <iframe 
              src="https://open.spotify.com/embed/track/5VBjyOQzqlPNgdRPMM6prF?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>
        </div>

        <div className="qualities-grid">
          <div className="quality-card">
            <div className="quality-icon">🌸</div>
            <h3>Keanggunan</h3>
            <p>Seperti bunga sakura yang mekar dengan indah, membawa ketenangan dan kebahagiaan.</p>
          </div>
          
          <div className="quality-card">
            <div className="quality-icon">✨</div>
            <h3>Keceriaan</h3>
            <p>Senyuman yang mampu menerangi hari-hari kelam, membawa kehangatan dalam setiap momen.</p>
          </div>
          
          <div className="quality-card">
            <div className="quality-icon">💫</div>
            <h3>Inspirasi</h3>
            <p>Seseorang yang selalu memotivasi untuk menjadi lebih baik, dengan sikap positif yang menular.</p>
          </div>
        </div>

        <div className="quote">
          <p>"Musik adalah bahasa universal yang menyatukan hati"</p>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Georgia', 'Times New Roman', serif;
          background: linear-gradient(135deg, #fce7f3 0%, #f9a8d4 30%, #ec4899 60%, #f9a8d4 100%);
          min-height: 100vh;
          color: #831843;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .floating-elements {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .simple-heart {
          position: absolute;
          font-size: 18px;
          animation: gentleFloat 8s infinite linear;
          opacity: 0.6;
        }

        @keyframes gentleFloat {
          0% {
            transform: translateY(100vh);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-50px);
            opacity: 0;
          }
        }

        .hero {
          text-align: center;
          padding: 60px 0;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          margin-bottom: 50px;
          box-shadow: 0 8px 32px rgba(219, 39, 119, 0.1);
        }

        .main-name {
          font-size: 3.5rem;
          font-weight: 400;
          color: #be185d;
          margin-bottom: 15px;
          letter-spacing: 2px;
          text-shadow: 0 2px 4px rgba(190, 24, 93, 0.1);
        }

        .tagline {
          font-size: 1.2rem;
          color: #9d174d;
          font-style: italic;
          opacity: 0.8;
        }

        .love-language-section {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(252, 231, 243, 0.8) 100%);
          backdrop-filter: blur(15px);
          border-radius: 25px;
          padding: 60px 40px;
          margin: 50px 0;
          text-align: center;
          box-shadow: 0 15px 50px rgba(219, 39, 119, 0.25);
          border: 2px solid rgba(236, 72, 153, 0.3);
        }

        .love-language-section h2 {
          color: #be185d;
          margin-bottom: 40px;
          font-size: 2.5rem;
          font-weight: 500;
          text-shadow: 0 2px 4px rgba(190, 24, 93, 0.2);
        }

        .love-language-display {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin-bottom: 40px;
          min-height: 120px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 20px;
          padding: 30px;
          box-shadow: inset 0 4px 15px rgba(236, 72, 153, 0.1);
        }

        .love-icon {
          font-size: 4.5rem;
          animation: gentlePulse 2s infinite;
          filter: drop-shadow(0 4px 8px rgba(236, 72, 153, 0.3));
        }

        @keyframes gentlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        .love-text h3 {
          color: #be185d;
          font-size: 1.8rem;
          margin-bottom: 12px;
          font-weight: 600;
          text-shadow: 0 1px 2px rgba(190, 24, 93, 0.1);
        }

        .love-text p {
          color: #9d174d;
          font-size: 1.2rem;
          opacity: 0.9;
          font-style: italic;
        }

        .love-indicators {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(236, 72, 153, 0.3);
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(236, 72, 153, 0.2);
        }

        .indicator.active {
          background: #ec4899;
          transform: scale(1.3);
          box-shadow: 0 4px 12px rgba(236, 72, 153, 0.4);
        }

        .music-player {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px;
          margin: 40px 0;
          text-align: center;
          box-shadow: 0 8px 32px rgba(219, 39, 119, 0.1);
        }

        .music-header h2 {
          color: #be185d;
          margin-bottom: 20px;
          font-size: 1.6rem;
          font-weight: 400;
        }

        .song-info {
          margin-bottom: 25px;
        }

        .song-title {
          font-size: 1.3rem;
          color: #be185d;
          margin-bottom: 5px;
          font-weight: 500;
        }

        .artist {
          color: #9d174d;
          font-size: 1rem;
          opacity: 0.8;
        }

        .spotify-embed {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(219, 39, 119, 0.15);
        }

        .spotify-embed iframe {
          border-radius: 15px;
        }

        .qualities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin: 50px 0;
        }

        .quality-card {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 20px rgba(219, 39, 119, 0.1);
        }

        .quality-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(219, 39, 119, 0.15);
        }

        .quality-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
          display: inline-block;
          animation: gentleBounce 3s infinite;
        }

        @keyframes gentleBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .quality-card h3 {
          color: #be185d;
          margin-bottom: 15px;
          font-size: 1.3rem;
          font-weight: 500;
        }

        .quality-card p {
          color: #9d174d;
          line-height: 1.6;
          opacity: 0.9;
        }

        .quote {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          margin-top: 40px;
          box-shadow: 0 4px 20px rgba(219, 39, 119, 0.1);
        }

        .quote p {
          color: #9d174d;
          font-size: 1.1rem;
          font-style: italic;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .main-name {
            font-size: 2.5rem;
          }
          
          .love-language-display {
            flex-direction: column;
            gap: 20px;
            padding: 25px;
          }

          .love-icon {
            font-size: 4rem;
          }

          .love-text h3 {
            font-size: 1.6rem;
          }

          .love-text p {
            font-size: 1.1rem;
          }
          
          .music-player, .love-language-section {
            padding: 30px 20px;
          }

          .qualities-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </>
  )
}