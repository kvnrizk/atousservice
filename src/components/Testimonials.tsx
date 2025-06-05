
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dubois",
    location: "Issy-les-Moulineaux",
    rating: 5,
    text: "Excellent travail pour la rénovation de notre salle de bain. L'équipe d'Atouts Services est très professionnelle et respecte les délais. Je recommande vivement !",
    project: "Rénovation salle de bain"
  },
  {
    name: "Pierre Martin",
    location: "Boulogne-Billancourt",
    rating: 5,
    text: "Peinture complète de notre appartement réalisée dans les règles de l'art. Travail soigné, prix correct et excellent conseil pour les couleurs.",
    project: "Peinture appartement"
  },
  {
    name: "Sophie Leroy",
    location: "Meudon",
    rating: 5,
    text: "Rénovation électrique conforme aux normes avec un excellent rapport qualité-prix. L'équipe est à l'écoute et très compétente.",
    project: "Rénovation électrique"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre plus belle récompense
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-blue-200" />
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm text-blue-600 font-medium mt-1">{testimonial.project}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
