import { getSessions } from '@/lib/content';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
    // Hardcoded days based on conference dates
    return [
        { date: '2025-11-20' },
        { date: '2025-11-21' },
    ];
}

export default async function DayPage({ params }: { params: Promise<{ date: string }> }) {
    const { date } = await params;
    const sessions = getSessions().filter(s => s.day === date);

    const dayTitle = date === '2025-11-20' ? 'Day 1: AI Leadership' : 'Day 2: AI Engineering';

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-6xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-foreground mb-8 font-hand group">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Garden
                </Link>

                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-hand mb-4">{dayTitle}</h1>
                    <p className="font-serif text-xl text-accent">{date}</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sessions.map((session) => (
                        <Link key={session.slug} href={`/sessions/${session.slug}`} className="group">
                            <article className="h-full border-2 border-foreground p-6 rounded-lg bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-y-1 cursor-pointer flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-mono text-xs text-accent uppercase tracking-widest">
                                        {session.frontmatter.time || "Session"}
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold font-hand mb-2 group-hover:text-blue-600">
                                    {session.frontmatter.title}
                                </h2>

                                {session.frontmatter.speaker && (
                                    <p className="font-serif text-sm text-accent mb-4">
                                        with <span className="font-bold">{session.frontmatter.speaker}</span>
                                    </p>
                                )}

                                <div className="mt-auto text-right font-hand text-sm text-blue-600 group-hover:translate-x-1 transition-transform">
                                    View Notes →
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
