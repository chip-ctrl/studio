'use client';

import { teamMembers } from '@/lib/team';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function TeamMemberPage({ params }: { params: { memberId: string } }) {
  const member = teamMembers.find((m) => m.id === params.memberId);

  if (!member) {
    notFound();
  }

  // Split bio into paragraphs
  const bioParagraphs = member.bio.split('\n\n');

  return (
    <div className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-1 p-8 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src={member.imageUrl}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="192px"
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <h1 className="text-3xl font-bold text-primary mt-4">{member.name}</h1>
              <p className="text-lg text-muted-foreground mt-1">{member.title}</p>
            </div>
            <div className="md:col-span-2 p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Biography</h2>
              <div className="space-y-4 text-foreground/80 prose prose-lg max-w-none">
                {bioParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
