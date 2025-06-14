import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import { getDynamicIcon } from "@/lib/dynamic-icon";
import { Section as AboutType } from "@/type";

interface HighlightProps {
  icon: string;
  title: string;
  description: string;
}

const Highlight = ({ icon, title, description }: HighlightProps) => {
  const Icon = getDynamicIcon(icon);

  return (
    <div className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group">
      <div className="mr-4 p-3 bg-blue-50 rounded-md text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const About = (props: AboutType) => {
  return (
    <Section id="about" bgColor="bg-gray-50">
      <SectionHeading
        title={props.Title ?? "About Us Section"}
        subtitle={props.Description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8">
        {props.Features?.map((feature, index) => (
          <Highlight
            key={index}
            icon={feature.icon}
            title={feature.Title}
            description={feature.Description}
          />
        ))}
      </div>
    </Section>
  );
};

export default About;
