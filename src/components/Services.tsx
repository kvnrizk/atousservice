
import { Card, CardContent } from "@/components/ui/card";
import { Paintbrush, Home, Zap, Bath, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Paintbrush,
    title: "Peinture",
    description: "Peinture intérieure et extérieure, ravalement de façade, enduits décoratifs",
    features: ["Peinture écologique", "Conseils couleurs", "Préparation des supports"],
    link: "/services/peinture"
  },
  {
    icon: Home,
    title: "Rénovation",
    description: "Rénovation complète d'appartements et maisons, aménagement intérieur",
    features: ["Rénovation clé en main", "Design d'intérieur", "Coordination des corps d'état"],
    link: "/services/renovation"
  },
  {
    icon: Zap,
    title: "Électricité",
    description: "Installation électrique, mise aux normes, domotique et éclairage",
    features: ["Mise aux normes NFC 15-100", "Domotique", "Éclairage LED"],
    link: "/services/electricite"
  },
  {
    icon: Bath,
    title: "Salles de bains",
    description: "Création et rénovation de salles de bains sur mesure, plomberie",
    features: ["Design personnalisé", "Plomberie complète", "Carrelage et faïence"],
    link: "/services/salles-de-bains"
  },
  {
    icon: Settings,
    title: "Revêtements de sol",
    description: "Pose de parquet, carrelage, PVC, moquette et sols techniques",
    features: ["Tous types de sols", "Préparation du support", "Finitions soignées"],
    link: "/services/revetements-sol"
  }
];

export const Services = () => {
  const scrollToTestimonials = () => {
    const element = document.getElementById('testimonials');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <Link key={index} to={service.link} className="block">
              <Card className="group hover-lift transition-all duration-300 border-0 shadow-elegant cursor-pointer h-full bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-glow">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 text-primary font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                    Voir nos réalisations →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={scrollToTestimonials}
            className="text-blue-600 hover:text-blue-700 font-medium underline"
          >
            Découvrez les avis de nos clients →
          </button>
        </div>
      </div>
    </section>
  );
};
