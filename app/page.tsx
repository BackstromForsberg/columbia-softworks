export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Columbia Softworks",
    "legalName": "Columbia Softworks, LLC",
    "url": "https://columbiasoftworks.com",
    "email": "scott@columbiasoftworks.com",
    "description": "Software shop specializing in custom software development, web applications, and digital solutions.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "scott@columbiasoftworks.com",
      "contactType": "customer service"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black px-10 md:px-0">
        <main className="w-full md:w-[80vw] flex flex-col items-start justify-center gap-0 leading-none overflow-visible">
          <div>
            <h1 className="text-[clamp(2.5rem,11vw,10rem)] md:text-[clamp(4rem,12vw,10rem)] font-black tracking-tighter text-foreground uppercase select-none">
              COLUMBIA
            </h1>
          </div>
          <div className="-mt-[clamp(0.6rem,2.75vw,2.5rem)] md:-mt-[clamp(1rem,3vw,2.5rem)]">
            <h1 className="text-[clamp(2.5rem,11vw,10rem)] md:text-[clamp(4rem,12vw,10rem)] font-black tracking-tighter text-foreground uppercase select-none transform translate-x-[5%] opacity-40">
              SOFTWORKS
            </h1>
          </div>
          <div className="mt-6 md:mt-8 h-1 w-20 md:w-24 bg-foreground"></div>
          <a
            href="mailto:scott@columbiasoftworks.com"
            className="mt-8 md:mt-12 text-xl md:text-2xl font-bold tracking-wider uppercase text-foreground hover:opacity-60 transition-opacity duration-200"
          >
            Contact
          </a>
        </main>
      </div>
    </>
  );
}
