import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components";
import { FC } from "react";

const propertyOverview = {
  description:
    "This exceptional real estate project offers 30 coliving rooms spread across 5 meticulously refurbished and beautifully set up apartments in the heart of Barcelona.",
  apartments: [
    {
      name: "Apartment 1",
      details: [
        "Duplex apartment, 200m²",
        "8 rooms: 2 double and 3 single rooms available for long-term leasing",
        "Thoughtfully designed to foster a communal living experience while maintaining privacy and comfort",
      ],
    },
    {
      name: "Apartment 2",
      details: [
        "100m²",
        "6 rooms: 3 double and 3 single rooms",
        "4 bathrooms, 2 kitchen areas",
      ],
    },
    {
      name: "Apartment 3",
      details: [
        "160m²",
        "6 rooms: 3 double rooms",
        "3 bathrooms, one kitchen",
        "Beautiful views over the city of Barcelona",
      ],
    },
    {
      name: "Apartment 4",
      details: ["120m²", "3 double rooms, each with a private bathroom"],
    },
    {
      name: "Apartment 5",
      details: [
        "4-story building",
        "10 double rooms",
        "Big rooftop terrace with incredible views",
      ],
    },
  ],
};

export const AssetsDescription: FC = () => {
  return (
    <section className="flex h-full w-full max-w-7xl flex-col items-start justify-center px-3 xl:px-0">
      {/* title */}
      <h2 className="mb-3 text-lg font-semibold">Description:</h2>
      <p className="text-sm">
        Exceptional Coliving Spaces in Vibrant Barcelona: A Prime Investment
        Opportunity
      </p>
      <p className="text-sm">
        Barcelona is not only a beautiful city known for its stunning
        architecture and rich culture but also a rapidly growing market with a
        high demand for small living areas like colivings, especially for
        students and young professionals.
      </p>

      <div className="flex w-full flex-col md:w-1/2"></div>
      <div className="mt-5 w-full md:w-1/2">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Property Overview:</AccordionTrigger>
            <AccordionContent>
              <div className="">
                <p className="text-xs">{propertyOverview.description}</p>
                {
                  <div className="mt-1">
                    {propertyOverview.apartments.map((apartment) => (
                      <div key={apartment.name} className="mb-2">
                        <h3 className="text-sm font-medium">
                          {apartment.name}
                        </h3>
                        <ul className="ms-3 list-inside list-disc">
                          {apartment.details.map((detail) => (
                            <li key={detail} className="text-xs">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                }
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Tenant Information:</AccordionTrigger>
            <AccordionContent>
              <div className="">
                <p className="text-xs">
                  All tenants have undergone rigorous background checks and hold
                  stable employment with three-year lease agreement
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Investment Highlights:</AccordionTrigger>
            <AccordionContent>
              <div className="">
                <p className="text-xs">
                  With 30 rooms, this property offers exceptional flexibility
                  and convenience. Rent contracts include utilities up to a
                  monthly maximum, ensuring stability for both tenants and
                  investors in this unique coliving opportunity. The demand for
                  coliving spaces in Barcelona is on the rise, driven by the
                  influx of students and young professionals seeking affordable
                  and flexible living arrangements. This project is ideally
                  positioned to capitalize on this growing trend, providing a
                  secure and profitable investment opportunity in one of
                  Europe's most dynamic cities.
                </p>
                <p className="text-xs font-semibold">
                  Don't miss out on this unparalleled coliving investment in the
                  vibrant and ever-growing city of Barcelona.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Financial Overview:</AccordionTrigger>
            <AccordionContent>
              <div className="">
                <ul className="ms-3 list-inside list-disc">
                  <li className="text-xs font-semibold">
                    Total Monthly Rent:{" "}
                    <span className="font-normal">
                      €16,728 (approx. 17,904 USDT)
                    </span>
                  </li>
                  <li className="text-xs font-semibold">
                    Monthly Operating Expenses*:{" "}
                    <span className="font-normal">
                      {" "}
                      €2,100 (approx. 2,240 USDT)
                    </span>
                  </li>
                </ul>
                <p className="ms-5 mt-2 text-xxs">
                  *Expenses include Water, Electricity, Gas, Cleaning lady, wifi
                  and community expenses.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Projections:</AccordionTrigger>
            <AccordionContent>
              <div className="">
                <ul className="ms-3 list-inside list-disc">
                  <li className="text-xs font-semibold">
                    Annual Rental Growth Rate:{" "}
                    <span className="font-normal">5%</span>
                  </li>
                  <li className="text-xs font-semibold">
                    Planned Investment Horizon:{" "}
                    <span className="font-normal"> 10 years</span>
                  </li>
                  <li className="text-xs font-semibold">
                    Projected Exit Price:{" "}
                    <span className="font-normal">
                      {" "}
                      3,051,000 USDT, based on anticipated rent growth
                    </span>
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Investment Returns:</AccordionTrigger>
            <AccordionContent>
              <div className="">
                <ul className="ms-3 list-inside list-disc">
                  <li className="text-xs font-semibold">
                    Estimated Capital Gains on Shares:{" "}
                    <span className="font-normal">72.32%</span>
                  </li>
                  <li className="text-xs font-semibold">
                    Projected Share Value at 10-Year Exit:{" "}
                    <span className="font-normal">861.60 USDT</span>
                  </li>
                  <li className="text-xs font-semibold">
                    Estimated 10-Year Cash Flow per Share:{" "}
                    <span className="font-normal">
                      498.81 USDT (Total Cash Flow: 1,766,298 USDT)
                    </span>
                  </li>
                  <li className="text-xs font-semibold">
                    Investment Multiplier:{" "}
                    <span className="font-normal">2.6</span>
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
