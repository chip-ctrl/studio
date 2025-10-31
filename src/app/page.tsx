import { Hero } from '@/components/homepage/Hero';
import { AboutPreview } from '@/components/homepage/AboutPreview';
import { Portfolio } from '@/components/homepage/Portfolio';
import { FranchiseSpotlight } from '@/components/homepage/FranchiseSpotlight';
import { CtaBanner } from '@/components/homepage/CtaBanner';
import { InquiryForm } from '@/components/homepage/InquiryForm';
import { TeamShowcase } from '@/components/homepage/TeamShowcase';
import { SuccessStory } from '@/components/homepage/SuccessStory';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Portfolio />
      <SuccessStory />
      <FranchiseSpotlight />
      <CtaBanner />
      <TeamShowcase />
      <InquiryForm />
    </>
  );
}
