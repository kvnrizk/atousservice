
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
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-primary/10 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-40"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Votre Expert en
            <span className="text-primary block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Rénovation</span>
            à Issy-les-Moulineaux
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Depuis plus de 10 ans, Atouts Services transforme vos espaces avec expertise et savoir-faire. 
            Peinture, électricité, salles de bains et plus encore.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="gradient-primary hover:opacity-90 shadow-elegant text-white px-8 py-3 hover-scale" onClick={scrollToContact}>
              <Phone className="h-5 w-5 mr-2" />
              Devis gratuit
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 px-8 py-3 shadow-md hover-scale backdrop-blur-sm" onClick={scrollToServices}>
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
