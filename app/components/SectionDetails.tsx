function SectionDetails({
  details,
  title,
}: {
  details: string;
  noMargin?: boolean;
  title: string;
}) {
  return (
    <div className="w-full flex items-center flex-col text-center">
      <h2
        className={`font-extrabold text-[50px] md:text-[80px] lg:text-[100px] lowercase text-yellow mb-2 md:mb-4 flex items-center text-center`}
      >
        <span>{title}.</span>
      </h2>
      <p className="text-md md:text-xl mb-10 text-center">{details}</p>
    </div>
  );
}

export default SectionDetails;
