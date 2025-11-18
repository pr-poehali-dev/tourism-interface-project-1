import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      subContent: 'Звонки принимаются ежедневно'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@traveldream.ru',
      subContent: 'Ответим в течение часа'
    },
    {
      icon: 'MapPin',
      title: 'Адрес офиса',
      content: 'г. Москва, ул. Примерная, д. 123',
      subContent: 'м. Пушкинская, 5 минут пешком'
    },
    {
      icon: 'Clock',
      title: 'Время работы',
      content: 'Пн-Пт: 9:00 - 20:00',
      subContent: 'Сб-Вс: 10:00 - 18:00'
    }
  ];

  const socialLinks = [
    { icon: 'Phone', label: 'WhatsApp', link: '#', color: 'bg-green-500' },
    { icon: 'MessageCircle', label: 'Telegram', link: '#', color: 'bg-blue-500' },
    { icon: 'MessageSquare', label: 'Viber', link: '#', color: 'bg-purple-500' },
    { icon: 'Mail', label: 'Email', link: '#', color: 'bg-red-500' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Контакты
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Мы всегда на связи и готовы помочь вам
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={info.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                  <p className="text-foreground font-semibold mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subContent}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Напишите нам</h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+7 (999) 123-45-67"
                          required
                        />
                      </div>
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

                    <div>
                      <Label htmlFor="subject">Тема обращения *</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => setFormData({...formData, subject: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тему" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="booking">Бронирование тура</SelectItem>
                          <SelectItem value="info">Информация о турах</SelectItem>
                          <SelectItem value="support">Техподдержка</SelectItem>
                          <SelectItem value="cooperation">Сотрудничество</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Сообщение *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Опишите ваш вопрос..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full h-12 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Как нас найти</h2>
              <Card className="mb-6 overflow-hidden">
                <div className="relative h-[400px] bg-muted">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A64ac8d52e18f3d3b76aa9afb00fcee4f6c3b57a8f5e8d2f14b3e7c5c8c6f2a1d&amp;source=constructor"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    className="w-full h-full"
                  />
                </div>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Свяжитесь удобным способом</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className={`${social.color} text-white p-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
                      >
                        <Icon name={social.icon as any} size={24} />
                        <span className="font-semibold">{social.label}</span>
                      </a>
                    ))}
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Icon name="Info" size={24} className="text-primary mt-0.5" />
                      <div>
                        <p className="text-sm leading-relaxed">
                          <strong>Онлайн-консультация доступна 24/7</strong>
                          <br />
                          Наши менеджеры ответят на все ваши вопросы и помогут подобрать идеальный тур.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Почему стоит выбрать нас</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">14 лет опыта</h3>
                  <p className="text-muted-foreground">Работаем с 2010 года и знаем все о путешествиях</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">2500+ клиентов</h3>
                  <p className="text-muted-foreground">Довольных путешественников по всему миру</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="HeadphonesIcon" size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Поддержка 24/7</h3>
                  <p className="text-muted-foreground">Всегда на связи во время вашего путешествия</p>
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

export default Contacts;
