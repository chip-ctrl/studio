import { Hero } from '@/components/homepage/Hero';
import AboutPreview from '@/components/homepage/AboutPreview';
import { CaseStudy } from '@/components/homepage/CaseStudy';
import { FranchiseSpotlight } from '@/components/homepage/FranchiseSpotlight';
import { CtaBanner } from '@/components/homepage/CtaBanner';
import { InquiryForm } from '@/components/homepage/InquiryForm';
import { TeamShowcase } from '@/components/homepage/TeamShowcase';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <CaseStudy />
      <FranchiseSpotlight />
      <CtaBanner />
      <TeamShowcase />
      <InquiryForm />
    </>
  );
}
