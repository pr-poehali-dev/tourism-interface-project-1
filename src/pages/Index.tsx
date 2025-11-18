import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import PopularTours from '@/components/home/PopularTours';
import WhyUs from '@/components/home/WhyUs';
import ContactForm from '@/components/ContactForm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const faqItems = [
    {
      question: 'Как забронировать тур?',
      answer: 'Выберите понравившийся тур, нажмите кнопку "Забронировать" и заполните форму. Наш менеджер свяжется с вами в течение 15 минут для подтверждения.'
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем оплату банковскими картами, банковским переводом, наличными в офисе. Возможна рассрочка на 6-12 месяцев.'
    },
    {
      question: 'Можно ли отменить бронирование?',
      answer: 'Да, вы можете отменить бронирование. Условия возврата зависят от тарифа и срока до начала тура. Подробности уточняйте у менеджера.'
    },
    {
      question: 'Входит ли страховка в стоимость?',
      answer: 'Базовая медицинская страховка включена во все туры. Также доступно расширенное страхование от несчастных случаев.'
    },
    {
      question: 'Как получить визу?',
      answer: 'Мы помогаем с оформлением виз для всех направлений. Наши специалисты подготовят все документы и запишут на собеседование.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PopularTours />
        <WhyUs />

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Часто задаваемые вопросы
                </h2>
                <p className="text-xl text-muted-foreground">
                  Ответы на популярные вопросы о бронировании туров
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-2">
                    <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;