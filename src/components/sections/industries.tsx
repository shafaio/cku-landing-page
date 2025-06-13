import { LucideIcons } from "@/components/icon";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import { Section as IndustriesType } from "@/type";

interface IndustryCardProps {
  icon: string;
  title: string;
  description: string;
  indicators: string;
}

const IndustryCard = ({
  icon,
  title,
  description,
  indicators,
}: IndustryCardProps) => {
  const Icon = LucideIcons[icon] ?? LucideIcons["X"];

  return (
    <div className="relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/95 rounded-lg transform transition-transform duration-500 group-hover:scale-105"></div>

      <div className="relative p-8 text-white h-full flex flex-col">
        <div className="mb-4 text-blue-300 group-hover:text-white transition-colors duration-300">
          <Icon className="w-10 h-10" />
        </div>

        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-blue-100">{description}</p>

        <div className="mt-6 pt-4 border-t border-blue-700/50">
          <ul className="space-y-2">
            {indicators.split("\n").map((indicator, index) => (
              <li key={index} className="flex items-center text-blue-200">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {indicator}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Industries = (props: IndustriesType) => {
  return (
    <Section id="industries" bgColor="bg-white">
      <SectionHeading title={props.title!} subtitle={props.description!} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {props.Industries?.map((industry, index) => (
          <IndustryCard
            key={index}
            icon={industry.icon}
            title={industry.Title}
            description={industry.Description}
            indicators={industry.Indicators}
          />
        ))}
      </div>
    </Section>
  );
};

export default Industries;
