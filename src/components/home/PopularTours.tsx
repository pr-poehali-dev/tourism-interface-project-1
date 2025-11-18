import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const tours = [
  {
    id: 1,
    title: 'Райские Мальдивы',
    location: 'Мальдивы',
    price: '120 000',
    duration: '7 дней',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    rating: 5,
    popular: true
  },
  {
    id: 2,
    title: 'Европейская классика',
    location: 'Франция, Италия',
    price: '95 000',
    duration: '10 дней',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    rating: 5,
    popular: true
  },
  {
    id: 3,
    title: 'Экзотический Таиланд',
    location: 'Таиланд',
    price: '65 000',
    duration: '8 дней',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
    rating: 4,
    popular: false
  },
  {
    id: 4,
    title: 'Горнолыжная Швейцария',
    location: 'Швейцария',
    price: '150 000',
    duration: '5 дней',
    image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80',
    rating: 5,
    popular: true
  },
  {
    id: 5,
    title: 'Солнечная Турция',
    location: 'Турция',
    price: '45 000',
    duration: '7 дней',
    image: 'https://images.unsplash.com/photo-1605554704126-55d0dd54b8f2?w=800&q=80',
    rating: 4,
    popular: false
  },
  {
    id: 6,
    title: 'Удивительная Япония',
    location: 'Япония',
    price: '180 000',
    duration: '12 дней',
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80',
    rating: 5,
    popular: true
  }
];

const PopularTours = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Популярные направления</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Откройте для себя самые востребованные туры этого сезона
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {tour.popular && (
                  <Badge className="absolute top-4 left-4 bg-secondary">
                    <Icon name="Star" size={14} className="mr-1" />
                    Хит продаж
                  </Badge>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <Icon name="MapPin" size={16} />
                  <span>{tour.location}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {tour.title}
                </h3>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={16} />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(tour.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      {tour.price} ₽
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">/ чел.</span>
                  </div>
                  <Link to={`/tour/${tour.id}`}>
                    <Button>
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/tours">
            <Button size="lg" variant="outline">
              Смотреть все туры
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularTours;
