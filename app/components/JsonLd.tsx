import Script from "next/script";

export default function JsonLd() {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Aswathy Raj",
          jobTitle: "Full Stack Developer",
          url: "https://aswathyraj.vercel.app",
          sameAs: [
            "https://www.linkedin.com/in/aswathyraj",
            "https://github.com/aswathyrajm",
          ],
          knowsAbout: [
            "Next.js",
            "React",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Express.js",
            "NestJS",
            "RESTful APIs",
            "Full Stack Web Development",
            "Frontend Development",
            "Backend Development",
            "Web Application Architecture",
            "SEO Optimization",
            "Performance Optimization",
            "Responsive Web Design",
            "Server-Side Rendering (SSR)",
            "Static Site Generation (SSG)",
            "API Integration",
            "Authentication & Authorization",
            "JWT Authentication",
            "OAuth",
            "Database Design",
            "MongoDB",
            "MySQL",
            "PostgreSQL",
            "Web Security",
            "Scalable Systems",
            "SaaS Development",
            "UI/UX Best Practices",
          ],
          worksFor: {
            "@type": "Organization",
            name: "Freelance / Software Industry",
          },
          isFamilyFriendly: "true",
        }),
      }}
    />
  );
}
