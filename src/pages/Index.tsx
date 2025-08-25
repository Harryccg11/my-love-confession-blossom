import { useEffect, useState } from 'react';
import FloatingParticles from '../components/FloatingParticles';
import AnimatedText from '../components/AnimatedText';
import cherryBlossomsBg from '../assets/cherry-blossoms-bg.jpg';

interface ClickHeart {
  id: number;
  x: number;
  y: number;
}

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [clickHearts, setClickHearts] = useState<ClickHeart[]>([]);
  const [showSurprise, setShowSurprise] = useState(false);

  const loveText = [
    "¿SABES PORQUE ME ENAMORE DE TI?",
    "Si alguien me hubiera dicho que un día tu nombre se volvería mi pensamiento más recurrente, que mi día no estaría completo sin escuchar tu voz, que tu risa se convertiría en mi canción favorita... probablemente no lo habría creído. Pero aquí estoy, tratando de poner en palabras algo que quizás no tenga explicación.",
    "No planeé enamorarme de ti. No era parte de ningún plan ni de ninguna historia que imaginé. Pero sucedió, y ahora me pregunto cómo pude vivir tanto tiempo sin sentir esto. No fue un solo instante ni un momento específico; fue cada pequeño detalle, cada conversación, cada mirada que sin darme cuenta me iba atrapando.",
    "Me enamoré de ti porque cuando hablo contigo, todo parece más ligero, como si el mundo se pusiera en pausa y solo existiéramos tú y yo. Porque contigo no hay silencios incómodos, solo pausas en las que disfruto simplemente estar. Porque sin importar cómo haya sido mi día, basta con que me hables para que todo se sienta mejor.",
    "Me enamoré porque contigo no tengo que pretender nada. Puedo ser quien realmente soy, sin miedo a equivocarme, sin necesidad de impresionar. Porque cuando me miras, siento que ves más allá de lo que los demás ven, que entiendes mis pensamientos incluso antes de que los diga en voz alta. Y eso, aunque me asusta un poco, me hace sentir que contigo siempre tengo un refugio.",
    "Me enamoré porque en tu risa hay una chispa que enciende algo en mí, porque cuando hablas con pasión de tus sueños, tu mirada brilla de una forma que me deja sin palabras. Porque me gusta cómo te emocionas por las cosas más simples, cómo tienes esa manera tan tuya de ver el mundo, como si en cada pequeño detalle hubiera algo digno de admirar.",
    "Me enamoré de ti porque me gusta cómo me haces sentir. Me gusta que, sin proponértelo, logras llenar mis días de luz. Me gusta que, aunque estés lejos, de alguna manera siempre te siento cerca. Me gusta la forma en que logras calmarme cuando todo parece ir demasiado rápido y, al mismo tiempo, la forma en que haces que mi corazón lata más fuerte.",
    "Y cada noche me hago la misma pregunta: ¿cómo hago para no caer aún más en este sentimiento? ¿Cómo evitar que crezca algo que ya es tan inmenso? A veces intento convencerme de que no debería sentir esto tan profundo, que quizá debería frenar un poco, que tal vez me estoy perdiendo demasiado en ti. Pero luego pienso en todo lo que eres, en cada momento contigo, у me doy cuenta de que no quiero evitarlo. No quiero detenerlo.",
    "Porque tú vales la pena. Cada instante, cada palabra, cada sonrisa. Valen la pena los pensamientos que me asaltan a mitad de la noche, valen la pena las ganas de verte, de hablarte, de saber de ti. Vale la pena todo lo que siento, incluso si a veces me asusta, incluso si no sé qué pasará después.",
    "No sé qué nos deparará el futuro, pero hay algo que sí sé: Me enamoré de ti sin esperarlo, sin planearlo, pero con todo mi corazón. Y si tuviera la oportunidad de elegir, te volvería a elegir a ti, una y otra vez... 🌺💗"
  ];

  const surpriseMessages = [
    "¡Eres increíble! 💕",
    "Tu sonrisa ilumina mi mundo ✨",
    "Cada día contigo es un regalo 🎁",
    "Eres mi persona favorita 🌟",
    "Contigo todo es mejor 🥰"
  ];

  // Función para crear corazones al hacer click/touch
  const handleScreenClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isStarted) return;
    
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'clientX' in e ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
    const y = 'clientY' in e ? e.clientY - rect.top : e.touches[0].clientY - rect.top;
    
    const newHeart: ClickHeart = {
      id: Date.now(),
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    };
    
    setClickHearts(prev => [...prev, newHeart]);
    
    // Remover el corazón después de la animación
    setTimeout(() => {
      setClickHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
    }, 1500);
  };

  const handleNext = () => {
    if (currentSection < loveText.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else {
      setShowSurprise(true);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const startExperience = () => {
    setIsStarted(true);
    setCurrentSection(0);
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cherryBlossomsBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-romantic opacity-90" />
        <FloatingParticles />
        
        {/* Welcome Screen */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="text-center max-w-md mx-auto">
            <div className="text-6xl mb-6 animate-romantic-pulse">💝</div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-text bg-clip-text text-transparent mb-6">
              Tienes un regalo especial
            </h1>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Alguien muy especial quiere compartir algo contigo...
            </p>
            <button
              onClick={startExperience}
              className="bg-rose-medium text-white px-8 py-4 rounded-full text-lg font-medium shadow-romantic hover:scale-105 transition-all duration-300 hover:shadow-soft"
            >
              Abrir Regalo 💕
            </button>
            <p className="text-sm text-foreground/60 mt-4">
              Toca la pantalla para crear magia ✨
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (showSurprise) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cherryBlossomsBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-romantic opacity-90" />
        <FloatingParticles />
        
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="text-center max-w-lg mx-auto">
            <div className="text-8xl mb-6 animate-bounce">🎉</div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-text bg-clip-text text-transparent mb-6">
              ¡Sorpresa Final!
            </h1>
            <div className="space-y-4 mb-8">
              {surpriseMessages.map((message, index) => (
                <AnimatedText
                  key={index}
                  text={message}
                  delay={index * 500}
                  className="text-xl text-foreground/90 backdrop-blur-sm bg-white/20 rounded-2xl p-4"
                />
              ))}
            </div>
            <div className="text-6xl mb-6 animate-romantic-pulse">💍✨🌹</div>
            <button
              onClick={() => {
                setShowSurprise(false);
                setCurrentSection(0);
              }}
              className="bg-gold-medium text-white px-6 py-3 rounded-full font-medium shadow-romantic hover:scale-105 transition-all duration-300"
            >
              Leer de nuevo 💕
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen relative overflow-hidden cursor-pointer"
      onClick={handleScreenClick}
      onTouchStart={handleScreenClick}
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cherryBlossomsBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-romantic opacity-80" />
      <FloatingParticles />
      
      {/* Click Hearts */}
      {clickHearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute pointer-events-none text-2xl animate-fade-in-up z-20"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animation: 'fade-in-up 1.5s ease-out forwards',
          }}
        >
          💖
        </div>
      ))}
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between p-4 md:p-6">
        {/* Header */}
        <div className="text-center pt-4">
          <div className="text-4xl mb-2 animate-romantic-pulse">💖</div>
          <div className="text-sm text-foreground/70">
            {currentSection + 1} de {loveText.length}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-2xl mx-auto text-center">
            {currentSection === 0 ? (
              <AnimatedText
                text={loveText[0]}
                delay={200}
                className="text-3xl md:text-5xl font-bold bg-gradient-text bg-clip-text text-transparent mb-8 tracking-wide px-4"
              />
            ) : (
              <AnimatedText
                text={loveText[currentSection]}
                delay={200}
                className="text-base md:text-lg leading-relaxed text-foreground/90 font-light tracking-wide backdrop-blur-sm bg-white/20 rounded-2xl p-4 md:p-6 shadow-romantic"
              />
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pb-4">
          <button
            onClick={handlePrevious}
            disabled={currentSection === 0}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              currentSection === 0 
                ? 'bg-white/10 text-foreground/30 cursor-not-allowed' 
                : 'bg-white/20 text-foreground/80 hover:bg-white/30 hover:scale-105'
            }`}
          >
            <span>←</span>
            <span className="hidden sm:inline">Anterior</span>
          </button>

          {/* Progress Dots */}
          <div className="flex space-x-2">
            {loveText.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  currentSection >= index 
                    ? 'bg-rose-medium shadow-soft' 
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-rose-medium text-white hover:bg-rose-deep hover:scale-105 transition-all duration-300 shadow-romantic"
          >
            <span className="hidden sm:inline">
              {currentSection === loveText.length - 1 ? 'Sorpresa' : 'Siguiente'}
            </span>
            <span>{currentSection === loveText.length - 1 ? '🎁' : '→'}</span>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 text-lg md:text-2xl animate-sparkle opacity-70">✨</div>
      <div className="absolute top-8 right-4 text-lg md:text-2xl animate-sparkle opacity-70" style={{ animationDelay: '1s' }}>🌸</div>
      <div className="absolute bottom-20 left-4 text-lg md:text-2xl animate-sparkle opacity-70" style={{ animationDelay: '2s' }}>💕</div>
      <div className="absolute bottom-4 right-20 text-lg md:text-2xl animate-sparkle opacity-70" style={{ animationDelay: '0.5s' }}>🌹</div>

      {/* Hint Text */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-xs text-foreground/40 writing-mode-vertical hidden md:block">
        Toca la pantalla 💫
      </div>
      
      {/* Custom Styles */}
      <style>{`
        .writing-mode-vertical {
          writing-mode: vertical-lr;
          text-orientation: mixed;
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translateY(-10px) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translateY(-30px) scale(0.8);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;