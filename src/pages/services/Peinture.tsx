
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft, Phone, Paintbrush, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

const paintingProjects = [
  {
    id: 1,
    title: "Rénovation salon moderne",
    description: "Peinture complète d'un salon avec couleurs tendance",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
    category: "Intérieur",
    duration: "3 jours"
  },
  {
    id: 2,
    title: "Chambre parentale",
    description: "Peinture décorative avec enduits texturés",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
    category: "Décoration",
    duration: "2 jours"
  },
  {
    id: 3,
    title: "Façade extérieure",
    description: "Ravalement de façade avec peinture anti-humidité",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&h=300&fit=crop",
    category: "Extérieur",
    duration: "5 jours"
  }
];

const features = [
  "Peinture écologique sans solvant",
  "Conseils personnalisés pour les couleurs",
  "Préparation minutieuse des supports",
  "Finitions soignées et durables",
  "Garantie 2 ans sur les travaux"
];

export const Peinture = () => {
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
              <Paintbrush className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Services de <span className="text-blue-600">Peinture</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transformez vos espaces avec nos services de peinture professionnels. 
              Intérieur, extérieur, décoratif - nous donnons vie à vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nos Prestations Peinture</h2>
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

      {/* Enhanced Projects Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Réalisations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos projets de peinture récents et laissez-vous inspirer
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {paintingProjects.map((project) => (
                  <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group cursor-pointer">
                      <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white transform hover:-translate-y-2">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            
                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {project.category}
                              </span>
                            </div>
                            
                            {/* Duration Badge */}
                            <div className="absolute top-4 right-4">
                              <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                                {project.duration}
                              </span>
                            </div>
                            
                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                                {project.title}
                              </h3>
                              <p className="text-gray-200 mb-4 opacity-90">
                                {project.description}
                              </p>
                              
                              {/* Rating Stars */}
                              <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="text-sm text-gray-300 ml-2">Excellent</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center mt-8 space-x-4">
                <CarouselPrevious className="relative translate-x-0 translate-y-0 h-12 w-12 bg-blue-600 hover:bg-blue-700 text-white border-0" />
                <CarouselNext className="relative translate-x-0 translate-y-0 h-12 w-12 bg-blue-600 hover:bg-blue-700 text-white border-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à transformer vos espaces ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
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
