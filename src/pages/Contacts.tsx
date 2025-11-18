import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом - мы всегда рады помочь
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Телефон</h3>
                <p className="text-muted-foreground mb-2">+7 (999) 123-45-67</p>
                <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-muted-foreground mb-2">info@traveldream.ru</p>
                <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Офис</h3>
                <p className="text-muted-foreground mb-2">г. Москва, ул. Примерная, 1</p>
                <p className="text-sm text-muted-foreground">Пн-Пт: 10:00 - 19:00</p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Наши офисы</h2>
                <div className="space-y-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold mb-3">Москва (Главный офис)</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <Icon name="MapPin" size={20} className="mt-1 flex-shrink-0" />
                        <span>г. Москва, ул. Примерная, д. 1, офис 101</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Phone" size={20} />
                        <span>+7 (999) 123-45-67</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={20} />
                        <span>Пн-Пт: 10:00 - 19:00, Сб: 11:00 - 17:00</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-bold mb-3">Санкт-Петербург</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <Icon name="MapPin" size={20} className="mt-1 flex-shrink-0" />
                        <span>г. Санкт-Петербург, Невский пр., д. 100</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Phone" size={20} />
                        <span>+7 (999) 123-45-68</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={20} />
                        <span>Пн-Пт: 10:00 - 19:00, Сб: 11:00 - 16:00</span>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Мы в социальных сетях</h3>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                    >
                      <Icon name="Facebook" size={24} />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                    >
                      <Icon name="Instagram" size={24} />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                    >
                      <Icon name="Twitter" size={24} />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                    >
                      <Icon name="Youtube" size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-[600px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.6449067576437!2d37.61823331592698!3d55.75393998055595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sRed%20Square!5e0!3m2!1sen!2sru!4v1234567890123!5m2!1sen!2sru"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
