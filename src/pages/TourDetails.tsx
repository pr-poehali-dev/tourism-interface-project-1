import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TourDetails() {
  const { id } = useParams();

  const tour = {
    id: 1,
    title: 'Мальдивы - Райский отдых',
    location: 'Мальдивы',
    days: 7,
    nights: 6,
    price: 150000,
    oldPrice: 195000,
    images: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&h=800&fit=crop',
    ],
    rating: 4.9,
    reviews: 234,
    description:
      'Откройте для себя райский уголок на Мальдивах - место, где сбываются мечты о безупречном отдыхе. Насладитесь белоснежными пляжами, кристально чистой водой и роскошным сервисом премиум-класса.',
    includes: [
      'Авиаперелёт в обе стороны',
      'Трансфер аэропорт-отель-аэропорт',
      'Проживание в 5* отеле с питанием All Inclusive',
      'Медицинская страховка',
      'Экскурсия на соседние острова',
      'Сопровождение русскоговорящего гида',
    ],
    program: [
      { day: 1, title: 'Прилёт и заселение', description: 'Встреча в аэропорту, трансфер в отель, заселение и welcome-ужин' },
      { day: 2, title: 'Пляжный отдых', description: 'Свободный день для отдыха на пляже и знакомства с территорией отеля' },
      { day: 3, title: 'Экскурсия по островам', description: 'Увлекательная морская прогулка с посещением 3 островов' },
      { day: 4, title: 'Дайвинг', description: 'Погружение к коралловым рифам (для желающих за доп. плату)' },
      { day: 5, title: 'Спа и релакс', description: 'День отдыха, спа-процедуры, закат на яхте' },
      { day: 6, title: 'Свободный день', description: 'Отдых на пляже, водные развлечения, прощальный ужин' },
      { day: 7, title: 'Вылет домой', description: 'Выезд из отеля, трансфер в аэропорт' },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-6 group">
                <img
                  src={tour.images[0]}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-white px-4 py-2 text-base">
                  Скидка -23%
                </Badge>
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto">
                  {tour.images.slice(1).map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${tour.title} ${idx + 2}`}
                      className="h-20 w-28 rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <span className="text-lg text-muted-foreground">{tour.location}</span>
                  <div className="flex items-center gap-1 ml-auto">
                    <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    <span className="font-bold text-lg">{tour.rating}</span>
                    <span className="text-muted-foreground">({tour.reviews} отзывов)</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-6">{tour.title}</h1>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-lg">
                    <Icon name="Calendar" className="text-primary" size={20} />
                    <span className="font-medium">{tour.days} дней / {tour.nights} ночей</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-lg">
                    <Icon name="Users" className="text-primary" size={20} />
                    <span className="font-medium">Группа до 20 человек</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-lg">
                    <Icon name="Shield" className="text-primary" size={20} />
                    <span className="font-medium">Страховка включена</span>
                  </div>
                </div>

                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="w-full grid grid-cols-3 mb-6">
                    <TabsTrigger value="description">Описание</TabsTrigger>
                    <TabsTrigger value="program">Программа</TabsTrigger>
                    <TabsTrigger value="includes">Включено</TabsTrigger>
                  </TabsList>

                  <TabsContent value="description">
                    <p className="text-muted-foreground leading-relaxed text-lg">{tour.description}</p>
                  </TabsContent>

                  <TabsContent value="program">
                    <div className="space-y-4">
                      {tour.program.map((item) => (
                        <div key={item.day} className="flex gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                            {item.day}
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">{item.title}</h4>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="includes">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {tour.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={20} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-none shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-primary">
                        {tour.price.toLocaleString()} ₽
                      </span>
                      <span className="text-xl text-muted-foreground line-through">
                        {tour.oldPrice.toLocaleString()} ₽
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">за человека</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="date"
                      placeholder="Дата выезда"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <select className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Количество человек</option>
                      <option>1 человек</option>
                      <option>2 человека</option>
                      <option>3 человека</option>
                      <option>4+ человек</option>
                    </select>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 py-6 text-lg mb-3">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Забронировать
                  </Button>
                  
                  <Button variant="outline" className="w-full py-6 text-lg">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить
                  </Button>

                  <div className="mt-6 pt-6 border-t space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Shield" className="text-primary" size={18} />
                      <span className="text-muted-foreground">Безопасная оплата</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Percent" className="text-primary" size={18} />
                      <span className="text-muted-foreground">Возможна рассрочка</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" className="text-primary" size={18} />
                      <span className="text-muted-foreground">Ответ в течение часа</span>
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
}
