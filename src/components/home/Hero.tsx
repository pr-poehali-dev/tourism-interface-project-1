import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Путешествия вашей мечты
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in opacity-90">
          Откройте для себя удивительные направления по всему миру. Незабываемые впечатления начинаются здесь!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Link to="/tours">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Смотреть туры
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </Link>
          <Link to="/contacts">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8">
              Связаться с нами
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-white" size={32} />
      </div>
    </section>
  );
};

export default Hero;
