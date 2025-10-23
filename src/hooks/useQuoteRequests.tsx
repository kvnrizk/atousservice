
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface QuoteRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  project_type?: string;
  message: string;
}

export const useQuoteRequests = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitQuoteRequest = async (data: QuoteRequest) => {
    setIsSubmitting(true);

    try {
      // TODO: Implement form submission to your backend
      // For now, just logging the data
      console.log('Quote request data:', data);

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });

      return { success: true };
    } catch (error) {
      console.error('Error submitting quote request:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitQuoteRequest,
    isSubmitting,
  };
};
