import Link from "next/link";
import workHistories from "../../utils/static-data/workHistories";
import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

function RightSection() {
  const [showMore, setShowMore] = useState(false);

  const histories = showMore ? workHistories : workHistories.slice(0, 3);

  return (
    <div className="flex flex-col min-w-full lg:min-w-min lg:px-0 mt-20 lg:mt-0">
      <hr className="mb-10 border-2 border-gray-900 dark:border-gray-100 lg:hidden" />
      <p className="section-title mb-8">Work History</p>
      <div className="flex flex-col">
        {histories.map((history, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col lg:grid lg:grid-cols-2 "
          >
            <p className="font-semibold text-base lg:text-lg grayed-text">
              {history.period}
            </p>
            <div>
              <p className="font-bold text-2xl lg:text-3xl">{history.title}</p>
              <p className="grayed-text">{history.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="self-center text-2xl"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
      </button>
      <Link
        href="Resume-Muhammad-Azmi-2024.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-sm hover:text-xl transition-all ease-in-out delay-150 italic mt-6 underline decoration-violet-600 decoration-4"
      >
        Get Latest Resume in PDF
      </Link>
    </div>
  );
}

export default RightSection;
