export const mockLeads = [
  { id: "1", name: "Carlos Mendes", phone: "(11) 99123-4567", source: "Facebook Ads", stage: "qualified", score: 85, created_at: "2026-02-10" },
  { id: "2", name: "Ana Oliveira", phone: "(11) 98765-4321", source: "Google Ads", stage: "scheduled", score: 92, created_at: "2026-02-09" },
  { id: "3", name: "Roberto Silva", phone: "(21) 97654-3210", source: "Instagram", stage: "new", score: 45, created_at: "2026-02-11" },
  { id: "4", name: "Juliana Costa", phone: "(11) 96543-2109", source: "Google Ads", stage: "visited", score: 78, created_at: "2026-02-08" },
  { id: "5", name: "Fernando Souza", phone: "(21) 95432-1098", source: "Facebook Ads", stage: "new", score: 30, created_at: "2026-02-12" },
  { id: "6", name: "Mariana Lima", phone: "(11) 94321-0987", source: "Indicação", stage: "closed", score: 95, created_at: "2026-02-05" },
  { id: "7", name: "Pedro Almeida", phone: "(31) 93210-9876", source: "Google Ads", stage: "qualified", score: 72, created_at: "2026-02-11" },
  { id: "8", name: "Camila Rocha", phone: "(11) 92109-8765", source: "Instagram", stage: "scheduled", score: 88, created_at: "2026-02-07" },
];

export const mockSchedules = [
  { id: "1", lead_name: "Ana Oliveira", date: "2026-02-14", time: "10:00", status: "scheduled", property: "Apt. Vila Nova 302" },
  { id: "2", lead_name: "Camila Rocha", date: "2026-02-14", time: "14:30", status: "confirmed", property: "Casa Alphaville 15" },
  { id: "3", lead_name: "Carlos Mendes", date: "2026-02-15", time: "09:00", status: "scheduled", property: "Cobertura Itaim 801" },
  { id: "4", lead_name: "Juliana Costa", date: "2026-02-12", time: "16:00", status: "completed", property: "Apt. Moema 204" },
  { id: "5", lead_name: "Mariana Lima", date: "2026-02-10", time: "11:00", status: "completed", property: "Casa Morumbi 8" },
  { id: "6", lead_name: "Roberto Silva", date: "2026-02-13", time: "15:00", status: "cancelled", property: "Apt. Pinheiros 505" },
];

export const mockConversations = [
  { id: "1", lead_name: "Carlos Mendes", channel: "WhatsApp", started_at: "2026-02-10 14:32", duration: "8 min", qualified: true, scheduled: true },
  { id: "2", lead_name: "Ana Oliveira", channel: "WhatsApp", started_at: "2026-02-09 09:15", duration: "12 min", qualified: true, scheduled: true },
  { id: "3", lead_name: "Roberto Silva", channel: "WhatsApp", started_at: "2026-02-11 18:45", duration: "3 min", qualified: false, scheduled: false },
  { id: "4", lead_name: "Fernando Souza", channel: "WhatsApp", started_at: "2026-02-12 08:02", duration: "5 min", qualified: false, scheduled: false },
  { id: "5", lead_name: "Pedro Almeida", channel: "WhatsApp", started_at: "2026-02-11 11:20", duration: "10 min", qualified: true, scheduled: false },
];

export const mockMessages = [
  { id: "1", sender: "lead", text: "Olá, vi o anúncio do apartamento no Itaim. Ainda está disponível?" },
  { id: "2", sender: "ai", text: "Olá Carlos! 👋 Sim, o apartamento no Itaim está disponível! É um lindo apartamento de 3 quartos com 120m². Posso te contar mais detalhes?" },
  { id: "3", sender: "lead", text: "Sim, qual o valor?" },
  { id: "4", sender: "ai", text: "O valor é R$ 1.850.000. Ele possui 3 suítes, varanda gourmet e 2 vagas. Você está buscando para moradia ou investimento?" },
  { id: "5", sender: "lead", text: "Moradia. Somos um casal com 1 filho." },
  { id: "6", sender: "ai", text: "Perfeito! O apartamento é ideal para famílias. A região tem ótimas escolas e parques. Gostaria de agendar uma visita? Temos horários disponíveis esta semana." },
  { id: "7", sender: "lead", text: "Sim, pode ser sábado de manhã?" },
  { id: "8", sender: "ai", text: "Ótimo! Agendei sua visita para sábado, dia 15/02, às 09:00. O corretor Ricardo vai te receber. Vou enviar a localização exata por aqui. Até lá! 🏠" },
];

export const stageLabels: Record<string, string> = {
  new: "Novo",
  qualified: "Qualificado",
  scheduled: "Agendado",
  visited: "Visitou",
  closed: "Fechou",
};

export const stageColors: Record<string, string> = {
  new: "bg-blue-500/20 text-blue-400",
  qualified: "bg-primary/20 text-primary",
  scheduled: "bg-purple-500/20 text-purple-400",
  visited: "bg-emerald-500/20 text-emerald-400",
  closed: "bg-green-500/20 text-green-400",
};

export const scheduleStatusLabels: Record<string, string> = {
  scheduled: "Agendado",
  confirmed: "Confirmado",
  completed: "Realizado",
  cancelled: "Cancelado",
};

export const scheduleStatusColors: Record<string, string> = {
  scheduled: "bg-blue-500/20 text-blue-400",
  confirmed: "bg-primary/20 text-primary",
  completed: "bg-emerald-500/20 text-emerald-400",
  cancelled: "bg-destructive/20 text-destructive",
};

export const funnelData = [
  { stage: "Novo", count: 120, fill: "hsl(210 80% 55%)" },
  { stage: "Qualificado", count: 52, fill: "hsl(40 80% 55%)" },
  { stage: "Agendado", count: 34, fill: "hsl(270 60% 55%)" },
  { stage: "Visitou", count: 22, fill: "hsl(160 60% 45%)" },
  { stage: "Fechou", count: 8, fill: "hsl(120 60% 40%)" },
];

export const leadsOverTime = [
  { day: "06/02", leads: 12 },
  { day: "07/02", leads: 18 },
  { day: "08/02", leads: 15 },
  { day: "09/02", leads: 22 },
  { day: "10/02", leads: 28 },
  { day: "11/02", leads: 20 },
  { day: "12/02", leads: 25 },
];
