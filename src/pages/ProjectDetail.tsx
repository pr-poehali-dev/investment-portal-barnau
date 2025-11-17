import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Производственный комплекс "Сибирь"',
    category: 'Производство',
    area: '15 000 м²',
    investment: '500 млн ₽',
    status: 'Активный',
    images: [
      'https://cdn.poehali.dev/projects/3b218bd9-2e97-4ae3-972b-755462ca0160/files/94893ef8-394b-4918-be55-7a290b8ecf2d.jpg',
      'https://cdn.poehali.dev/projects/3b218bd9-2e97-4ae3-972b-755462ca0160/files/215b5e8b-95b3-409c-8237-b28cd7b0e5e8.jpg',
      'https://cdn.poehali.dev/projects/3b218bd9-2e97-4ae3-972b-755462ca0160/files/7bca1041-5ee4-4532-bd9c-64d2ce8767eb.jpg'
    ],
    description: 'Современный производственный комплекс с высокотехнологичным оборудованием',
    fullDescription: 'Производственный комплекс "Сибирь" представляет собой современное предприятие, оснащенное высокотехнологичным оборудованием последнего поколения. Комплекс включает производственные цеха, складские помещения, административный корпус и всю необходимую инфраструктуру.',
    location: { lat: 53.3606, lng: 83.7636, address: 'г. Барнаул, Индустриальный район, ул. Производственная, 15' },
    infrastructure: [
      'Электроснабжение 1000 кВт',
      'Газоснабжение',
      'Водоснабжение и канализация',
      'Охрана и видеонаблюдение',
      'Парковка на 100 мест',
      'Складские помещения'
    ],
    documents: [
      'Техническое задание',
      'Бизнес-план',
      'Разрешительная документация'
    ]
  },
  {
    id: 2,
    title: 'Бизнес-центр "Алтай"',
    category: 'Недвижимость',
    area: '8 000 м²',
    investment: '350 млн ₽',
    status: 'В разработке',
    images: [
      'https://cdn.poehali.dev/projects/3b218bd9-2e97-4ae3-972b-755462ca0160/files/7bca1041-5ee4-4532-bd9c-64d2ce8767eb.jpg',
      'https://cdn.poehali.dev/projects/3b218bd9-2e97-4ae3-972b-755462ca0160/files/215b5e8b-95b3-409c-8237-b28cd7b0e5e8.jpg',
      'https://cdn.poehali.dev/projects/3b218bd9-2e97-4ae3-972b-755462ca0160/files/94893ef8-394b-4918-be55-7a290b8ecf2d.jpg'
    ],
    description: 'Многофункциональный деловой центр класса А',
    fullDescription: 'Бизнес-центр "Алтай" - это многофункциональный комплекс класса А, расположенный в деловом центре города. Здание оснащено современными системами климат-контроля, безопасности и энергосбережения.',
    location: { lat: 53.3486, lng: 83.7765, address: 'г. Барнаул, Центральный район, пр. Ленина, 18' },
    infrastructure: [
      'Офисные помещения от 50 м²',
      'Конференц-залы',
      'Подземный паркинг',
      'Ресторан и кафе',
      'Фитнес-центр',
      'Круглосуточная охрана'
    ],
    documents: [
      'Проектная документация',
      'Инвестиционный меморандум',
      'План застройки'
    ]
  },
  {
    id: 3,
    title: 'Технопарк "Инновации"',
    category: 'IT и технологии',
    area: '20 000 м²',
    investment: '750 млн ₽',
    status: 'Активный',
    images: [
      'https://cdn.poehali.dev/projects/3b218bd9-2e97-4ae3-972b-755462ca0160/files/215b5e8b-95b3-409c-8237-b28cd7b0e5e8.jpg',
      'https://cdn.poehali.dev/projects/3b218bd9-2e97-4ae3-972b-755462ca0160/files/94893ef8-394b-4918-be55-7a290b8ecf2d.jpg',
      'https://cdn.poehali.dev/projects/3b218bd9-2e97-4ae3-972b-755462ca0160/files/7bca1041-5ee4-4532-bd9c-64d2ce8767eb.jpg'
    ],
    description: 'Инновационный технологический парк для IT-компаний',
    fullDescription: 'Технопарк "Инновации" создан для развития высокотехнологичных компаний и стартапов. Комплекс предоставляет современную инфраструктуру, коворкинги, лаборатории и площадки для разработки инновационных решений.',
    location: { lat: 53.3556, lng: 83.7456, address: 'г. Барнаул, Октябрьский район, ул. Технопарковая, 1' },
    infrastructure: [
      'Высокоскоростной интернет',
      'Коворкинг-зоны',
      'IT-лаборатории',
      'Конференц-залы',
      'Зоны отдыха',
      'Столовая и кафе'
    ],
    documents: [
      'Концепция технопарка',
      'Правила резидентства',
      'Программа господдержки'
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const project = projectsData.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Проект не найден</h1>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/')} className="gap-2">
            <Icon name="ArrowLeft" size={20} />
            Назад
          </Button>
          <div className="flex items-center gap-2">
            <Icon name="Building2" className="text-primary" size={28} />
            <span className="text-xl font-bold text-primary">ИнвестПортал Барнаул</span>
          </div>
          <div className="w-24" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline">{project.category}</Badge>
            <Badge className="bg-primary">{project.status}</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-[500px] bg-muted">
                  <img
                    src={project.images[selectedImage]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 p-4">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-24 rounded-lg overflow-hidden transition-all ${
                        selectedImage === index 
                          ? 'ring-2 ring-primary scale-105' 
                          : 'hover:scale-105'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Описание проекта</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                <h3 className="text-xl font-semibold mb-3">Инфраструктура</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {project.infrastructure.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Местоположение</h2>
                <div className="mb-4">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Icon name="MapPin" size={20} className="mt-1 flex-shrink-0" />
                    <span>{project.location.address}</span>
                  </div>
                </div>
                <div className="h-[300px] bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src={`https://yandex.ru/map-widget/v1/?ll=${project.location.lng}%2C${project.location.lat}&z=15&l=map&pt=${project.location.lng},${project.location.lat},pm2rdm`}
                    width="100%"
                    height="300"
                    frameBorder="0"
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Ключевые показатели</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-muted-foreground">Площадь</span>
                    <span className="font-semibold">{project.area}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-muted-foreground">Инвестиции</span>
                    <span className="font-semibold text-primary">{project.investment}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-muted-foreground">Статус</span>
                    <Badge>{project.status}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Категория</span>
                    <span className="font-semibold">{project.category}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Документы</h3>
                <div className="space-y-2">
                  {project.documents.map((doc, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start hover:bg-primary hover:text-white transition-colors"
                    >
                      <Icon name="FileText" size={18} className="mr-2" />
                      {doc}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Заинтересованы?</h3>
                <p className="mb-4 text-white/90 text-sm">
                  Свяжитесь с нами для получения подробной информации о проекте
                </p>
                <div className="space-y-2">
                  <Button variant="secondary" className="w-full">
                    <Icon name="Mail" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-primary">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
