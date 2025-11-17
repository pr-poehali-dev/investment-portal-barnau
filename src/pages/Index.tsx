import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Производственный комплекс "Сибирь"',
    category: 'Производство',
    area: '15 000 м²',
    investment: '500 млн ₽',
    status: 'Активный',
    image: 'https://cdn.poehali.dev/projects/3b218bd9-2e97-4ae3-972b-755462ca0160/files/94893ef8-394b-4918-be55-7a290b8ecf2d.jpg',
    description: 'Современный производственный комплекс с высокотехнологичным оборудованием',
    location: { lat: 53.3606, lng: 83.7636 }
  },
  {
    id: 2,
    title: 'Бизнес-центр "Алтай"',
    category: 'Недвижимость',
    area: '8 000 м²',
    investment: '350 млн ₽',
    status: 'В разработке',
    image: 'https://cdn.poehali.dev/projects/3b218bd9-2e97-4ae3-972b-755462ca0160/files/7bca1041-5ee4-4532-bd9c-64d2ce8767eb.jpg',
    description: 'Многофункциональный деловой центр класса А',
    location: { lat: 53.3486, lng: 83.7765 }
  },
  {
    id: 3,
    title: 'Технопарк "Инновации"',
    category: 'IT и технологии',
    area: '20 000 м²',
    investment: '750 млн ₽',
    status: 'Активный',
    image: 'https://cdn.poehali.dev/projects/3b218bd9-2e97-4ae3-972b-755462ca0160/files/215b5e8b-95b3-409c-8237-b28cd7b0e5e8.jpg',
    description: 'Инновационный технологический парк для IT-компаний',
    location: { lat: 53.3556, lng: 83.7456 }
  }
];

const stats = [
  { value: '120+', label: 'Активных проектов', icon: 'TrendingUp' },
  { value: '45 млрд ₽', label: 'Объём инвестиций', icon: 'DollarSign' },
  { value: '15 000+', label: 'Новых рабочих мест', icon: 'Users' },
  { value: '98%', label: 'Успешных проектов', icon: 'Award' }
];

const advantages = [
  {
    icon: 'FileText',
    title: 'Упрощение взаимодействия',
    description: 'Прямая связь между инвесторами и органами власти города'
  },
  {
    icon: 'MapPin',
    title: 'Инвестиционная карта',
    description: 'Интерактивная карта с площадками и земельными участками'
  },
  {
    icon: 'Briefcase',
    title: 'Готовые проекты',
    description: 'База инвестиционных проектов и предложений'
  },
  {
    icon: 'Handshake',
    title: 'Полное сопровождение',
    description: 'Поддержка на всех этапах реализации проекта'
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Building2" className="text-primary" size={28} />
            <span className="text-xl font-bold text-primary">ИнвестПортал Барнаул</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
            <a href="#map" className="hover:text-primary transition-colors">Карта</a>
            <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
            <Button size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/3b218bd9-2e97-4ae3-972b-755462ca0160/files/215b5e8b-95b3-409c-8237-b28cd7b0e5e8.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Инвестиционный портал города Барнаула
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Создаём условия для успешной реализации ваших бизнес-проектов
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform">
                <Icon name="FileSearch" size={20} className="mr-2" />
                Изучить проекты
              </Button>
              <Button size="lg" className="bg-accent hover:bg-accent/90 hover:scale-105 transition-transform">
                <Icon name="Map" size={20} className="mr-2" />
                Смотреть карту
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="scroll-animate opacity-0 hover:shadow-lg transition-all hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <Icon name={stat.icon as any} size={32} className="text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-animate opacity-0">
            <h2 className="text-4xl font-bold mb-4">Преимущества портала</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Всё необходимое для успешного запуска и развития вашего бизнеса в одном месте
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="scroll-animate opacity-0 hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={advantage.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-animate opacity-0">
            <h2 className="text-4xl font-bold mb-4">Инвестиционные проекты</h2>
            <p className="text-lg text-muted-foreground">
              Актуальные проекты для инвестирования в Барнауле
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full scroll-animate opacity-0">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all" onClick={() => setSelectedCategory('all')}>Все</TabsTrigger>
              <TabsTrigger value="Производство" onClick={() => setSelectedCategory('Производство')}>
                Производство
              </TabsTrigger>
              <TabsTrigger value="Недвижимость" onClick={() => setSelectedCategory('Недвижимость')}>
                Недвижимость
              </TabsTrigger>
              <TabsTrigger value="IT и технологии" onClick={() => setSelectedCategory('IT и технологии')}>
                IT
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="scroll-animate opacity-0 overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-white text-primary hover:bg-white">
                    {project.status}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{project.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Maximize2" size={16} className="text-muted-foreground" />
                      <span>Площадь: {project.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="DollarSign" size={16} className="text-muted-foreground" />
                      <span>Инвестиции: {project.investment}</span>
                    </div>
                  </div>
                  <Link to={`/project/${project.id}`} className="block">
                    <Button className="w-full group-hover:bg-accent transition-colors">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-animate opacity-0">
            <h2 className="text-4xl font-bold mb-4">Интерактивная карта площадок</h2>
            <p className="text-lg text-muted-foreground">
              Подберите оптимальную площадку для вашего проекта
            </p>
          </div>
          <Card className="scroll-animate opacity-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-[600px] bg-muted">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=83.763600%2C53.360600&z=12&l=map&pt=83.7636,53.3606,pm2rdm~83.7765,53.3486,pm2gnm~83.7456,53.3556,pm2blm"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  className="w-full h-full"
                />
                <div className="absolute top-4 left-4 right-4 md:right-auto md:w-80 bg-white rounded-lg shadow-lg p-4">
                  <h3 className="font-semibold mb-3">Фильтры площадок</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start hover:bg-primary hover:text-white transition-colors">
                      <Icon name="Factory" size={16} className="mr-2" />
                      Производственные
                    </Button>
                    <Button variant="outline" className="w-full justify-start hover:bg-primary hover:text-white transition-colors">
                      <Icon name="Building2" size={16} className="mr-2" />
                      Коммерческие
                    </Button>
                    <Button variant="outline" className="w-full justify-start hover:bg-primary hover:text-white transition-colors">
                      <Icon name="Warehouse" size={16} className="mr-2" />
                      Складские
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center scroll-animate opacity-0">
          <h2 className="text-4xl font-bold mb-6">Готовы начать свой проект?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Свяжитесь с нами, и мы поможем реализовать ваши бизнес-идеи в Барнауле
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform">
              <Icon name="Mail" size={20} className="mr-2" />
              Отправить заявку
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (3852) 123-456
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={24} />
                <span className="font-bold text-lg">ИнвестПортал</span>
              </div>
              <p className="text-sm text-gray-400">
                Официальный инвестиционный портал города Барнаула
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Проекты</a>
                <a href="#" className="block hover:text-white transition-colors">Карта площадок</a>
                <a href="#" className="block hover:text-white transition-colors">Аукционы</a>
                <a href="#" className="block hover:text-white transition-colors">Новости</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Для инвесторов</a>
                <a href="#" className="block hover:text-white transition-colors">О портале</a>
                <a href="#" className="block hover:text-white transition-colors">Контакты</a>
                <a href="#" className="block hover:text-white transition-colors">Документы</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>г. Барнаул, пр. Ленина, 18</p>
                <p>+7 (3852) 123-456</p>
                <p>invest@barnaul.org</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Инвестиционный портал города Барнаула. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;