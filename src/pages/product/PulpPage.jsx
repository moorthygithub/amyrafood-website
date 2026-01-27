import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const PulpPage = () => {
  return (
    <div className="pt-[105px] min-h-[80vh] bg-gray-50">
      <Breadcrumbs title="Pulp" items={[{ label: "Pulp" }]} />

      <div className="flex flex-col items-center justify-center mt-20 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Coming Soon
        </h2>

        <p className="text-gray-500 text-center max-w-md">
          Our premium fruit pulp range is launching soon. Stay tuned for quality
          products crafted for global markets.
        </p>
      </div>
    </div>
  );
};

export default PulpPage;
