import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, CalendarCheck, UserCheck } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, FunnelChart, Funnel, LabelList, Cell } from "recharts";
import { funnelData, leadsOverTime, mockLeads, mockSchedules, stageLabels } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

const kpis = [
  { label: "Total de Leads", value: "120", icon: Users, change: "+18%" },
  { label: "Taxa de Qualificação", value: "43%", icon: Target, change: "+5%" },
  { label: "Agendamentos", value: "34", icon: CalendarCheck, change: "+12%" },
  { label: "Taxa de Comparecimento", value: "65%", icon: UserCheck, change: "+8%" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-display font-bold">Dashboard</h1>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label} className="glass">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-3">
                <kpi.icon className="w-5 h-5 text-primary" />
                <Badge variant="secondary" className="text-xs text-emerald-400 bg-emerald-500/10">{kpi.change}</Badge>
              </div>
              <p className="text-3xl font-bold font-sans">{kpi.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{kpi.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="glass">
          <CardHeader><CardTitle className="text-lg font-sans">Funil de Vendas</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={funnelData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 16%)" />
                <XAxis type="number" stroke="hsl(220 10% 55%)" fontSize={12} />
                <YAxis dataKey="stage" type="category" stroke="hsl(220 10% 55%)" fontSize={12} width={90} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(220 18% 8%)", border: "1px solid hsl(220 15% 16%)", borderRadius: "8px", color: "hsl(40 10% 92%)" }} />
                <Bar dataKey="count" radius={[0, 6, 6, 0]}>
                  {funnelData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader><CardTitle className="text-lg font-sans">Leads por Dia</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={leadsOverTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 16%)" />
                <XAxis dataKey="day" stroke="hsl(220 10% 55%)" fontSize={12} />
                <YAxis stroke="hsl(220 10% 55%)" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(220 18% 8%)", border: "1px solid hsl(220 15% 16%)", borderRadius: "8px", color: "hsl(40 10% 92%)" }} />
                <Bar dataKey="leads" fill="hsl(40 80% 55%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="glass">
        <CardHeader><CardTitle className="text-lg font-sans">Atividade Recente</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockSchedules.slice(0, 4).map((s) => (
              <div key={s.id} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                <div>
                  <p className="font-medium text-sm">{s.lead_name}</p>
                  <p className="text-xs text-muted-foreground">{s.property} — {s.date} às {s.time}</p>
                </div>
                <Badge variant="secondary" className="text-xs capitalize">{s.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
