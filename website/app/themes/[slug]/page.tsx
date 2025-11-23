import { getThemes } from '@/lib/content';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
    const themes = getThemes();
    return themes.map((theme) => ({
        slug: theme.slug,
    }));
}

export default async function ThemePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themes = getThemes();
    const theme = themes.find((t) => t.slug === slug);

    if (!theme) {
        return <div>Theme not found</div>;
    }

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-foreground mb-8 font-hand group">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Garden
                </Link>

                <article className="bg-white p-8 md:p-12 rounded-xl border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] relative overflow-hidden">
                    {/* Paper texture overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>

                    <header className="mb-12 border-b-4 border-foreground pb-6">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-foreground text-white px-3 py-1 rounded-full font-hand text-sm">
                                {theme.day}
                            </span>
                            <span className="font-mono text-xs text-accent uppercase tracking-widest">
                                Theme Analysis
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-hand mb-4">
                            {theme.frontmatter.title}
                        </h1>
                        {theme.frontmatter.description && (
                            <p className="text-xl font-serif text-accent italic">
                                {theme.frontmatter.description}
                            </p>
                        )}
                    </header>

                    <MarkdownRenderer source={theme.content} />
                </article>
            </div>
        </div>
    );
}
