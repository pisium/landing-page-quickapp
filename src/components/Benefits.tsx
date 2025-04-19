
import React from 'react';
import { 
  Smartphone, 
  Calendar, 
  Star, 
  CreditCard, 
  Image, 
  BellRing 
} from 'lucide-react';

const Benefits = () => {
  const benefitsList = [
    {
      icon: <Smartphone className="h-10 w-10 text-primary-green" />,
      title: "Perfil digital profissional",
      description: "Sua presença online com toda a identidade do seu negócio"
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary-green" />,
      title: "Agendamentos online automatizados",
      description: "Elimine conflitos de horário e organize sua agenda"
    },
    {
      icon: <Star className="h-10 w-10 text-primary-green" />,
      title: "Destaque na vitrine premium",
      description: "Aumente sua visibilidade e atraia novos clientes"
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary-green" />,
      title: "Integração com pagamentos",
      description: "Em breve: receba pagamentos diretamente pelo aplicativo"
    },
    {
      icon: <Image className="h-10 w-10 text-primary-green" />,
      title: "Portfólio com fotos e depoimentos",
      description: "Mostre seu trabalho e o feedback dos seus clientes"
    },
    {
      icon: <BellRing className="h-10 w-10 text-primary-green" />,
      title: "Lembretes automáticos para clientes",
      description: "Reduza faltas com notificações de agendamento"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O app que valoriza seu talento e simplifica sua rotina.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
