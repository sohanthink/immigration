import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import Card from "./common/Card";

const MarketIntelligenceCard = ({ title, description, included, i }) => {
  return (
    <Card className={"border-[#69BC45] h-full"}>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3>{title}</h3>
          <p className="text-gray mt-6">{description}</p>
        </div>
        <div>
          <h3 className="text-black mt-16">Included services:</h3>
          <ul className="space-y-8 mt-8">
            {included.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray">
                <div>
                  <IoCheckmarkCircle className="text-blue text-lg" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default MarketIntelligenceCard;
