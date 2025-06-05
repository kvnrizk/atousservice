
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft, Phone, Settings, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const flooringProjects = [
  {
    id: 1,
    title: "Parquet massif salon",
    description: "Pose de parquet chêne massif dans un salon moderne",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Carrelage cuisine",
    description: "Installation de carrelage grand format effet béton",
    image: "https://images.unsplash.com/photo-1556909075-f3dc77560263?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Sol PVC chambre",
    description: "Pose de sol PVC imitation parquet dans une chambre",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&h=300&fit=crop"
  }
];

const features = [
  "Tous types de revêtements",
  "Préparation minutieuse du support",
  "Finitions parfaites",
  "Conseils personnalisés",
  "Garantie pose"
];

export const RevetementsSol = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Retour à l'accueil</span>
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              Devis gratuit
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Settings className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Revêtements de Sol</span> Professionnels
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Parquet, carrelage, PVC, moquette... Nous posons tous types de revêtements 
              avec un savoir-faire artisanal.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nos Services Revêtements</h2>
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
                {flooringProjects.map((project) => (
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
          <h2 className="text-3xl font-bold text-white mb-6">Changez de sol, changez d'ambiance</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour choisir le revêtement parfait
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
            <Phone className="h-5 w-5 mr-2" />
            Demander un devis
          </Button>
        </div>
      </section>
    </div>
  );
};
