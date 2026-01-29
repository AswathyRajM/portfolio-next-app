import Link from "next/link";

const NotFoundPage = () => (
  <div className="flex h-[78vh] min-h-fit items-center justify-center">
    <div className="max-w-xl text-center">
      <div className="w-full">{/* <NoDataSvg /> */}</div>
      <h4 className="mt-32 mb-9 text-2xl font-medium leading-snug">
        This page is missing. The rest is intentional.
      </h4>
      <div className="flex items-center justify-center w-full">
        <Link
          href="/"
          className="flex items-center gap-2 border px-2 py-1 w-fit hover:text-primary"
        >
          View portfolio
        </Link>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
