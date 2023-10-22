import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>
        {isExpanded ? <ChevronUp color="gray" /> : <ChevronDown color="gray" />}
      </span>
    );

    return (
      <div key={item.id} className="mb-4">
        {isExpanded ? (
          <div
            className="flex cursor-pointer items-center justify-between rounded-t-lg border-l-2 border-r-2 border-t-2 p-4 text-lg font-bold text-brand-1"
            onClick={() => handleClick(index)}
          >
            {item.label} {icon}
          </div>
        ) : (
          <div
            className="flex cursor-pointer items-center justify-between rounded-lg border-2 p-4 text-lg font-bold"
            onClick={() => handleClick(index)}
          >
            {item.label} {icon}
          </div>
        )}

        {isExpanded && (
          <div className="rounded-b-lg border-b-2 border-l-2 border-r-2 p-4 text-base">
            {item.content}
          </div>
        )}
      </div>
    );
  });

  return <div className="w-full md:w-[80%]">{renderedItems}</div>;
}

export default Accordion;
