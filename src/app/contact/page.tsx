"use client";
import { useForm } from "react-hook-form";
import ContactHero from "@/components/ContactHero";
import ContactFormSection from "@/components/ContactFormSection";
import OurOffices from "@/components/OurOffices";

const Contact = () => {
  const form = useForm();
  return (
    <div className="overflow-hidden">
      <ContactHero />
      <ContactFormSection />
      <OurOffices />
    </div>
  );
};

export default Contact;
