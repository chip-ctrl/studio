import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { X, Check } from "lucide-react";

const comparisonData = [
  { traditional: "Single-brand risk", rtg: "Diversified brand portfolio" },
  { traditional: "Limited control", rtg: "Active operational oversight" },
  { traditional: "Slow scaling", rtg: "Technology-driven franchise growth" },
  { traditional: "Royalties only", rtg: "Multiple revenue streams (royalties + systems + IP)" },
  { traditional: "Operator-dependent", rtg: "Platform-driven performance" },
];

export function WhyInvest() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Why Invest with RTG</h2>
        </div>
        {/* Desktop Table View */}
        <div className="hidden md:block">
          <Table>
              <TableHeader>
                  <TableRow>
                      <TableHead className="w-1/2 font-semibold text-lg">Traditional Franchise</TableHead>
                      <TableHead className="w-1/2 font-semibold text-lg">RTG Franchisor Platform</TableHead>
                  </TableRow>
              </TableHeader>
              <TableBody>
                  {comparisonData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.traditional}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-base">{item.rtg}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
          </Table>
        </div>
        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {comparisonData.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 bg-card">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-1 bg-red-100 rounded-full shrink-0">
                  <X className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Traditional</span>
                  <p className="text-sm text-foreground">{item.traditional}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1 bg-green-100 rounded-full shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">RTG Platform</span>
                  <p className="text-sm font-medium text-primary">{item.rtg}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
