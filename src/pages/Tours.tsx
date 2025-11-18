import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Tours = () => {
  const [priceRange, setPriceRange] = useState([0, 300000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');

  const tours = [
    {
      id: 1,
      title: 'Тропический рай на Мальдивах',
      location: 'Мальдивы',
      price: 150000,
      duration: '7 ночей',
      rating: 4.9,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop',
      category: 'beach',
      description: 'Роскошный отдых на белоснежных пляжах с кристально чистой водой'
    },
    {
      id: 2,
      title: 'Приключения в Альпах',
      location: 'Швейцария',
      price: 95000,
      duration: '5 ночей',
      rating: 4.8,
      reviews: 94,
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&auto=format&fit=crop',
      category: 'mountains',
      description: 'Активный отдых в горах, лыжные трассы и живописные виды'
    },
    {
      id: 3,
      title: 'Романтика Парижа',
      location: 'Франция',
      price: 75000,
      duration: '4 ночи',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&auto=format&fit=crop',
      category: 'excursion',
      description: 'Незабываемые экскурсии по столице моды и любви'
    },
    {
      id: 4,
      title: 'Экзотика Таиланда',
      location: 'Таиланд',
      price: 65000,
      duration: '10 ночей',
      rating: 4.9,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop',
      category: 'exotic',
      description: 'Пляжный отдых, экзотическая кухня и древние храмы'
    },
    {
      id: 5,
      title: 'Сафари в Танзании',
      location: 'Танзания',
      price: 185000,
      duration: '8 ночей',
      rating: 4.9,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop',
      category: 'exotic',
      description: 'Незабываемое сафари в национальных парках Африки'
    },
    {
      id: 6,
      title: 'Древности Египта',
      location: 'Египет',
      price: 55000,
      duration: '7 ночей',
      rating: 4.6,
      reviews: 245,
      image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&auto=format&fit=crop',
      category: 'beach',
      description: 'Пляжный отдых на Красном море и экскурсии к пирамидам'
    },
    {
      id: 7,
      title: 'Фьорды Норвегии',
      location: 'Норвегия',
      price: 120000,
      duration: '6 ночей',
      rating: 4.8,
      reviews: 112,
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&auto=format&fit=crop',
      category: 'mountains',
      description: 'Круиз по живописным фьордам и северное сияние'
    },
    {
      id: 8,
      title: 'Культура Японии',
      location: 'Япония',
      price: 165000,
      duration: '9 ночей',
      rating: 4.9,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&auto=format&fit=crop',
      category: 'excursion',
      description: 'Погружение в традиции и современность Страны восходящего солнца'
    }
  ];

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'beach', label: 'Пляжный отдых' },
    { value: 'mountains', label: 'Горы' },
    { value: 'excursion', label: 'Экскурсионный' },
    { value: 'exotic', label: 'Экзотика' }
  ];

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tour.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;
    const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Каталог туров
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Найдите идеальное путешествие из {tours.length} направлений
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="Filter" size={24} />
                    Фильтры
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-semibold mb-3 block">Поиск</label>
                      <div className="relative">
                        <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          type="text"
                          placeholder="Название или страна..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-3 block">Категория</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map(cat => (
                            <SelectItem key={cat.value} value={cat.value}>
                              {cat.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-3 block">
                        Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
                      </label>
                      <Slider
                        min={0}
                        max={300000}
                        step={10000}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mb-2"
                      />
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                        setPriceRange([0, 300000]);
                      }}
                    >
                      <Icon name="RotateCcw" size={18} className="mr-2" />
                      Сбросить фильтры
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>

            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  Найдено туров: {filteredTours.length}
                </h2>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="price-asc">Сначала дешевые</SelectItem>
                    <SelectItem value="price-desc">Сначала дорогие</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTours.map((tour) => (
                  <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                    <div className="relative overflow-hidden h-56">
                      <img 
                        src={tour.image} 
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                        <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{tour.rating}</span>
                        <span className="text-sm text-muted-foreground">({tour.reviews})</span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Icon name="MapPin" size={16} />
                        <span className="text-sm">{tour.location}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">{tour.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{tour.description}</p>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Icon name="Calendar" size={16} />
                        <span className="text-sm">{tour.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-muted-foreground">от</div>
                          <div className="text-xl font-bold text-primary">{tour.price.toLocaleString()} ₽</div>
                        </div>
                        <Button asChild size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                          <Link to={`/tour/${tour.id}`}>
                            Подробнее
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredTours.length === 0 && (
                <div className="text-center py-16">
                  <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Туры не найдены</h3>
                  <p className="text-muted-foreground mb-6">
                    Попробуйте изменить параметры поиска
                  </p>
                  <Button onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setPriceRange([0, 300000]);
                  }}>
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;
