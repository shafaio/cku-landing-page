import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import { Section as ServiceType } from "@/type";
import { Package, BarChart3, Users, Globe, Smartphone } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
    <div className="p-6 flex-grow">
      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
    {/* <div className="px-6 pb-6">
      <Button variant="text" className="group/btn">
        Learn More
        <svg 
          className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Button>
    </div> */}
  </div>
);

const Services = (props: ServiceType) => {
  const services = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Digital Product & Tech Distribution",
      description:
        "We bring leading technology products to the Indonesian market, adapting them to local needs and ensuring seamless implementation and support.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Digital Transformation & Tech Advisory",
      description:
        "Our consultants help businesses navigate their digital journey with strategic roadmaps, technology selection, and implementation guidance.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Ecosystem Partnership Development",
      description:
        "We connect businesses with the right partners across the technology ecosystem, fostering collaborations that drive innovation and growth.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Strategic Market Entry & Localization",
      description:
        "For global tech companies looking to enter Indonesia, we provide market intelligence, regulatory guidance, and localization strategies.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Fintech & Telco Integration Services",
      description:
        "We specialize in integrating financial and telecommunications technologies to create seamless, secure digital experiences.",
    },
  ];

  return (
    <Section id="services" bgColor="bg-gray-50">
      <SectionHeading title={props.Title ?? ""} subtitle={props.Description} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;
