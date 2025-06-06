
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
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
      const { error } = await supabase
        .from('quote_requests')
        .insert([data]);

      if (error) {
        throw error;
      }

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
