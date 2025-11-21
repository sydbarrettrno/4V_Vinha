import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <Button
      onClick={() => window.open("https://wa.me/5547999606002", "_blank")}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BA5A] p-0"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
