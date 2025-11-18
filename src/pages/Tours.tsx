import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const allTours = [
  {
    id: 1,
    title: 'Райские Мальдивы',
    location: 'Мальдивы',
    price: 120000,
    duration: '7 дней',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    rating: 5,
    category: 'beach',
    popular: true
  },
  {
    id: 2,
    title: 'Европейская классика',
    location: 'Франция, Италия',
    price: 95000,
    duration: '10 дней',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    rating: 5,
    category: 'excursion',
    popular: true
  },
  {
    id: 3,
    title: 'Экзотический Таиланд',
    location: 'Таиланд',
    price: 65000,
    duration: '8 дней',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
    rating: 4,
    category: 'beach',
    popular: false
  },
  {
    id: 4,
    title: 'Горнолыжная Швейцария',
    location: 'Швейцария',
    price: 150000,
    duration: '5 дней',
    image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80',
    rating: 5,
    category: 'ski',
    popular: true
  },
  {
    id: 5,
    title: 'Солнечная Турция',
    location: 'Турция',
    price: 45000,
    duration: '7 дней',
    image: 'https://images.unsplash.com/photo-1605554704126-55d0dd54b8f2?w=800&q=80',
    rating: 4,
    category: 'beach',
    popular: false
  },
  {
    id: 6,
    title: 'Удивительная Япония',
    location: 'Япония',
    price: 180000,
    duration: '12 дней',
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80',
    rating: 5,
    category: 'excursion',
    popular: true
  },
  {
    id: 7,
    title: 'Сафари в Африке',
    location: 'Кения, Танзания',
    price: 200000,
    duration: '9 дней',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    rating: 5,
    category: 'adventure',
    popular: false
  },
  {
    id: 8,
    title: 'Карибский круиз',
    location: 'Карибы',
    price: 175000,
    duration: '14 дней',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    rating: 5,
    category: 'cruise',
    popular: true
  },
  {
    id: 9,
    title: 'Греческие острова',
    location: 'Греция',
    price: 80000,
    duration: '7 дней',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80',
    rating: 4,
    category: 'beach',
    popular: false
  }
];

const Tours = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  let filteredTours = allTours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tour.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === 'all' || tour.category === category;
    return matchesSearch && matchesCategory;
  });

  if (sortBy === 'price-asc') {
    filteredTours = [...filteredTours].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredTours = [...filteredTours].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'popular') {
    filteredTours = [...filteredTours].sort((a, b) => {
      if (a.popular && !b.popular) return -1;
      if (!a.popular && b.popular) return 1;
      return 0;
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Каталог туров</h1>
            <p className="text-lg text-center opacity-90 max-w-2xl mx-auto">
              Выберите идеальное направление из нашей коллекции путешествий
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <Input
                  placeholder="Поиск по названию или стране..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="beach">Пляжный отдых</SelectItem>
                  <SelectItem value="excursion">Экскурсионные</SelectItem>
                  <SelectItem value="ski">Горнолыжные</SelectItem>
                  <SelectItem value="adventure">Приключения</SelectItem>
                  <SelectItem value="cruise">Круизы</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Популярные</SelectItem>
                  <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (
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
                          {tour.price.toLocaleString('ru-RU')} ₽
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

            {filteredTours.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Туры не найдены</h3>
                <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tours;
