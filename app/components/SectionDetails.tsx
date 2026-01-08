import React from "react";

function SectionDetails({
  details,
  align = "left",
  noMargin = false,
}: {
  details: string;
  align?: "left" | "center" | "right";
  noMargin?: boolean;
}) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <p
      className={`text-md md:text-xl ${!noMargin && "mb-10"} ${
        alignmentClasses[align]
      }`}
    >
      {details}
    </p>
  );
}

export default SectionDetails;
