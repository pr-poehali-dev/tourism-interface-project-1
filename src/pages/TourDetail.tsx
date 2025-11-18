import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const TourDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const tour = {
    id: 1,
    title: 'Тропический рай на Мальдивах',
    location: 'Мальдивы',
    price: 150000,
    duration: '7 ночей / 8 дней',
    rating: 4.9,
    reviews: 128,
    images: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop'
    ],
    description: 'Погрузитесь в райское блаженство на Мальдивах! Кристально чистые воды Индийского океана, белоснежные пляжи и роскошные водные виллы ждут вас. Это идеальное место для романтического отдыха или медового месяца.',
    includes: [
      'Перелет Москва - Мале - Москва',
      'Трансфер на скоростном катере',
      'Проживание в водной вилле 7 ночей',
      'Питание: все включено',
      'Медицинская страховка',
      'Услуги русскоговорящего гида'
    ],
    notIncludes: [
      'Экскурсии (оплачиваются отдельно)',
      'Дополнительное питание и напитки',
      'Личные расходы'
    ],
    program: [
      {
        day: 1,
        title: 'Прибытие на Мальдивы',
        description: 'Встреча в аэропорту, трансфер на остров, размещение в отеле, welcome-ужин'
      },
      {
        day: 2,
        title: 'Пляжный отдых',
        description: 'Свободный день для отдыха на пляже, плавание, снорклинг'
      },
      {
        day: 3,
        title: 'Дайвинг и водные развлечения',
        description: 'Погружение с аквалангом, катание на водных лыжах, каякинг'
      },
      {
        day: 4,
        title: 'Экскурсия на необитаемый остров',
        description: 'Морская прогулка, пикник на пляже, сноркелинг в коралловых рифах'
      },
      {
        day: 5,
        title: 'SPA и релакс',
        description: 'День отдыха, SPA-процедуры, массаж, йога на пляже'
      },
      {
        day: 6,
        title: 'Рыбалка и романтический ужин',
        description: 'Традиционная мальдивская рыбалка, романтический ужин на закате'
      },
      {
        day: 7,
        title: 'Свободный день',
        description: 'Отдых на пляже, фотосессия, шоппинг в местных лавках'
      },
      {
        day: 8,
        title: 'Отъезд',
        description: 'Трансфер в аэропорт, вылет домой'
      }
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <Link to="/tours" className="hover:text-primary">Туры</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-foreground">{tour.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="relative overflow-hidden rounded-xl h-[500px] mb-4">
                  <img 
                    src={tour.images[selectedImage]} 
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {tour.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative overflow-hidden rounded-lg h-24 ${
                        selectedImage === index ? 'ring-4 ring-primary' : ''
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Фото ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span className="text-lg">{tour.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={20} className="text-primary" />
                  <span className="text-lg">{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full">
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{tour.rating}</span>
                  <span className="text-muted-foreground">({tour.reviews} отзывов)</span>
                </div>
              </div>

              <Tabs defaultValue="description" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Описание</TabsTrigger>
                  <TabsTrigger value="program">Программа</TabsTrigger>
                  <TabsTrigger value="includes">Что включено</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg leading-relaxed mb-6">{tour.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                          <Icon name="Plane" size={24} className="text-primary mt-1" />
                          <div>
                            <h4 className="font-semibold mb-1">Перелет</h4>
                            <p className="text-sm text-muted-foreground">Прямой рейс из Москвы, длительность 9 часов</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                          <Icon name="Hotel" size={24} className="text-primary mt-1" />
                          <div>
                            <h4 className="font-semibold mb-1">Отель 5★</h4>
                            <p className="text-sm text-muted-foreground">Роскошная водная вилла с видом на океан</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                          <Icon name="UtensilsCrossed" size={24} className="text-primary mt-1" />
                          <div>
                            <h4 className="font-semibold mb-1">Питание</h4>
                            <p className="text-sm text-muted-foreground">Все включено: завтраки, обеды, ужины</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                          <Icon name="Shield" size={24} className="text-primary mt-1" />
                          <div>
                            <h4 className="font-semibold mb-1">Страховка</h4>
                            <p className="text-sm text-muted-foreground">Полная медицинская страховка включена</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="program" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {tour.program.map((item) => (
                          <div key={item.day} className="flex gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {item.day}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                              <p className="text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="includes" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-2 border-green-200 bg-green-50/50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <Icon name="CheckCircle" className="text-green-600" size={24} />
                          Включено в стоимость
                        </h3>
                        <ul className="space-y-3">
                          {tour.includes.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Icon name="Check" className="text-green-600 mt-0.5" size={20} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-orange-200 bg-orange-50/50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <Icon name="XCircle" className="text-orange-600" size={24} />
                          Не включено
                        </h3>
                        <ul className="space-y-3">
                          {tour.notIncludes.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Icon name="X" className="text-orange-600 mt-0.5" size={20} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="text-center mb-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Цена от</div>
                    <div className="text-4xl font-bold text-primary mb-1">
                      {tour.price.toLocaleString()} ₽
                    </div>
                    <div className="text-sm text-muted-foreground">за человека</div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Иван Иванов"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="example@mail.ru"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Комментарий</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Ваши пожелания..."
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full h-12 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Забронировать тур
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Clock" size={18} className="text-primary" />
                      <span>Ответим в течение 15 минут</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Shield" size={18} className="text-primary" />
                      <span>Гарантия лучшей цены</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="CreditCard" size={18} className="text-primary" />
                      <span>Рассрочка без переплат</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourDetail;
