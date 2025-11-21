import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Entre em Contato
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Estamos prontos para ajudar você a regularizar seu imóvel
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="service">Serviço de Interesse</Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="desmembramento">Desmembramento de Lote</SelectItem>
                      <SelectItem value="unificacao">Unificação de Lotes</SelectItem>
                      <SelectItem value="retificacao">Retificação de Área</SelectItem>
                      <SelectItem value="usucapiao">Usucapião</SelectItem>
                      <SelectItem value="levantamento">Levantamento Topográfico</SelectItem>
                      <SelectItem value="averbacao">Averbação de Construção</SelectItem>
                      <SelectItem value="cnd">CND de Obra</SelectItem>
                      <SelectItem value="condominio">Instituição de Condomínio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Telefone</h3>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">E-mail</h3>
                    <p className="text-muted-foreground">contato@4vvinha.com.br</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Localização</h3>
                    <p className="text-muted-foreground">São Paulo - SP</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
