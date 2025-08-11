import React from "react";

const SectionHeading = ({ title, subTitle, className, subClassName }) => {
  return (
    <>
      <p className={`${className} text-primary uppercase max-sm:text-center`}>
        {title}
      </p>
      <h2 className={`${subClassName} text-black max-sm:text-center`}>
        {subTitle}
      </h2>
    </>
  );
};

export default SectionHeading;
