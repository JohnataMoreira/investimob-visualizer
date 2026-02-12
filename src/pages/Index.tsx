import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Zap, MessageSquare, Brain, Users, Clock, Target, CalendarCheck, ArrowRight, CheckCircle2, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <span className="text-2xl font-display font-bold text-gold-gradient">InvestImob</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Como Funciona</a>
            <a href="#metricas" className="hover:text-foreground transition-colors">Resultados</a>
            <a href="#planos" className="hover:text-foreground transition-colors">Planos</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
          <Link to="/dashboard">
            <Button className="gold-gradient text-primary-foreground font-semibold hover:opacity-90">
              Acessar Painel
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(40_80%_55%/0.08),transparent_60%)]" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-gold/10 text-primary border-gold/20 font-medium">
              <Zap className="w-3 h-3 mr-1" /> SDR Digital com Inteligência Artificial
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Transformamos anúncios em{" "}
              <span className="text-gold-gradient">visitas qualificadas</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Atendimento instantâneo via WhatsApp com IA que qualifica leads, agenda visitas e aumenta sua taxa de conversão em até 3x.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gold-gradient text-primary-foreground font-semibold text-lg px-8 hover:opacity-90">
                Começar Agora <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                Ver Demonstração
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h3 className="text-sm font-semibold text-destructive uppercase tracking-wider mb-4">O Problema</h3>
              <h2 className="text-3xl font-display font-bold mb-6">Leads esfriando enquanto aguardam resposta</h2>
              <ul className="space-y-4 text-muted-foreground">
                {["Tempo médio de resposta > 4 horas", "70% dos leads nunca são contatados", "Corretores sobrecarregados com leads frios", "Perda de oportunidades nos fins de semana"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">A Solução</h3>
              <h2 className="text-3xl font-display font-bold mb-6">IA que atende, qualifica e agenda 24/7</h2>
              <ul className="space-y-4 text-muted-foreground">
                {["Resposta em menos de 5 segundos", "Qualificação automática com perguntas inteligentes", "Agendamento direto na agenda do corretor", "Funcionamento 24h, inclusive fins de semana"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Como Funciona</h2>
            <p className="text-muted-foreground text-lg">4 etapas para transformar cliques em visitas</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "Anúncio", desc: "Lead clica no seu anúncio e inicia conversa no WhatsApp" },
              { icon: MessageSquare, title: "WhatsApp", desc: "IA responde em segundos com atendimento personalizado" },
              { icon: Brain, title: "IA Qualifica", desc: "Perguntas inteligentes identificam perfil e intenção real" },
              { icon: Users, title: "Corretor Fecha", desc: "Lead qualificado e agendado vai direto para o corretor" },
            ].map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="glass h-full text-center group hover:border-primary/30 transition-colors">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">Etapa {i + 1}</span>
                    <h3 className="text-lg font-semibold mt-1 mb-2 font-sans">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section id="metricas" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Resultados que Falam</h2>
            <p className="text-muted-foreground text-lg">Métricas reais de imobiliárias que usam o InvestImob</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "< 5s", label: "Tempo de Resposta", desc: "Primeiro contato em menos de 5 segundos" },
              { value: "> 40%", label: "Taxa de Qualificação", desc: "Leads qualificados pela IA automaticamente" },
              { value: "> 25%", label: "Agendamentos", desc: "De leads qualificados que agendam visita" },
            ].map((metric, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="glass text-center hover:border-primary/30 transition-colors">
                  <CardContent className="pt-8 pb-6">
                    <span className="text-5xl font-display font-bold text-gold-gradient">{metric.value}</span>
                    <h3 className="text-lg font-semibold mt-3 mb-1 font-sans">{metric.label}</h3>
                    <p className="text-sm text-muted-foreground">{metric.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Planos & Preços</h2>
            <p className="text-muted-foreground text-lg">Escolha o plano ideal para sua imobiliária</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Pro", price: "697", features: [
                  "Até 500 leads/mês", "1 número WhatsApp", "Qualificação automática",
                  "Agendamento de visitas", "Dashboard de métricas", "Suporte por email",
                ],
              },
              {
                name: "Elite", price: "1.497", featured: true, features: [
                  "Até 2.000 leads/mês", "3 números WhatsApp", "Tudo do Pro",
                  "Scoring avançado de leads", "Relatórios detalhados", "Suporte prioritário",
                ],
              },
              {
                name: "Enterprise", price: "Sob consulta", features: [
                  "Leads ilimitados", "Números ilimitados", "Tudo do Elite",
                  "API de integração", "Gerente de conta dedicado", "SLA garantido",
                ],
              },
            ].map((plan, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className={`h-full relative ${plan.featured ? "border-primary/50 shadow-[0_0_40px_hsl(40_80%_55%/0.1)]" : "glass"}`}>
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="gold-gradient text-primary-foreground font-semibold"><Star className="w-3 h-3 mr-1" /> Mais Popular</Badge>
                    </div>
                  )}
                  <CardContent className="pt-8 pb-6">
                    <h3 className="text-xl font-semibold font-sans mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      {plan.price === "Sob consulta" ? (
                        <span className="text-2xl font-display font-bold">{plan.price}</span>
                      ) : (
                        <div>
                          <span className="text-sm text-muted-foreground">R$</span>
                          <span className="text-4xl font-display font-bold">{plan.price}</span>
                          <span className="text-muted-foreground">/mês</span>
                        </div>
                      )}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${plan.featured ? "gold-gradient text-primary-foreground" : ""}`} variant={plan.featured ? "default" : "outline"}>
                      {plan.price === "Sob consulta" ? "Falar com Vendas" : "Começar Agora"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Perguntas Frequentes</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Como a IA atende os leads?", a: "A IA se conecta ao WhatsApp Business da sua imobiliária e responde automaticamente com conversas naturais, fazendo perguntas de qualificação e agendando visitas diretamente na agenda dos corretores." },
              { q: "Preciso trocar de número de WhatsApp?", a: "Não. Conectamos ao seu número existente via API oficial do WhatsApp Business. Seus clientes continuam falando com o mesmo número de sempre." },
              { q: "Em quanto tempo vejo resultados?", a: "A maioria dos nossos clientes nota aumento na taxa de agendamento já na primeira semana. O tempo de resposta cai de horas para segundos desde o primeiro dia." },
              { q: "A IA substitui o corretor?", a: "Não. A IA faz o trabalho de SDR: primeiro contato, qualificação e agendamento. O corretor recebe leads quentes e prontos para visitar — focando no que faz de melhor: fechar negócios." },
              { q: "Posso personalizar as respostas da IA?", a: "Sim. Você define o tom de voz, as perguntas de qualificação, os critérios de scoring e os horários de agendamento. A IA se adapta ao seu processo." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left font-sans font-medium hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-2xl font-display font-bold text-gold-gradient">InvestImob</span>
            <p className="text-sm text-muted-foreground">© 2026 InvestImob. Todos os direitos reservados.</p>
            <Link to="/dashboard">
              <Button className="gold-gradient text-primary-foreground font-semibold hover:opacity-90">
                Acessar Painel <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
