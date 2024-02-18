"use client";
import ContactHero from "@/components/ContactHero";
import { useForm } from "react-hook-form";
import ContactFormSection from "@/components/ContactFormSection";
import OurOffices from "@/components/OurOffices";
import Footer from "@/components/Footer";

const Contact = () => {
  const form = useForm();
  return (
    <div className="overflow-hidden">
      <ContactHero />
      <ContactFormSection />
      <OurOffices />
      <Footer />
    </div>
  );
};

export default Contact;
