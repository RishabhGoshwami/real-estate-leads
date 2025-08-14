import React from "react";

const pricePlans = [
  {
    project: "NIRALA ESTATE",
    plans: [
      { type: "3 BHK + 2T", area: "1250 Sq. Ft.", price: "1.45 Cr* Onwards" },
      { type: "3 BHK + 2T (BIG)", area: "1385 Sq. Ft.", price: "1.6 Cr* Onwards" },
      { type: "3 BHK + 2T", area: "1535 Sq. Ft.", price: "1.8 Cr* Onwards" },
      { type: "3 BHK + 3T (BIG)", area: "1645 Sq. Ft.", price: "1.92 Cr* Onwards" },
      { type: "3 BHK + 3T (BIG)", area: "1897 Sq. Ft.", price: "2.2 Cr* Onwards" },
    ],
  },
  {
    project: "NIRALA TRIO",
    plans: [
      { type: "3 BHK + 2T", area: "1325 Sq. Ft.", price: "1.41 Cr* Onwards" },
      { type: "3 BHK + 3T + STUDY", area: "1600 Sq. Ft.", price: "1.71 Cr* Onwards" },
      { type: "3 BHK + 3T + STUDY", area: "1675 Sq. Ft.", price: "1.79 Cr* Onwards" },
    ],
  },
];

const PricePlanSection = () => {
  return (
    <section id="price-plan" className="py-16 px-6 md:px-12 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          <span className="text-green-600">Price Plan</span> Overview
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore our thoughtfully designed <strong>3 BHK residential apartments</strong> with modern layouts, ample space, and competitive pricing. 
          Check the <strong>super area</strong> and <strong>onwards pricing</strong> for each plan.
        </p>
      </div>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
        {pricePlans.map((project, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.project}</h3>
            <div className="space-y-4">
              {project.plans.map((plan, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-4 rounded-xl hover:bg-green-50 transition"
                >
                  <div className="text-left">
                    <p className="font-medium text-gray-800">{plan.type}</p>
                    <p className="text-gray-600 text-sm">Super Area: {plan.area}</p>
                  </div>
                  <p className="mt-2 sm:mt-0 font-semibold text-green-600 text-lg">{plan.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricePlanSection;
