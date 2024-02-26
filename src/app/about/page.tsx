"use client";
import MeetUs from "@/components/MeetUs";
import OurCommitments from "@/components/OurCommitments";
import OurExpertise from "@/components/OurExpertise";
import WhyUs from "@/components/WhyUs";

// bg-[#0D2234]

const About = () => {
  return (
    <section>
      <OurExpertise />
      <WhyUs />
      <MeetUs />
      <OurCommitments />
    </section>
  );
};

export default About;
