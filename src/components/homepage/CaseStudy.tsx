'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, Users, Award, BarChart3, Shield } from 'lucide-react';

const performanceMetrics = [
  {
    category: 'Same-Store Sales (Q1)',
    performance: '+13.4%',
    benchmark: 'National: +9.9% | Franchise Avg: +7.0%',
  },
  {
    category: 'Overall Satisfaction (OSAT)',
    performance: '+13.6 pts YoY',
    benchmark: 'Above both regional and national averages',
  },
  {
    category: 'Driver Order Satisfaction (DOSAT)',
    performance: '+34.3 pts YoY',
    benchmark: 'Leading all franchise peers',
  },
  {
    category: 'Accurate Orders',
    performance: 'Top 1% in Region',
    benchmark: 'Consistently above franchise mean',
  },
  {
    category: 'Staff Turnover Reduction',
    performance: '50% lower YoY',
    benchmark: 'Stability achieved despite COVID-19',
  },
  {
    category: 'Operational Consistency',
    performance: 'Improved across all SMG metrics',
    benchmark: 'Led BW region by 6+ pts in every category',
  },
];

const highlights = [
  {
    icon: TrendingUp,
    title: 'Double-Digit Growth',
    description: '13.6% increase in Overall Satisfaction and 11.8% increase in Detailed Satisfaction YoY',
  },
  {
    icon: Target,
    title: 'National Benchmark Leader',
    description: 'Exceeded National System Benchmark in every key guest sentiment category',
  },
  {
    icon: Award,
    title: 'Product & Value Excellence',
    description: 'Top-tier ratings in "Taste of Food" and "Overall Value" (exceeding national avg by ~300 bps)',
  },
];

export function CaseStudy() {
  return (
    <section id="case-study" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
            Case Study
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Strategic Operational Turnaround & EBITDA Stabilization
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Role: Strategic Advisor to Private Equity Sponsor | Portfolio: Multi-Unit National QSR Brand (Southeast US)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Case Study Content */}
          <div className="space-y-8">
            {/* Engagement Overview */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Shield className="h-5 w-5 text-primary" />
                  Engagement Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  RTG leadership was engaged by a specialized Private Equity firm to lead an intensive operational
                  transformation of a high-growth franchise portfolio. The mandate was to protect invested capital
                  through rapid EBITDA stabilization and elevate the guest experience to outperform national system
                  benchmarks within a <span className="font-semibold text-primary">seven-month window</span>.
                </p>
              </CardContent>
            </Card>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="bg-secondary/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Strategic Execution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Strategic Execution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Human Capital Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      Restructured unit-level leadership by sourcing high-performance management and implementing
                      a premium compensation model to retain seasoned service professionals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">SOP Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Deployed a disciplined operational framework focused on "feelings-based" metrics
                      (Likelihood to Recommend/Return) to drive long-term brand equity and repeat traffic.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Fiduciary Alignment</h4>
                    <p className="text-sm text-muted-foreground">
                      Provided the General Partner (GP) with data-driven reporting demonstrating the direct
                      correlation between "boots-on-the-ground" oversight and improved asset valuation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Results Table */}
          <div className="lg:sticky lg:top-24">
            <Card className="shadow-xl">
              <CardHeader className="text-center border-b bg-secondary/30">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Results at a Glance
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">7-Month Transformation Impact</p>
              </CardHeader>
              <CardContent className="p-0">
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="text-left p-4 font-semibold text-primary">Category</th>
                        <th className="text-center p-4 font-semibold text-primary">Performance</th>
                        <th className="text-right p-4 font-semibold text-primary">Benchmark</th>
                      </tr>
                    </thead>
                    <tbody>
                      {performanceMetrics.map((metric, index) => (
                        <tr
                          key={index}
                          className="border-b last:border-b-0 hover:bg-muted/30 transition-colors"
                        >
                          <td className="p-4">
                            <span className="font-medium text-foreground">{metric.category}</span>
                          </td>
                          <td className="p-4 text-center">
                            <Badge
                              variant="outline"
                              className="bg-green-50 text-green-700 border-green-200 font-semibold px-3 py-1"
                            >
                              {metric.performance}
                            </Badge>
                          </td>
                          <td className="p-4 text-right text-sm text-muted-foreground">
                            {metric.benchmark}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Mobile Card View */}
                <div className="md:hidden divide-y">
                  {performanceMetrics.map((metric, index) => (
                    <div key={index} className="p-4 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-medium text-foreground text-sm">{metric.category}</span>
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 border-green-200 font-semibold px-2 py-0.5 text-xs shrink-0"
                        >
                          {metric.performance}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{metric.benchmark}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
