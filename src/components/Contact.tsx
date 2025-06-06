
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useQuoteRequests } from "@/hooks/useQuoteRequests";

export const Contact = () => {
  const { submitQuoteRequest, isSubmitting } = useQuoteRequests();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    project_type: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await submitQuoteRequest(formData);
    
    if (result.success) {
      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        project_type: "",
        message: "",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Parlons de votre projet ! Devis gratuit sous 24h
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Adresse</h4>
                    <p className="text-gray-600">Issy-les-Moulineaux<br />Hauts-de-Seine (92)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Téléphone</h4>
                    <p className="text-gray-600">01 XX XX XX XX</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">contact@atouts-services.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horaires</h4>
                    <p className="text-gray-600">
                      Lun - Ven: 8h00 - 18h00<br />
                      Sam: 9h00 - 17h00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-blue-600 text-white border-0">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Zone d'intervention</h4>
                <p className="text-blue-100">
                  Nous intervenons dans tout le département des Hauts-de-Seine et Paris : 
                  Issy-les-Moulineaux, Boulogne-Billancourt, Meudon, Sèvres, Vanves, 
                  Clamart et communes limitrophes.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Demande de devis</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                    <Input 
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      placeholder="Votre prénom" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                    <Input 
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      placeholder="Votre nom" 
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                  <Input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="01 XX XX XX XX" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type de projet</label>
                  <select 
                    name="project_type"
                    value={formData.project_type}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="peinture">Peinture</option>
                    <option value="renovation">Rénovation</option>
                    <option value="electricite">Électricité</option>
                    <option value="salles-de-bains">Salle de bain</option>
                    <option value="revetements-sol">Revêtement de sol</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Décrivez votre projet *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet en quelques mots..."
                    rows={4}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  * Champs obligatoires - Réponse sous 24h
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
