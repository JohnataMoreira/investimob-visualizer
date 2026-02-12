import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockConversations, mockMessages } from "@/lib/mock-data";
import { MessageSquare, Clock, CheckCircle2, CalendarCheck } from "lucide-react";

export default function Conversations() {
  const [selected, setSelected] = useState<typeof mockConversations[0] | null>(null);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-display font-bold">Conversas</h1>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        {/* List */}
        <div className="space-y-3">
          {mockConversations.map((conv) => (
            <Card
              key={conv.id}
              className={`glass cursor-pointer transition-colors ${selected?.id === conv.id ? "border-primary/50" : "hover:border-border"}`}
              onClick={() => setSelected(conv)}
            >
              <CardContent className="py-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm font-sans">{conv.lead_name}</h3>
                  <span className="text-xs text-muted-foreground">{conv.started_at.split(" ")[1]}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {conv.channel}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {conv.duration}</span>
                </div>
                <div className="flex gap-2 mt-2">
                  {conv.qualified && <Badge className="bg-primary/20 text-primary border-0 text-xs"><CheckCircle2 className="w-3 h-3 mr-1" />Qualificado</Badge>}
                  {conv.scheduled && <Badge className="bg-purple-500/20 text-purple-400 border-0 text-xs"><CalendarCheck className="w-3 h-3 mr-1" />Agendou</Badge>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chat View */}
        <Card className="glass">
          <CardContent className="p-6">
            {selected ? (
              <>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/30">
                  <div>
                    <h3 className="font-semibold font-sans">{selected.lead_name}</h3>
                    <p className="text-xs text-muted-foreground">{selected.started_at} · {selected.duration}</p>
                  </div>
                  <div className="flex gap-2">
                    {selected.qualified && <Badge className="bg-primary/20 text-primary border-0 text-xs">Qualificado</Badge>}
                    {selected.scheduled && <Badge className="bg-purple-500/20 text-purple-400 border-0 text-xs">Agendou</Badge>}
                  </div>
                </div>
                <div className="space-y-3">
                  {mockMessages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === "ai" ? "justify-start" : "justify-end"}`}>
                      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${msg.sender === "ai" ? "bg-secondary text-foreground" : "gold-gradient text-primary-foreground"}`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-64 text-muted-foreground text-sm">
                Selecione uma conversa para visualizar
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
