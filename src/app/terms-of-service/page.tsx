import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | RTG Resto Tech Group',
  description: 'Terms of Service for Resto Tech Group LP',
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            RESTOTECH GROUP LP TERMS OF SERVICE
          </h1>
          <p className="text-muted-foreground mb-8">
            <strong>Effective Date:</strong> January 2, 2026
          </p>

          <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
            <p>
              By accessing this website, you agree to the following terms and conditions provided by Resto Tech Group LP.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                1. No Investment Advice
              </h2>
              <p className="text-muted-foreground">
                The content on this website, including case studies and portfolio performance, is for informational
                purposes only. It does not constitute financial, legal, or investment advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                2. Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                All content, including the RTG logo, text, and &ldquo;Experience Meets Innovation&rdquo; branding,
                is the exclusive property of Resto Tech Group LP. Unauthorized use or reproduction is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                3. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                RTG provides this site &ldquo;as is.&rdquo; We are not liable for any damages arising from the use of
                this site or reliance on its content, including but not limited to technical errors or inaccuracies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                4. Governing Law
              </h2>
              <p className="text-muted-foreground">
                These terms are governed by and construed in accordance with the laws of the State of Delaware,
                without regard to its conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                5. User Conduct
              </h2>
              <p className="text-muted-foreground">
                Users agree not to use the contact forms for spam or to attempt to interfere with the technical
                operation of the website.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t">
              <p className="text-muted-foreground">
                For questions regarding these terms, please contact:{' '}
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
