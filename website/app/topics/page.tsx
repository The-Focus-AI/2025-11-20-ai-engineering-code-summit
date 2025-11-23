import { getTopics, getSessionsByTopic } from '../../lib/content';
import Link from 'next/link';
import Header from '../../components/Header';

export default function TopicsIndexPage() {
    const topics = getTopics();

    return (
        <div className="min-h-screen bg-[#f8f5f2] font-sans text-[#2c2c2c]">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-12 border-b-2 border-black pb-6">
                    <h1 className="text-5xl font-bold font-handwriting mb-4">Themes & Topics</h1>
                    <p className="text-xl text-gray-600 font-serif">
                        Explore the summit through key themes and emerging patterns.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topics.map((topic) => {
                        const count = getSessionsByTopic(topic).length;
                        return (
                            <Link
                                key={topic}
                                href={`/topics/${encodeURIComponent(topic)}`}
                                className="block group"
                            >
                                <article className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-full flex flex-col justify-between">
                                    <h2 className="text-2xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-2">
                                        {topic}
                                    </h2>
                                    <span className="text-sm text-gray-500 font-mono self-end">
                                        {count} session{count !== 1 ? 's' : ''}
                                    </span>
                                </article>
                            </Link>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
