import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import { Section as AboutType } from "@/type";
import { Server, Zap, Globe, Link } from "lucide-react";

interface HighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Highlight = ({ icon, title, description }: HighlightProps) => (
  <div className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group">
    <div className="mr-4 p-3 bg-blue-50 rounded-md text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const About = (props: AboutType) => {
  const highlights = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Trusted Solution Provider",
      description:
        "Powering telco and fintech infrastructure with reliable and secure solutions tailored to the Indonesian market.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Enabler of Digital Transformation",
      description:
        "Delivering scalable solutions that help businesses evolve and thrive in an increasingly digital economy.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Local Insight, Global Standards",
      description:
        "Combining deep understanding of local market dynamics with international best practices and technologies.",
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Strategic Ecosystem Connector",
      description:
        "Building bridges between global innovation and local implementation through strategic partnerships.",
    },
  ];

  return (
    <Section id="about" bgColor="bg-gray-50">
      <SectionHeading
        title={props.Title ?? "About Us Section"}
        subtitle={props.Description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8">
        {highlights.map((highlight, index) => (
          <Highlight
            key={index}
            icon={highlight.icon}
            title={highlight.title}
            description={highlight.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default About;
