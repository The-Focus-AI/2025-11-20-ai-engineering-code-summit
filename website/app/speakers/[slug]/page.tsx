import { getSpeakers } from '@/lib/content';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
    const speakers = getSpeakers();
    return speakers.map((speaker) => ({
        slug: speaker.slug,
    }));
}

export default async function SpeakerPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const speakers = getSpeakers();
    const speaker = speakers.find((s) => s.slug === slug);

    if (!speaker) {
        return <div>Speaker not found</div>;
    }

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-foreground mb-8 font-hand group">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Garden
                </Link>

                <article className="bg-white p-8 md:p-12 rounded-xl border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>

                    <header className="mb-12 border-b-4 border-foreground pb-6">
                        <span className="font-mono text-xs text-accent uppercase tracking-widest mb-2 block">
                            Speaker Profile
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold font-hand mb-4">
                            {speaker.frontmatter.title}
                        </h1>
                        {speaker.frontmatter.company && (
                            <p className="text-xl font-serif text-accent italic">
                                {speaker.frontmatter.company}
                            </p>
                        )}
                    </header>

                    <MarkdownRenderer source={speaker.content} />
                </article>
            </div>
        </div>
    );
}
