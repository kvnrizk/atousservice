
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft, Phone, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

const electricityProjects = [
  {
    id: 1,
    title: "Mise aux normes électriques",
    description: "Rénovation complète du tableau électrique",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Installation domotique",
    description: "Système d'éclairage intelligent connecté",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Éclairage LED moderne",
    description: "Installation d'éclairage LED économique",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
  }
];

const features = [
  "Mise aux normes NFC 15-100",
  "Installation domotique",
  "Éclairage LED économique",
  "Diagnostic électrique gratuit",
  "Intervention rapide 24h/24"
];

export const Electricite = () => {
  const handleQuoteClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Services d'<span className="text-blue-600">Électricité</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Installation, rénovation et dépannage électrique par des professionnels certifiés. 
              Sécurité et conformité garanties.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nos Services Électricité</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nos Réalisations</h2>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {electricityProjects.map((project) => (
                  <CarouselItem key={project.id}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-96 object-cover rounded-t-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-200">{project.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Besoin d'un électricien ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour tous vos travaux électriques
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3" onClick={handleQuoteClick}>
            <Phone className="h-5 w-5 mr-2" />
            Demander un devis
          </Button>
        </div>
      </section>
    </div>
  );
};
