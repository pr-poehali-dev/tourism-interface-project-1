import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tour: '',
    rating: 5,
    comment: ''
  });

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna',
      tour: 'Мальдивы - Тропический рай',
      rating: 5,
      date: '15 октября 2024',
      comment: 'Невероятное путешествие! Все было организовано на высшем уровне. Отель превзошел все ожидания, персонал очень внимательный. Спасибо команде TravelDream за незабываемый отдых!',
      images: [
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&auto=format&fit=crop'
      ]
    },
    {
      id: 2,
      name: 'Дмитрий Сергеев',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry',
      tour: 'Швейцария - Альпийские приключения',
      rating: 5,
      date: '8 октября 2024',
      comment: 'Горнолыжный отдых в Швейцарии стал лучшим в моей жизни! Трассы отличные, виды потрясающие. Организация тура на 5+. Обязательно вернемся еще!',
      images: []
    },
    {
      id: 3,
      name: 'Елена Иванова',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
      tour: 'Париж - Город любви',
      rating: 5,
      date: '3 октября 2024',
      comment: 'Романтическое путешествие в Париж превзошло все ожидания! Экскурсии были очень интересными, гид профессиональный. Спасибо за организацию!',
      images: [
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&auto=format&fit=crop'
      ]
    },
    {
      id: 4,
      name: 'Михаил Козлов',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mikhail',
      tour: 'Таиланд - Экзотическое приключение',
      rating: 4,
      date: '28 сентября 2024',
      comment: 'Отличный тур! Понравились экскурсии к храмам и пляжный отдых. Единственный минус - хотелось бы больше свободного времени. В остальном все супер!',
      images: []
    },
    {
      id: 5,
      name: 'Ольга Смирнова',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Olga',
      tour: 'Египет - Красное море',
      rating: 5,
      date: '20 сентября 2024',
      comment: 'Прекрасный семейный отдых! Детям очень понравилось, аквапарк отличный, море теплое. Отель соответствует описанию. Рекомендую!',
      images: [
        'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400&auto=format&fit=crop'
      ]
    },
    {
      id: 6,
      name: 'Александр Волков',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      tour: 'Япония - Культурное погружение',
      rating: 5,
      date: '15 сентября 2024',
      comment: 'Невероятная страна! Культура, традиции, кухня - все на высшем уровне. Организация тура безупречная, гид рассказывал очень интересно. Это было незабываемо!',
      images: []
    }
  ];

  const stats = [
    { value: '2500+', label: 'Довольных клиентов' },
    { value: '4.9', label: 'Средний рейтинг' },
    { value: '98%', label: 'Рекомендуют нас' },
    { value: '1200+', label: 'Отзывов' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Спасибо за ваш отзыв! Он появится после модерации.');
    setFormData({ name: '', email: '', tour: '', rating: 5, comment: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Отзывы клиентов
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Узнайте, что говорят о нас наши путешественники
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Все отзывы</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Оставить отзыв
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Оставьте ваш отзыв</DialogTitle>
                  <DialogDescription>
                    Поделитесь впечатлениями о вашем путешествии
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Иван Иванов"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="example@mail.ru"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="tour">Тур *</Label>
                    <Input
                      id="tour"
                      value={formData.tour}
                      onChange={(e) => setFormData({...formData, tour: e.target.value})}
                      placeholder="Название тура"
                      required
                    />
                  </div>

                  <div>
                    <Label>Оценка *</Label>
                    <div className="flex gap-2 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({...formData, rating: star})}
                          className="focus:outline-none"
                        >
                          <Icon
                            name="Star"
                            size={32}
                            className={`${
                              star <= formData.rating
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-300'
                            } transition-colors`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="comment">Ваш отзыв *</Label>
                    <Textarea
                      id="comment"
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      placeholder="Расскажите о вашем опыте..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Отправить отзыв
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-lg">{review.name}</h3>
                          <p className="text-sm text-muted-foreground">{review.tour}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-3">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Icon
                            key={index}
                            name="Star"
                            size={18}
                            className={`${
                              index < review.rating
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-foreground leading-relaxed mb-4">{review.comment}</p>
                      {review.images.length > 0 && (
                        <div className="flex gap-3">
                          {review.images.map((image, index) => (
                            <div key={index} className="relative overflow-hidden rounded-lg w-32 h-32">
                              <img 
                                src={image} 
                                alt={`Фото ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <Icon name="Heart" size={64} className="mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Станьте частью нашей истории
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Более 2500 путешественников уже доверили нам свой отдых. Присоединяйтесь!
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Icon name="Calendar" size={20} className="mr-2" />
            Выбрать тур
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
