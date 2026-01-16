function SectionDetails({
  details,
  title,
  align = "center",
}: {
  details?: string;
  noMargin?: boolean;
  title: string;
  align?: "left" | "center";
}) {
  const isLeft = align === "left";

  return (
    <div
      className={`w-full flex items-center flex-col ${
        isLeft ? "text-left items-start" : "text-center"
      }`}
    >
      <div className="relative">
        {/* Right */}
        <span className="absolute top-2 md:top-4 -right-2 w-0.5 md:w-1 h-8 md:h-16 bg-primary" />
        {/* Left */}
        <span className="absolute bottom-2 md:bottom-4 -left-2 w-0.5 md:w-1 h-8 md:h-16 bg-primary" />

        <h2
          className={`font-extrabold text-[50px] md:text-[80px] lg:text-[100px] lowercase text-primary mb-2 md:mb-4 flex items-center ${
            isLeft ? "text-left" : "text-center"
          }`}
        >
          <span>{title}.</span>
        </h2>
      </div>

      {details && (
        <p
          className={`text-md md:text-xl mb-10 ${
            isLeft ? "text-left" : "text-center"
          }`}
        >
          {details}
        </p>
      )}
    </div>
  );
}

export default SectionDetails;
