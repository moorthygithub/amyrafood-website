const ProductDescription = ({ description }) => {
  if (!description) return null;

  return (
    <div className="space-y-8 mt-8">
      {description.sections?.map((section, index) => {
        if (section.type === "text") {
          return (
            <div key={index} className="space-y-2">
              {section.title && (
                <h3 className="text-lg font-semibold text-gray-900">
                  {section.title}
                </h3>
              )}
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          );
        }

        // List Section
        if (section.type === "list") {
          return (
            <div key={index} className="space-y-3">
              {section.title && (
                <h3 className="text-lg font-semibold text-gray-900">
                  {section.title}
                </h3>
              )}
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {section.items?.map((item) => (
                  <li key={item.id} className="leading-relaxed text-">
                    {item.value}
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        // Table Section
        if (section.type === "table") {
          return (
            <div key={index} className="space-y-4">
              {section.title && (
                <h3 className="text-lg font-semibold text-gray-900">
                  {section.title}
                </h3>
              )}

              <div className="overflow-x-auto rounded-lg border border-primary/30">
                <table className="w-full">
                  <tbody>
                    {section.data?.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-primary/30 last:border-b-0"
                      >
                        <td className="px-5 py-4 font-semibold text-gray-800 bg-primary/5 w-1/3 align-top">
                          {row.label}
                        </td>
                        <td className="px-5 py-4 text-gray-700 align-top">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }

        // Highlight Section
        if (section.type === "highlight") {
          return (
            <div
              key={index}
              className="bg-primary/10 border-l-4 border-primary px-6 py-4 rounded-r-lg"
            >
              <p className="font-semibold text-primary text-lg">
                {section.content}
              </p>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default ProductDescription;
