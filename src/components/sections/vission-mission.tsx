import { LucideIcons } from "@/components/icon";
import Section from "@/components/ui/section";
import { VisionAndMission } from "@/type";

const VisionMission = (props: VisionAndMission) => {
  const IconMission = LucideIcons[props.Vision.icon] ?? "X";
  const IconVission = LucideIcons[props.Mission.icon] ?? "X";

  return (
    <Section id="vision-mission" bgColor="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-10 text-white h-full">
            <div className="flex items-center mb-6">
              <IconMission className="w-10 h-10 mr-4" />
              <h3 className="text-2xl font-bold">{props.Vision.Title}</h3>
            </div>
            <p className="text-xl leading-relaxed mb-6">
              {props.Vision.Description}
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <IconVission className="w-6 h-6 mr-2" />
                {props.Mission.Title}
              </h3>

              <div className="space-y-3 text-white/90">
                {props.Mission.Indicators.split("\n").map((mission, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-sm bg-white text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <p>{mission}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 [&_span]:text-blue-600">
            {props.Title}
          </h2>

          {props.Description.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-700 mb-6">
              {paragraph}
            </p>
          ))}

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="text-xl font-semibold text-blue-800 mb-3">
              {props.WhyApproach.Title}
            </h4>
            <p className="text-gray-700">{props.WhyApproach.Description}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VisionMission;
