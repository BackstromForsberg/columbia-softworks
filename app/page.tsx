export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <main className="w-[50vw] flex flex-col items-start justify-center gap-0 leading-none overflow-visible">
        <div>
          <h1 className="text-[clamp(4rem,12vw,10rem)] font-black tracking-tighter text-foreground uppercase select-none">
            COLUMBIA
          </h1>
        </div>
        <div className="-mt-[clamp(1rem,3vw,2.5rem)]">
          <h1 className="text-[clamp(4rem,12vw,10rem)] font-black tracking-tighter text-foreground uppercase select-none transform translate-x-[5%] opacity-40">
            SOFTWORKS
          </h1>
        </div>
        <div className="mt-8 h-1 w-24 bg-foreground"></div>
        <a 
          href="mailto:scott@columbiasoftworks.com"
          className="mt-12 text-2xl font-bold tracking-wider uppercase text-foreground hover:opacity-60 transition-opacity duration-200"
        >
          Contact
        </a>
      </main>
    </div>
  );
}
