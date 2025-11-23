import { getSessionsByTopic, getTopics, Session } from '../../../lib/content';
import Link from 'next/link';
import Header from '../../../components/Header';

export async function generateStaticParams() {
    const topics = getTopics();
    return topics.map((topic) => ({
        slug: topic,
    }));
}

export default async function TopicPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const topic = params.slug;
    const sessions: Session[] = getSessionsByTopic(topic);

    return (
        <div className="min-h-screen bg-[#f8f5f2] font-sans text-[#2c2c2c]">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-12 border-b-2 border-black pb-6">
                    <h1 className="text-5xl font-bold font-handwriting mb-4">{topic}</h1>
                    <p className="text-xl text-gray-600 font-serif">
                        {sessions.length} session{sessions.length !== 1 ? 's' : ''} exploring this theme.
                    </p>
                </div>

                <div className="grid gap-8">
                    {sessions.map((session: Session) => (
                        <Link
                            key={session.slug}
                            href={`/sessions/${session.slug}`}
                            className="block group"
                        >
                            <article className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="inline-block bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
                                        {session.track || 'General'}
                                    </span>
                                    <span className="text-sm text-gray-500 font-mono">
                                        {session.frontmatter.time}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-2">
                                    {session.frontmatter.title}
                                </h2>

                                <div className="flex items-center gap-2 text-gray-600 mb-4 font-serif italic">
                                    <span>{session.frontmatter.speaker}</span>
                                    {session.frontmatter.company && (
                                        <>
                                            <span>•</span>
                                            <span>{session.frontmatter.company}</span>
                                        </>
                                    )}
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {session.frontmatter.topics?.map((t: string) => (
                                        <span
                                            key={t}
                                            className="text-xs border border-gray-300 px-2 py-1 rounded-full bg-gray-50 text-gray-600"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
