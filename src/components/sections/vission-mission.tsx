import Section from "@/components/ui/section";
import { VisionAndMission } from "@/type";
import { Target, CheckCircle } from "lucide-react";

// interface MissionItemProps {
//   text: string;
// }

// const MissionItem = ({ text }: MissionItemProps) => (
//   <div className="flex items-center mb-4 last:mb-0 group">
//     <div className="mr-4 text-green-600 group-hover:scale-110 transition-transform duration-300">
//       <CheckCircle className="w-6 h-6" />
//     </div>
//     <p className="text-gray-700">{text}</p>
//   </div>
// );

const VisionMission = (props: VisionAndMission) => {
  const missions = [
    "To provide world-class technology solutions that address the unique needs of the Indonesian market",
    "To foster digital innovation and transformation across industries",
    "To build strong partnerships that connect global expertise with local implementation",
    "To maintain the highest standards of service quality, reliability and security",
    "To contribute to Indonesia's growth as a digital economy leader in Southeast Asia",
  ];

  return (
    <Section id="vision-mission" bgColor="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-10 text-white h-full">
            <div className="flex items-center mb-6">
              <Target className="w-10 h-10 mr-4" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-xl leading-relaxed mb-6">
              To be Indonesia&apos;s premier technology enabler, bridging global
              innovation with local implementation to accelerate the
              nation&apos;s digital transformation.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Our Mission
              </h3>

              <div className="space-y-3 text-white/90">
                {missions.map((mission, index) => (
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
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 [&_span]:text-blue-600"
            // dangerouslySetInnerHTML={{ __html: props.Title }}
          >
            {/* Building the Bridge Between{" "}
            <span className="text-blue-600">Technology</span> and{" "}
            <span className="text-blue-600">Opportunity</span> */}
            {props.Title}
          </h2>

          {props.Description.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-700 mb-6">
              {paragraph}
            </p>
          ))}

          {/* <p className="text-lg text-gray-700 mb-6">
            At Citra Komunikasi Utama, we believe that technology must be
            adapted to local contexts to deliver real value. Our vision and
            mission guide our strategic approach to digital transformation.
            {props.Description}
          </p> */}

          {/* <p className="text-lg text-gray-700 mb-6">
            We combine global expertise with deep local insights to develop
            solutions that are not just innovative, but also practical and
            impactful for the Indonesian market.
          </p> */}

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="text-xl font-semibold text-blue-800 mb-3">
              Why Our Approach Works
            </h4>
            <p className="text-gray-700">
              By understanding both global technology trends and local market
              realities, we create a strategic advantage for our clients,
              helping them navigate Indonesia&apos;s unique digital landscape
              with confidence.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VisionMission;
