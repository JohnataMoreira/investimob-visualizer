

# InvestImob - Plataforma SaaS de SDR Digital
## Landing Page + Dashboard Premium para Imobiliárias de Alto Padrão

---

## 🎨 Identidade Visual

**Estilo Dark & Premium** inspirado em plataformas de alto padrão:
- Fundo escuro (tons de cinza profundo/quase preto)
- Acentos dourados/âmbar para elementos de destaque e CTAs
- Tipografia elegante e espaçosa
- Cards com bordas sutis e efeitos de glassmorphism
- Ícones refinados e espaçamento generoso

---

## 📄 Página 1 — Landing Page Institucional

A página de apresentação do InvestImob para captar clientes (imobiliárias):

- **Hero Section**: Título impactante com a proposta de valor ("Transformamos anúncios em visitas qualificadas"), botão CTA dourado, ilustração/mockup do dashboard
- **Problema & Solução**: Seção mostrando as dores das imobiliárias vs. o que o InvestImob resolve
- **Como Funciona**: Fluxo visual em 4 etapas (Anúncio → WhatsApp → IA Qualifica → Corretor Fecha)
- **Métricas de Impacto**: Cards com KPIs (resposta <5s, qualificação >40%, agendamento >25%)
- **Planos e Preços**: Cards Pro (R$697), Elite (R$1.497) e Enterprise
- **FAQ**: Perguntas frequentes em accordion
- **Footer**: Links, contato e CTA final

---

## 📊 Página 2 — Dashboard Principal

Visão geral do desempenho da imobiliária com cards de métricas:

- **KPIs no topo**: Total de leads, taxa de qualificação, agendamentos do mês, taxa de comparecimento
- **Gráfico de funil**: Visualização do pipeline (Novo → Qualificado → Agendado → Visitou → Fechou)
- **Gráfico de leads por período**: Linha/barra com evolução diária/semanal
- **Atividade recente**: Lista das últimas interações e agendamentos

---

## 📋 Página 3 — Gestão de Leads

Tabela completa de leads com funcionalidades de gestão:

- **Tabela de leads**: Nome, telefone, fonte, estágio, score, data de entrada
- **Filtros**: Por estágio (novo, qualificado, agendado), por score, por período
- **Badges de estágio**: Coloridos por status no funil
- **Score visual**: Indicador de qualificação com barra de progresso
- **Detalhe do lead**: Ao clicar, abre painel lateral com histórico de conversas, perfil e agendamentos

---

## 📅 Página 4 — Agendamentos

Visão dos agendamentos de visitas:

- **Lista de agendamentos**: Lead, data/hora, status (agendado, confirmado, realizado, cancelado)
- **Calendário visual**: Visão mensal/semanal dos agendamentos
- **Filtro por status**: Tabs para filtrar agendamentos por estado

---

## 💬 Página 5 — Conversas

Histórico de conversas dos leads com a IA:

- **Lista de conversas**: Lead, canal (WhatsApp), início, duração
- **Visualização de mensagens**: Estilo chat com balões para lead e IA
- **Indicadores**: Se a conversa gerou qualificação ou agendamento

---

## 🗂 Navegação

- **Sidebar fixa** à esquerda com ícones e labels: Dashboard, Leads, Agendamentos, Conversas
- **Header** com nome da imobiliária (tenant) e avatar do usuário
- **Rota separada** para a Landing Page (/) e para o painel (/dashboard, /leads, etc.)

---

## 🔗 Backend (Supabase)

Conectar ao Supabase com as 5 tabelas core da Onda 1:
- **tenants** — dados da imobiliária
- **leads** — leads com score e estágio
- **conversations** — sessões de conversa
- **messages** — mensagens individuais
- **schedules** — agendamentos de visitas

Dados iniciais mockados serão inseridos para demonstração.

