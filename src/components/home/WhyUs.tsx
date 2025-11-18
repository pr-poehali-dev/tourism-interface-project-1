import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Shield',
    title: 'Надежность',
    description: 'Работаем с проверенными партнерами и гарантируем безопасность ваших путешествий'
  },
  {
    icon: 'Wallet',
    title: 'Лучшие цены',
    description: 'Прямые договоры с отелями позволяют предлагать самые выгодные предложения'
  },
  {
    icon: 'Headphones',
    title: 'Поддержка 24/7',
    description: 'Наши менеджеры всегда на связи и готовы помочь в любое время суток'
  },
  {
    icon: 'Globe',
    title: 'Широкий выбор',
    description: 'Более 100 стран и 5000+ проверенных туров на любой вкус и бюджет'
  },
  {
    icon: 'Award',
    title: 'Экспертность',
    description: '15 лет на рынке туризма. Знаем все нюансы и создаем идеальные маршруты'
  },
  {
    icon: 'Heart',
    title: 'Индивидуальный подход',
    description: 'Подберем тур специально для вас с учетом всех пожеланий и предпочтений'
  }
];

const WhyUs = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мы создаем незабываемые путешествия уже более 15 лет
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={feature.icon as any} className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
