import { motion } from "framer-motion";

const BlockchainRealEstate: React.FC = () => {
  return (
    <section className="flex h-full w-full flex-col justify-center gap-5 xl:px-0">
      {/* Top Heading */}
      <div className="w-full text-center md:text-start">
        <h1 className="text-2xl font-semibold md:text-4xl xl:text-4xl font-Helvetica my-5 md:my-10">
          Blockchain-Powered <strong className="text-primary">Real Estate</strong> and <strong className="text-primary">AI Investment</strong> Platform
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex w-full flex-col gap-5 md:flex-row">
        {/* Left Section */}
        <div className="flex h-full w-full flex-col items-center justify-center md:w-[55%] md:items-start order-2 md:order-1">
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-primary">●</span>
              <p className="md:text-base text-sm">
                <strong className="text-primary md:text-lg text-base">
                  Precision Investment Recommendations for Maximum ROI
                </strong>{" "}
                <br />
                Use Asset Avenue AI to uncover premier, data-backed real estate
                investment opportunities worldwide.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary">●</span>
              <p className="md:text-base text-sm">
                <strong className="text-primary text-lg">
                  Accurate, Data-Driven Deal Valuations
                </strong>
                <br />
                Depend on real-time AI-powered valuations, reflecting the latest
                sales, neighborhood trends, and market conditions for confident
                investment decisions.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary">●</span>
              <p className="md:text-base text-sm">
                <strong className="text-primary text-lg">
                  Predictive Market Trends to Stay Ahead
                </strong>
                <br />
                Leverage Asset Avenue AI to forecast shifts in property values,
                emerging hotspots, and demand, giving you a competitive edge in
                the market.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary">●</span>
              <p className="md:text-base text-sm">
                <strong className="text-primary text-lg">
                  24/7 AI Support for Rapid Deal Execution
                </strong>
                <br />
                Keep deals moving smoothly with round-the-clock, AI-driven
                answers to property and financing queries.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary text-lg">●</span>
              <p className="md:text-base text-sm">
                <strong className="text-primary">
                  High-Value Lead Scoring to Enhance Deal Flow
                </strong>
                <br />
                Identify the most promising leads, allowing agents to close more
                deals efficiently and increase sales velocity.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary text-lg">●</span>
              <p className="md:text-base text-sm">
                <strong className="text-primary">
                  AI-Optimized Marketing Campaigns to Attract Ideal Buyers
                </strong>
                <br />
                Reach the most relevant audiences with precision-targeted
                campaigns, boosting visibility among serious buyers and
                accelerating sales.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary text-lg">●</span>
              <p className="md:text-base text-sm">
                <strong className="text-primary">
                  Advanced Fraud Detection for Secure Transactions
                </strong>
                <br />
                Protect your investments with AI-backed fraud monitoring, adding
                an essential layer of transaction security.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary text-lg">●</span>
              <p className="md:text-base text-sm">
                <strong className="text-primary">
                  Comprehensive Neighborhood Insights for Investment Confidence
                </strong>
                <br />
                Access data on local amenities, schools, and transit, giving a
                complete view of each property’s appeal for potential tenants or
                buyers.
              </p>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 h-full md:w-[50%] order-1 md:order-2 ">
          <motion.img
            src="./images/ai-logo.png"
            alt="AI Real Estate Illustration"
            width={700}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BlockchainRealEstate;
