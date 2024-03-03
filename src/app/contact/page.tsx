"use client";
import ContactHero from "@/components/ContactHero";
import ContactFormSection from "@/components/ContactFormSection";
import OurOffices from "@/components/OurOffices";

const Contact = () => {
  return (
    <div className="overflow-hidden">
      <ContactHero />
      <ContactFormSection />
      <OurOffices />
    </div>
  );
};

export default Contact;
