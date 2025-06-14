// import { LucideIcons } from "@/components/icon";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import { getDynamicIcon } from "@/lib/dynamic-icon";
import { Section as ServiceType } from "@/type";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  // const IconCard = LucideIcons[icon] ?? "X";
  const Icon = getDynamicIcon(icon);

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="p-6 flex-grow">
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6" />
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
};

const Services = (props: ServiceType) => {
  return (
    <Section id="services" bgColor="bg-gray-50">
      <SectionHeading title={props.Title ?? ""} subtitle={props.Description} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {props.Services?.map((service, index) => {
          return (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.Title}
              description={service.Description}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Services;
