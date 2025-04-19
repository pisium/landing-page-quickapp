
import React from 'react';
import { 
  Calendar,
  Smartphone, 
  Users,
  Bell,
  CreditCard,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: <Calendar className="h-10 w-10 text-primary-green" />,
      title: "Agenda Online",
      description: "Agendamentos automatizados 24/7"
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary-green" />,
      title: "Perfil Profissional",
      description: "Sua presença digital personalizada"
    },
    {
      icon: <Users className="h-10 w-10 text-primary-green" />,
      title: "Gestão de Clientes",
      description: "Histórico e preferências dos clientes"
    },
    {
      icon: <Bell className="h-10 w-10 text-primary-green" />,
      title: "Notificações",
      description: "Lembretes automáticos para clientes"
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary-green" />,
      title: "Pagamentos",
      description: "Receba pagamentos online (em breve)"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary-green" />,
      title: "Analytics",
      description: "Insights do seu negócio"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ferramentas poderosas para impulsionar seu negócio
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 bg-primary-green/10 p-4 rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
