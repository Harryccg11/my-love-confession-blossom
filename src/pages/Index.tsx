import { useEffect, useState } from 'react';
import FloatingParticles from '../components/FloatingParticles';
import AnimatedText from '../components/AnimatedText';
import cherryBlossomsBg from '../assets/cherry-blossoms-bg.jpg';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection(prev => {
        if (prev < loveText.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 5000); // Show next section every 5 seconds

    return () => clearInterval(interval);
  }, [loveText.length]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cherryBlossomsBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-romantic opacity-80" />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heart Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 text-rose-medium animate-romantic-pulse">
              💖
            </div>
          </div>

          {/* Title */}
          {currentSection >= 0 && (
            <AnimatedText
              text={loveText[0]}
              delay={500}
              className="text-4xl md:text-6xl font-bold bg-gradient-text bg-clip-text text-transparent mb-12 tracking-wide"
            />
          )}

          {/* Love Letter Content */}
          <div className="space-y-8 max-h-96 overflow-y-auto scrollbar-hide">
            {loveText.slice(1).map((paragraph, index) => (
              currentSection > index && (
                <AnimatedText
                  key={index}
                  text={paragraph}
                  delay={(index + 1) * 1000}
                  className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light tracking-wide backdrop-blur-sm bg-white/20 rounded-2xl p-6 shadow-romantic"
                />
              )
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 flex justify-center space-x-2">
            {loveText.slice(1).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  currentSection > index 
                    ? 'bg-rose-medium shadow-soft' 
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 text-2xl animate-sparkle">✨</div>
          <div className="absolute top-20 right-20 text-2xl animate-sparkle" style={{ animationDelay: '1s' }}>🌸</div>
          <div className="absolute bottom-20 left-20 text-2xl animate-sparkle" style={{ animationDelay: '2s' }}>💕</div>
          <div className="absolute bottom-10 right-10 text-2xl animate-sparkle" style={{ animationDelay: '0.5s' }}>🌹</div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Index;