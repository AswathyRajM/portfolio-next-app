export default function Footer() {
  const lastUpdated = new Date(
    process.env.NEXT_PUBLIC_LAST_UPDATED!,
  ).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
  });
  return (
    <footer className="relative p-6 border-t mt-10 md:mt-20 min-h-[5vh] flex flex-col items-center justify-center bg-bg max-w-screen overflow-x-clip ">
      <p>❣️ Built with care. Designed for clarity ❣️ </p>
      <p className="text-gray-400 text-sm"> Last updated: {lastUpdated}</p>
    </footer>
  );
}
