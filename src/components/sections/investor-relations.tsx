import Button from "@/components/ui/button";
import Section from "@/components/ui/section";
import { InvestorSection } from "@/type";
import { TrendingUp, Award, PieChart } from "lucide-react";

const InvestorRelations = (props: InvestorSection) => {
  return (
    <Section
      id="investor-relations"
      bgColor="bg-gradient-to-b from-blue-900 to-indigo-900"
      className="text-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-6 flex items-center">
            <TrendingUp className="w-8 h-8 mr-3 text-blue-300" />
            <h2 className="text-3xl md:text-4xl font-bold">{props.title}</h2>
          </div>

          <p className="text-xl text-blue-100 mb-6">{props.TitleSecondary}</p>

          <p className="text-blue-200 mb-6">{props.Description}</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="secondary" size="lg">
              Download Investor Deck
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Financial Reports
            </Button>
          </div>

          <div className="flex items-center mt-10">
            <Award className="w-10 h-10 mr-4 text-yellow-300" />
            <div>
              <h3 className="text-xl font-semibold">
                {props.TrustedInvestmentTitle}
              </h3>
              <p className="text-blue-200">
                {props.TrustedInvestmentDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full -translate-y-1/3 translate-x-1/3 blur-xl"></div>

          <h3 className="text-2xl font-semibold mb-6 relative z-10">
            {props.JoinText}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 relative z-10">
            <div className="bg-white/5 p-5 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-green-400 mb-2">
                20.5%
              </div>
              <div className="text-sm text-blue-200">YoY Revenue Growth</div>
            </div>
            <div className="bg-white/5 p-5 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-300 mb-2">35+</div>
              <div className="text-sm text-blue-200">Enterprise Clients</div>
            </div>
            <div className="bg-white/5 p-5 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-purple-400 mb-2">12</div>
              <div className="text-sm text-blue-200">Global Tech Partners</div>
            </div>
            <div className="bg-white/5 p-5 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-yellow-400 mb-2">3</div>
              <div className="text-sm text-blue-200">Indonesian Provinces</div>
            </div>
          </div>

          <div className="relative z-10 mt-6">
            <div className="flex items-center text-blue-100 mb-3">
              <PieChart className="w-5 h-5 mr-2 text-blue-300" />
              <div className="text-lg font-medium">
                {props.MarketGrowthText}
              </div>
            </div>

            {/* Visualization of market growth */}
            <div className="w-full h-12 bg-white/5 rounded-full overflow-hidden relative mb-2">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-green-400 w-[75%] rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-medium">
                {props.MarketGrowthDigitalApplicationText}
              </div>
            </div>
            <p className="text-sm text-blue-200 mb-6">
              {props.MarketGrowthDesription}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default InvestorRelations;
