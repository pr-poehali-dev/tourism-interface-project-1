import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const popularDestinations = [
    {
      id: 1,
      title: "Мальдивы",
      description: "Райские острова с белоснежными пляжами",
      price: "от 85 000 ₽",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800"
    },
    {
      id: 2,
      title: "Италия",
      description: "Романтика и история древних городов",
      price: "от 65 000 ₽",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800"
    },
    {
      id: 3,
      title: "Таиланд",
      description: "Экзотика и буддийские храмы",
      price: "от 55 000 ₽",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800"
    },
    {
      id: 4,
      title: "ОАЭ",
      description: "Роскошь и восточная сказка",
      price: "от 70 000 ₽",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600')",
            filter: "brightness(0.7)"
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Путешествия вашей мечты
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Откройте мир незабываемых впечатлений вместе с нами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Input 
              placeholder="Куда хотите отправиться?" 
              className="h-14 text-lg bg-white/95 text-foreground placeholder:text-muted-foreground border-0"
            />
            <Button size="lg" className="h-14 px-8 text-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Icon name="Search" className="mr-2" size={20} />
              Найти тур
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Популярные направления</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите идеальное место для вашего отпуска
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination) => (
              <Link 
                key={destination.id} 
                to={`/tours?destination=${destination.title}`}
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {destination.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{destination.title}</h3>
                    <p className="text-muted-foreground mb-4">{destination.description}</p>
                    <Button className="w-full" variant="outline">
                      Смотреть туры
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                <Icon name="Shield" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Надежность</h3>
              <p className="text-muted-foreground">
                Работаем с проверенными партнёрами и гарантируем безопасность
              </p>
            </div>
            
            <div className="text-center p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-secondary-foreground rounded-full mb-4">
                <Icon name="Percent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Лучшие цены</h3>
              <p className="text-muted-foreground">
                Специальные предложения и скидки для наших клиентов
              </p>
            </div>
            
            <div className="text-center p-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4">
                <Icon name="Headphones" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Поддержка 24/7</h3>
              <p className="text-muted-foreground">
                Всегда на связи, чтобы помочь вам в любой ситуации
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы к путешествию?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Забронируйте тур мечты прямо сейчас и получите скидку 5% на первое путешествие
          </p>
          <Link to="/tours">
            <Button size="lg" className="h-14 px-12 text-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Посмотреть все туры
              <Icon name="Plane" className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
