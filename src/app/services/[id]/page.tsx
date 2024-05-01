"use client";
import { services } from "@/placeholders/Services";
import OurServices from "@/components/OurServices";
import ServicesHero from "@/components/ServicesHero";
import TalkToOurConsultant from "@/components/TalkToOurConsultant";
import { useParams } from "next/navigation";
import { serviceType } from "@/types/service";

const Services = () => {
  const params = useParams();
  const id = params.id;
  const selectedService = services.find(
    (service) => service.id === parseInt(id as string)
  );
  return (
    <div className="overflow-hidden">
      <ServicesHero service={selectedService as serviceType} />
      <OurServices service={selectedService as serviceType} />
      <TalkToOurConsultant />
    </div>
  );
};

export default Services;
