import { getThemes } from '@/lib/content';
import Hero from '@/components/Hero';
import Link from 'next/link';

export default function Home() {
  const themes = getThemes();

  return (
    <main className="min-h-screen pb-20">
      <Hero />

      <section className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold font-hand">Recurring Themes</h2>
          <div className="h-1 bg-foreground flex-grow rounded-full opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <Link key={theme.slug} href={`/themes/${theme.slug}`} className="group">
              <article className="h-full p-6 transform transition-all duration-300 hover:-translate-y-2 hover:rotate-0 cursor-pointer flex flex-col relative shadow-md hover:shadow-xl"
                style={{
                  backgroundColor: ['#fef9c3', '#dbeafe', '#dcfce7', '#fee2e2'][index % 4], // Random-ish sticky colors
                  transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`,
                }}
              >
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 backdrop-blur-[1px] transform -rotate-1 shadow-sm border border-white/40"></div>

                <div className="flex justify-between items-start mb-4 mt-2">
                  <span className="font-hand text-xs border border-foreground/20 px-2 py-1 rounded-full bg-white/50">
                    {theme.day}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-hand mb-3 text-foreground/90">
                  {theme.frontmatter.title}
                </h3>

                <p className="font-serif text-sm text-foreground/80 line-clamp-4 flex-grow leading-relaxed">
                  {theme.frontmatter.description || "Explore deep insights and patterns from this conference theme."}
                </p>

                <div className="mt-4 text-right font-hand text-sm text-foreground/60 group-hover:text-foreground transition-colors border-t border-foreground/10 pt-2">
                  Read analysis →
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
