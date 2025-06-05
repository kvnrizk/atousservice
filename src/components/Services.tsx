
import { Card, CardContent } from "@/components/ui/card";
import { Paintbrush, Home, Zap, Bath, Settings } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Peinture",
    description: "Peinture intérieure et extérieure, ravalement de façade, enduits décoratifs",
    features: ["Peinture écologique", "Conseils couleurs", "Préparation des supports"]
  },
  {
    icon: Home,
    title: "Rénovation",
    description: "Rénovation complète d'appartements et maisons, aménagement intérieur",
    features: ["Rénovation clé en main", "Design d'intérieur", "Coordination des corps d'état"]
  },
  {
    icon: Zap,
    title: "Électricité",
    description: "Installation électrique, mise aux normes, domotique et éclairage",
    features: ["Mise aux normes NFC 15-100", "Domotique", "Éclairage LED"]
  },
  {
    icon: Bath,
    title: "Salles de bains",
    description: "Création et rénovation de salles de bains sur mesure, plomberie",
    features: ["Design personnalisé", "Plomberie complète", "Carrelage et faïence"]
  },
  {
    icon: Settings,
    title: "Revêtements de sol",
    description: "Pose de parquet, carrelage, PVC, moquette et sols techniques",
    features: ["Tous types de sols", "Préparation du support", "Finitions soignées"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une expertise complète pour tous vos projets de rénovation et d'aménagement
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-12 w-12" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
