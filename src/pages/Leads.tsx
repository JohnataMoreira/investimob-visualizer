import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { mockLeads, stageLabels, stageColors, mockMessages } from "@/lib/mock-data";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Leads() {
  const [filter, setFilter] = useState("all");
  const [selectedLead, setSelectedLead] = useState<typeof mockLeads[0] | null>(null);

  const filtered = filter === "all" ? mockLeads : mockLeads.filter((l) => l.stage === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-display font-bold">Leads</h1>
        <Badge variant="secondary" className="text-sm">{mockLeads.length} leads</Badge>
      </div>

      <Tabs value={filter} onValueChange={setFilter}>
        <TabsList className="bg-secondary">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="new">Novos</TabsTrigger>
          <TabsTrigger value="qualified">Qualificados</TabsTrigger>
          <TabsTrigger value="scheduled">Agendados</TabsTrigger>
        </TabsList>
      </Tabs>

      <Card className="glass">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border/30 hover:bg-transparent">
                <TableHead>Nome</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Fonte</TableHead>
                <TableHead>Estágio</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((lead) => (
                <TableRow
                  key={lead.id}
                  className="border-border/30 cursor-pointer hover:bg-secondary/50"
                  onClick={() => setSelectedLead(lead)}
                >
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{lead.phone}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{lead.source}</TableCell>
                  <TableCell>
                    <Badge className={`${stageColors[lead.stage]} border-0 text-xs`}>{stageLabels[lead.stage]}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={lead.score} className="w-16 h-2" />
                      <span className="text-xs text-muted-foreground">{lead.score}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{lead.created_at}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Lead Detail Sheet */}
      <Sheet open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
        <SheetContent className="bg-card border-border/50 w-full sm:max-w-lg overflow-y-auto">
          {selectedLead && (
            <>
              <SheetHeader>
                <SheetTitle className="font-display text-2xl">{selectedLead.name}</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Telefone</p>
                    <p className="text-sm font-medium">{selectedLead.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Fonte</p>
                    <p className="text-sm font-medium">{selectedLead.source}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Estágio</p>
                    <Badge className={`${stageColors[selectedLead.stage]} border-0 text-xs`}>{stageLabels[selectedLead.stage]}</Badge>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Score</p>
                    <div className="flex items-center gap-2">
                      <Progress value={selectedLead.score} className="w-20 h-2" />
                      <span className="text-sm font-bold">{selectedLead.score}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-3">Histórico de Conversa</h3>
                  <div className="space-y-3">
                    {mockMessages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.sender === "ai" ? "justify-start" : "justify-end"}`}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${msg.sender === "ai" ? "bg-secondary text-foreground" : "gold-gradient text-primary-foreground"}`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
