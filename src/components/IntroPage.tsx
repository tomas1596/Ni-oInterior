interface IntroPageProps {
  onContinue: () => void;
}

function IntroPage({ onContinue }: IntroPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-blue-50 flex items-center justify-center p-6">
      <div className="text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif text-rose-600 leading-tight">
          Hola Pri<br />Alguien quiere<br />decirte algo...
        </h1>

        <button
          onClick={onContinue}
          className="px-10 py-4 bg-rose-500 hover:bg-rose-600 text-white text-xl font-light rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Apretame
        </button>
      </div>
    </div>
  );
}

export default IntroPage;
