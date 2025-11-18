import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const tourData: any = {
  '1': {
    id: 1,
    title: 'Райские Мальдивы',
    location: 'Мальдивы',
    price: 120000,
    duration: '7 дней / 6 ночей',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80',
      'https://images.unsplash.com/photo-1589197331516-5c4d7c9e5b0f?w=800&q=80'
    ],
    rating: 5,
    description: 'Погрузитесь в атмосферу райского отдыха на Мальдивах. Белоснежные пляжи, бирюзовая вода, роскошные бунгало над водой и незабываемый дайвинг среди коралловых рифов.',
    includes: [
      'Перелет Москва - Мале - Москва',
      'Трансфер на гидросамолете к острову',
      'Проживание в бунгало над водой',
      'Питание All Inclusive',
      'Медицинская страховка',
      'Услуги русскоговорящего гида'
    ],
    program: [
      { day: 1, title: 'Прибытие', description: 'Встреча в аэропорту, трансфер на гидросамолете, размещение в отеле, welcome dinner' },
      { day: 2, title: 'День на пляже', description: 'Свободный день для отдыха на пляже, снорклинг' },
      { day: 3, title: 'Морская экскурсия', description: 'Экскурсия на яхте, рыбалка, барбекю на необитаемом острове' },
      { day: 4, title: 'Дайвинг', description: 'Погружение с аквалангом, изучение коралловых рифов' },
      { day: 5, title: 'СПА и релакс', description: 'СПА-процедуры, йога на рассвете, романтический ужин' },
      { day: 6, title: 'Свободный день', description: 'Свободное время для отдыха и шопинга' },
      { day: 7, title: 'Вылет', description: 'Трансфер в аэропорт, вылет домой' }
    ]
  }
};

const TourDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const tour = tourData[id || '1'];

  if (!tour) {
    return <div>Тур не найден</div>;
  }

  const handleBooking = () => {
    toast({
      title: "Заявка на бронирование отправлена!",
      description: "Наш менеджер свяжется с вами в ближайшее время.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-[400px] md:h-[500px]">
          <img 
            src={tour.image} 
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Badge className="mb-4 bg-secondary">
                <Icon name="Star" size={14} className="mr-1" />
                Популярный тур
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{tour.title}</h1>
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={20} />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(tour.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="overview">Обзор</TabsTrigger>
                    <TabsTrigger value="program">Программа</TabsTrigger>
                    <TabsTrigger value="faq">FAQ</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-6 mt-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">О туре</h2>
                      <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Что входит в стоимость</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {tour.includes.map((item: string, index: number) => (
                          <div key={index} className="flex items-start gap-2">
                            <Icon name="Check" className="text-primary mt-1" size={20} />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Фотогалерея</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {tour.images.map((img: string, index: number) => (
                          <img 
                            key={index}
                            src={img}
                            alt={`${tour.title} ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                          />
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="program" className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">Программа тура</h2>
                    <div className="space-y-4">
                      {tour.program.map((day: any, index: number) => (
                        <Card key={index} className="p-6">
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="font-bold text-primary">{day.day}</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-lg mb-2">{day.title}</h3>
                              <p className="text-muted-foreground">{day.description}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="faq" className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">Часто задаваемые вопросы</h2>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Нужна ли виза для поездки на Мальдивы?</AccordionTrigger>
                        <AccordionContent>
                          Нет, гражданам РФ виза для въезда на Мальдивы не требуется. Штамп о въезде ставится бесплатно в аэропорту по прибытии.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Какая погода на Мальдивах?</AccordionTrigger>
                        <AccordionContent>
                          На Мальдивах тропический климат с температурой воздуха +28-32°C круглый год. Лучший период для посещения - с ноября по апрель (сухой сезон).
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Можно ли изменить даты тура?</AccordionTrigger>
                        <AccordionContent>
                          Да, изменение дат возможно при наличии свободных мест. Обратитесь к вашему менеджеру не позднее чем за 14 дней до вылета.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Какие документы нужны для поездки?</AccordionTrigger>
                        <AccordionContent>
                          Необходим загранпаспорт, действительный не менее 6 месяцев с момента возвращения, и обратный билет.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {tour.price.toLocaleString('ru-RU')} ₽
                    </div>
                    <p className="text-muted-foreground">за человека</p>
                  </div>

                  <Button className="w-full mb-4" size="lg" onClick={handleBooking}>
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Забронировать тур
                  </Button>

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="text-muted-foreground">{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="Users" size={20} className="text-primary" />
                      <span className="text-muted-foreground">Группа до 12 человек</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="Shield" size={20} className="text-primary" />
                      <span className="text-muted-foreground">Страховка включена</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="Headphones" size={20} className="text-primary" />
                      <span className="text-muted-foreground">Поддержка 24/7</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold mb-3">Остались вопросы?</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Phone" size={16} className="text-primary" />
                        <span>+7 (999) 123-45-67</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Mail" size={16} className="text-primary" />
                        <span>info@traveldream.ru</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TourDetail;
