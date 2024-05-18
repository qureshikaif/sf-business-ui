"use client";
import { services } from "@/placeholders/Services";
import OurServices from "@/components/OurServices";
import ServicesHero from "@/components/ServicesHero";
import TalkToOurConsultant from "@/components/TalkToOurConsultant";
import { useParams } from "next/navigation";
import { serviceType } from "@/types/service";

const Service = () => {
  const params = useParams();
  const moreservices = services.flatMap((service) => service.moreservices);
  const serviceLink = params.service;
  const selectedService = moreservices.find(
    (service) => service.link === serviceLink
  );
  return (
    <div className="overflow-hidden">
      <ServicesHero service={selectedService as serviceType} />
      <OurServices service={selectedService as serviceType} />
      <TalkToOurConsultant />
    </div>
  );
};

export default Service;
