import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, LucideIcon } from "lucide-react";
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  summary: string;
  details: string[];
}
const ServiceCard = ({
  icon: Icon,
  title,
  summary,
  details
}: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return <Card className="hover:shadow-lg transition-shadow bg-blue-200">
      <CardContent className="p-6">
        <div className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
              <p className="text-muted-foreground">{summary}</p>
            </div>
            <button className="text-primary">
              {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
          </div>
        </div>
        {isExpanded && <div className="mt-4 pt-4 border-t border-border space-y-3 animate-accordion-down">
            {details.map((detail, index) => <p key={index} className="text-muted-foreground leading-relaxed">
                {detail}
              </p>)}
          </div>}
      </CardContent>
    </Card>;
};
export default ServiceCard;