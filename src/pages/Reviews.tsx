import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const reviews = [
  {
    id: 1,
    name: 'Анна Петрова',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5,
    tour: 'Райские Мальдивы',
    date: '15 января 2025',
    text: 'Невероятное путешествие! Организация на высшем уровне, отель просто сказка. Особенно понравился дайвинг и романтический ужин на закате. Спасибо команде TravelDream за незабываемый отпуск!'
  },
  {
    id: 2,
    name: 'Дмитрий Соколов',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    rating: 5,
    tour: 'Европейская классика',
    date: '10 января 2025',
    text: 'Отличный экскурсионный тур по Европе! Посетили Париж, Рим и Венецию. Гид очень увлекательно рассказывал историю каждого места. Отели удобно расположены, питание вкусное. Рекомендую!'
  },
  {
    id: 3,
    name: 'Елена Иванова',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 4,
    tour: 'Экзотический Таиланд',
    date: '5 января 2025',
    text: 'Прекрасный отдых в Таиланде! Понравились экскурсии по храмам и национальным паркам. Единственный минус - долгий перелет, но оно того стоило. Планируем вернуться!'
  },
  {
    id: 4,
    name: 'Михаил Козлов',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    tour: 'Горнолыжная Швейцария',
    date: '28 декабря 2024',
    text: 'Лучший горнолыжный отдых в моей жизни! Трассы отличные, снег идеальный, виды просто захватывающие. Инструктор помог освоить новые техники. Обязательно поеду еще!'
  },
  {
    id: 5,
    name: 'Ольга Смирнова',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    rating: 5,
    tour: 'Удивительная Япония',
    date: '20 декабря 2024',
    text: 'Япония превзошла все ожидания! Это было невероятное погружение в культуру. Посетили Токио, Киото, Осаку. Особенно впечатлили традиционные храмы и японская кухня. Спасибо за организацию!'
  },
  {
    id: 6,
    name: 'Сергей Волков',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
    rating: 4,
    tour: 'Солнечная Турция',
    date: '15 декабря 2024',
    text: 'Отличный пляжный отдых! All inclusive на высоте, аквапарк для детей супер. Море теплое, пляж чистый. Единственное - много людей в сезон, но это не критично.'
  },
  {
    id: 7,
    name: 'Мария Новикова',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
    rating: 5,
    tour: 'Карибский круиз',
    date: '10 декабря 2024',
    text: 'Круиз был волшебным! Посетили 6 островов, каждый по-своему уникален. На лайнере все продумано до мелочей, развлечения на любой вкус. Это было приключение всей жизни!'
  },
  {
    id: 8,
    name: 'Алексей Борисов',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    rating: 5,
    tour: 'Греческие острова',
    date: '5 декабря 2024',
    text: 'Греция - это любовь! Санторини с его белыми домиками просто сказка. Еда божественная, люди приветливые. Каждый день купались в море и наслаждались закатами. Мечтаю вернуться!'
  }
];

const Reviews = () => {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Отзывы наших клиентов</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Мы ценим каждого путешественника и стремимся делать ваш отдых незабываемым
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        size={20} 
                        className={i < Math.round(averageRating) ? "fill-secondary text-secondary" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">Средняя оценка</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">{reviews.length}</div>
                  <p className="text-muted-foreground">Отзывов</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <p className="text-muted-foreground">Рекомендуют нас</p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <Badge variant="outline" className="font-normal">
                      <Icon name="MapPin" size={12} className="mr-1" />
                      {review.tour}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
