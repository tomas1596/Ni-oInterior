import { useEffect, useState, useRef } from 'react';
import { Heart } from 'lucide-react';
import loveSong from '../song/truebeauty.mp3'; // tu canción
import kidImage from '../image/kid.png'; // tu imagen

function MessagePage() {
  const [showImage, setShowImage] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);

  const message = `Hola Pri…
Soy ese niño interior de Tomi, ese que estaba guardado bien adentro suyo y que vos lograste despertar.
Yo no sabía que todavía existía, ni que podía volver a sentir todo esto. Pero llegaste vos, y con cada gesto, cada palabra y cada abrazo, me trajiste de vuelta.

Gracias a vos me volví a emocionar como un nene, me volví a sorprender, a sentirme querido de una manera sincera y simple. Vos sos la primera persona que me hizo sentir así.

Cada cosa que hacés —cada esfuerzo, cada detalle, cada regalo, cada mensaje— me llega directo al corazón. Me hacés sentir vulnerable, pero de la forma más linda posible: con ternura, con alegría, con ilusión.

Con vos vuelvo a llorar de emoción cuando me das algo, vuelvo a reír hasta que me duele la panza, vuelvo a sentir que puedo mostrarme tal cual soy, sin miedo, sin caretas. Con vos me descubrí de nuevo y entendí lo que significa ser amado de verdad.

Gracias, Pri, por despertarme. Por recordarle a Tomi que todavía hay un nene ahí adentro que quiere amar, jugar, ilusionarse, abrir el corazón. Con vos sentimos algo que no vivimos jamás, y sabemos que no hay nada más real que esto.

Vos sos la razón de esta felicidad, de que yo esté acá. Sos todo lo que siempre soñamos.
Y ojalá vos también te sientas así con él, porque nosotros no buscamos nada más que ayudarte a sacar a esa niña interior que llevás dentro, como vos nos ayudaste a sacar a nosotros.

Sos, sin dudas, lo más lindo que nos pasó en la vida.
Nunca dudes de lo que sos para él, porque te ama con todo el corazón.

Su niño interior ♥`;

  useEffect(() => {
    // Reproducir música
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log('Autoplay bloqueado por el navegador');
      });
    }

    // Mostrar imagen con fade-in
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 500);

    // Efecto de escritura
    const textTimer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= message.length) {
          setDisplayedText(message.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    }, 1500);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(textTimer);
    };
  }, [message]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-yellow-50/80 py-12 px-6 flex items-center justify-center">
      <audio ref={audioRef} loop>
        <source src={loveSong} type="audio/mpeg" />
      </audio>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Corazones flotando arriba */}
        <div className="flex justify-center mb-8">
          <Heart className="w-12 h-12 text-rose-500 animate-pulse" fill="currentColor" />
        </div>

        {/* Imagen con fade-in */}
        <div
          className={`transform transition-all duration-1000 ${
            showImage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img
            src={kidImage}
            alt="Nosotros dos"
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>

        {/* Carta romántica */}
        <div className="bg-gradient-to-br from-pink-100 via-rose-50 to-yellow-50/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl shadow-pink-200">
          <p className="text-lg md:text-xl text-rose-700 font-serif leading-relaxed whitespace-pre-line">
            {displayedText}
            <span className="animate-blink">|</span>
          </p>
        </div>

        {/* Corazones flotando abajo */}
        <div className="flex justify-center pt-8">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-6 h-6 text-rose-400 animate-float"
                fill="currentColor"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagePage;

