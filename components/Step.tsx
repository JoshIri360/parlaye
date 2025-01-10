import React from "react";

interface StepProps {
  stepNumber: number;
  heading: string;
  subheading: string;
  image: string;
}

export default function Step({
  stepNumber,
  heading,
  subheading,
  image,
}: StepProps) {
  return (
    <div className="w-full rounded-xl border border-[#333333] flex flex-col shadow-md hover:shadow-lg transition-shadow h-full">
      <div className="flex-1 flex items-center justify-center p-4 min-h-64">
        <img
          src={image}
          alt={`Step ${stepNumber}`}
          className="w-2/3  max-w-full h-auto object-contain rounded-lg"
        />
      </div>
      <div className="w-full p-3 sm:p-4">
        <div className="flex items-start flex-col">
          <h3 className="font-semibold text-sm sm:text-base text-[#74F6C4]">
            Step {stepNumber} - {heading}
          </h3>
          <p className="text-sm  text-[#72877E] mt-1">
            {subheading}
          </p>
        </div>
      </div>
    </div>
  );
}
