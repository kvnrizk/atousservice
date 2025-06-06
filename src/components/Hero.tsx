
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Votre Expert en
            <span className="text-blue-600 block">Rénovation</span>
            à Issy-les-Moulineaux
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Depuis plus de 10 ans, Atouts Services transforme vos espaces avec expertise et savoir-faire. 
            Peinture, électricité, salles de bains et plus encore.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" onClick={scrollToContact}>
              <Phone className="h-5 w-5 mr-2" />
              Devis gratuit
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3" onClick={scrollToServices}>
              Voir nos réalisations
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="font-medium">+10 ans d'expérience</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="font-medium">Devis gratuit sous 24h</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="font-medium">Garantie décennale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
