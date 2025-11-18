import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export default function Index() {
  const popularTours = [
    {
      id: 1,
      title: 'Мальдивы - Райский отдых',
      location: 'Мальдивы',
      days: 7,
      price: '150 000',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop',
      rating: 4.9,
      reviews: 234,
    },
    {
      id: 2,
      title: 'Тур по Европе',
      location: 'Париж, Рим, Барселона',
      days: 10,
      price: '120 000',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
      rating: 4.8,
      reviews: 189,
    },
    {
      id: 3,
      title: 'Горы Швейцарии',
      location: 'Швейцария',
      days: 6,
      price: '95 000',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop',
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 4,
      title: 'Экзотический Бали',
      location: 'Индонезия',
      days: 12,
      price: '110 000',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
      rating: 4.7,
      reviews: 312,
    },
  ];

  const features = [
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Полное страхование и поддержка 24/7',
    },
    {
      icon: 'CreditCard',
      title: 'Выгодные цены',
      description: 'Лучшие предложения на рынке',
    },
    {
      icon: 'MapPin',
      title: '100+ направлений',
      description: 'Туры по всему миру',
    },
    {
      icon: 'ThumbsUp',
      title: 'Гарантия качества',
      description: '98% довольных клиентов',
    },
  ];

  const faqs = [
    {
      question: 'Как забронировать тур?',
      answer:
        'Выберите понравившийся тур, нажмите кнопку "Забронировать" и заполните форму. Наш менеджер свяжется с вами в течение часа для подтверждения деталей.',
    },
    {
      question: 'Какие документы нужны для путешествия?',
      answer:
        'Для большинства направлений потребуется загранпаспорт и виза (если требуется). Мы поможем вам с оформлением всех необходимых документов.',
    },
    {
      question: 'Можно ли отменить бронирование?',
      answer:
        'Да, вы можете отменить бронирование за 14 дней до вылета с полным возвратом средств. При более поздней отмене возвращается 50% стоимости.',
    },
    {
      question: 'Входит ли страховка в стоимость?',
      answer:
        'Да, базовая медицинская страховка включена во все наши туры. Дополнительно можно оформить расширенную страховку.',
    },
    {
      question: 'Есть ли скидки для групп?',
      answer:
        'Да, при бронировании для группы от 4 человек предоставляется скидка 10%, от 8 человек - 15%.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-secondary/90 hover:bg-secondary text-white text-sm px-4 py-2">
            ✨ Специальное предложение: скидка до 30%
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Путешествия вашей мечты
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Откройте для себя незабываемые места по всему миру с нашим агентством
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
              <Icon name="Search" size={20} className="mr-2" />
              Подобрать тур
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white hover:bg-white/20 text-white text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/70" />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные направления</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выбирайте из наших лучших предложений и отправляйтесь в незабываемое путешествие
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTours.map((tour) => (
              <Card key={tour.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-secondary text-white">🔥 Хит</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    <span className="font-semibold text-sm">{tour.rating}</span>
                    <span className="text-muted-foreground text-sm">({tour.reviews})</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 line-clamp-1">{tour.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Icon name="MapPin" size={16} />
                    <span className="line-clamp-1">{tour.location}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Icon name="Calendar" size={16} />
                      <span>{tour.days} дней</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">от</div>
                      <div className="text-xl font-bold text-primary">{tour.price} ₽</div>
                    </div>
                  </div>
                  <Link to={`/tour/${tour.id}`}>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Подробнее
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/tours">
              <Button size="lg" variant="outline">
                Смотреть все туры
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-slate-100">лет на рынке</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-slate-100">довольных клиентов</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">120+</div>
              <div className="text-slate-100">стран мира</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground text-lg">
              Ответы на самые популярные вопросы о наших турах
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-none shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Готовы к путешествию?</h2>
                  <p className="text-muted-foreground mb-6">
                    Свяжитесь с нами, и мы подберём идеальный тур специально для вас. Бесплатная консультация и помощь в выборе.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="CheckCircle2" className="text-primary" size={20} />
                      <span>Персональный подбор тура</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="CheckCircle2" className="text-primary" size={20} />
                      <span>Помощь с документами</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="CheckCircle2" className="text-primary" size={20} />
                      <span>Поддержка 24/7</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
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
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 py-6 text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Получить консультацию
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
