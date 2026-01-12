import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | RTG Resto Tech Group',
  description: 'Privacy Policy for Resto Tech Group LP',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            RESTO TECH GROUP LP PRIVACY POLICY
          </h1>
          <p className="text-muted-foreground mb-8">
            <strong>Effective Date:</strong> January 2, 2026
          </p>

          <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
            <p>
              Resto Tech Group LP (&ldquo;RTG,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy.
              This policy describes how we collect and use information through restotechlp.com and restotechgrouplp.com.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                Information We Collect
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Contact Data</h3>
                  <p className="text-muted-foreground">
                    We collect your name, email address, and message content when you use our &ldquo;Sell Your Business,&rdquo;
                    &ldquo;Franchise,&rdquo; or &ldquo;Partner with RTG&rdquo; forms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground">Usage Data</h3>
                  <p className="text-muted-foreground">
                    We may collect IP addresses and browser types to improve website performance.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To evaluate potential business acquisitions, partnerships, or franchise inquiries.</li>
                <li>To communicate with you regarding your submissions.</li>
                <li>To send industry insights or company updates if you have subscribed to our newsletter.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                Data Sharing and Security
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>We do not sell your personal data to third parties.</li>
                <li>We implement industry-standard security measures to protect your information from unauthorized access.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground">
                For questions regarding this policy, please contact:{' '}
                <a
                  href="mailto:info@restotechlp.com"
                  className="text-primary hover:underline"
                >
                  info@restotechlp.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
