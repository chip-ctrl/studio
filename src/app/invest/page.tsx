import { Hero } from '@/components/invest/Hero';
import { Strategy } from '@/components/invest/Strategy';
import { InvestmentOverview } from '@/components/invest/InvestmentOverview';
import { AcquisitionPlan } from '@/components/invest/AcquisitionPlan';
import { OperationsValueCreation } from '@/components/invest/OperationsValueCreation';
import { FranchiseExitStrategy } from '@/components/invest/FranchiseExitStrategy';
import { WhyInvest } from '@/components/invest/WhyInvest';
import { JoinPartnership } from '@/components/invest/JoinPartnership';

export default function InvestPage() {
  return (
    <>
      <Hero />
      <Strategy />
      <InvestmentOverview />
      <AcquisitionPlan />
      <OperationsValueCreation />
      <FranchiseExitStrategy />
      <WhyInvest />
      <JoinPartnership />
    </>
  );
}
