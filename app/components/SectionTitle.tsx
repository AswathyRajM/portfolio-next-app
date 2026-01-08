function SectionTitle({
  title,
  align = "left",
}: {
  title: string;
  align?: "left" | "center" | "right";
}) {
  const alignmentClasses = {
    left: "justify-start text-left",
    center: "justify-center text-center",
    right: "justify-end text-right",
  };

  return (
    <h2
      className={`font-extrabold text-[40px] md:text-[80px] lg:text-[100px] lowercase text-yellow mb-2 md:mb-4 flex items-center ${alignmentClasses[align]}`}
    >
      <span>{title}.</span>
    </h2>
  );
}

export default SectionTitle;
