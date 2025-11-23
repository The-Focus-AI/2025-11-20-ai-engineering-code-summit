import { getSessions, getSpeakers } from '@/lib/content';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
    const sessions = getSessions();
    return sessions.map((session) => ({
        slug: session.slug,
    }));
}

export default async function SessionPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const sessions = getSessions();
    const session = sessions.find((s) => s.slug === slug);

    // Find matching speaker
    const speakers = getSpeakers();
    const speakerProfile = session?.frontmatter.speaker
        ? speakers.find(s => s.frontmatter.title === session.frontmatter.speaker)
        : null;

    if (!session) {
        return <div>Session not found</div>;
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
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-foreground text-white px-3 py-1 rounded-full font-hand text-sm">
                                {session.day}
                            </span>
                            <span className="font-mono text-xs text-accent uppercase tracking-widest">
                                Session Notes
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold font-hand mb-4">
                            {session.frontmatter.title}
                        </h1>
                        {session.frontmatter.speaker && (
                            <p className="text-xl font-serif text-accent">
                                Speaker:
                                {speakerProfile ? (
                                    <Link href={`/speakers/${speakerProfile.slug}`} className="font-bold hover:underline decoration-wavy decoration-accent ml-1">
                                        {session.frontmatter.speaker}
                                    </Link>
                                ) : (
                                    <span className="font-bold ml-1">{session.frontmatter.speaker}</span>
                                )}
                                {session.frontmatter.company && ` (${session.frontmatter.company})`}
                            </p>
                        )}
                    </header>

                    <MarkdownRenderer source={session.content} />
                </article>
            </div>
        </div>
    );
}
