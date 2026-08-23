import InstitutionalHero  from "@/components/InstitutionalHero";
import GroupProofStrip    from "@/components/GroupProofStrip";
import DivisionsGateway   from "@/components/DivisionsGateway";
import WhyVirtusSection   from "@/components/WhyVirtusSection";
import GroupTestimonials  from "@/components/GroupTestimonials";
import GroupCTA           from "@/components/GroupCTA";
import Navbar             from "@/components/Navbar";
import Footer             from "@/components/Footer";
import WhatsAppFloat      from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <InstitutionalHero />
        <GroupProofStrip />
        <DivisionsGateway />
        <WhyVirtusSection />
        <GroupTestimonials />
        <GroupCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
