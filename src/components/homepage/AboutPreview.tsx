import * as React from "react";

export default function AboutPreview() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container space-y-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            {/* content left */}
          </div>
          <div className="space-y-6">
            {/* content right */}
          </div>
        </div>
      </div>
    </section>
  );
}
