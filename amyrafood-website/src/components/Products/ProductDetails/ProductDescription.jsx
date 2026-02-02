const ProductDescription = ({ description }) => {
  if (!description) return null;

  return (
    <div className="space-y-8">
      {description.summary && (
        <p className="text-gray-700 leading-relaxed">{description.summary}</p>
      )}

      {description.sections.map((section, index) => {
        if (section.type === "text") {
          return (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          );
        }

        if (section.type === "list") {
          return (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              <ul className="list-disc list-inside text-gray-600">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }

        if (section.type === "table") {
          return (
            <div key={index} className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                {section.title}
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border border-primary">
                  <tbody>
                    {section.data.map((row, i) => (
                      <tr key={i}>
                        <td className="px-5 py-4 font-semibold text-gray-800 border border-primary w-1/3">
                          {row.label}
                        </td>
                        <td className="px-5 py-4 text-gray-700 border border-primary">
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

        if (section.type === "highlight") {
          return (
            <div
              key={index}
              className="mt-6 text-center font-semibold text-primary text-lg"
            >
              {section.content}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default ProductDescription;
