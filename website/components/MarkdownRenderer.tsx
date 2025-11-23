import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

const components = {
    h1: (props: any) => (
        <h1 className="text-4xl font-bold font-hand mt-8 mb-4 border-b-2 border-accent/20 pb-2" {...props} />
    ),
    h2: (props: any) => (
        <h2 className="text-3xl font-bold font-hand mt-8 mb-4" {...props} />
    ),
    h3: (props: any) => (
        <h3 className="text-2xl font-bold font-hand mt-6 mb-3" {...props} />
    ),
    p: (props: any) => (
        <p className="mb-4 leading-relaxed font-serif text-lg" {...props} />
    ),
    ul: (props: any) => (
        <ul className="list-disc list-inside mb-4 ml-4 font-serif" {...props} />
    ),
    ol: (props: any) => (
        <ol className="list-decimal list-inside mb-4 ml-4 font-serif" {...props} />
    ),
    li: (props: any) => (
        <li className="mb-2" {...props} />
    ),
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-accent pl-4 italic my-6 bg-gray-50 p-4 rounded-r-lg" {...props} />
    ),
    a: (props: any) => (
        <Link className="text-blue-600 hover:underline decoration-wavy" {...props} />
    ),
    code: (props: any) => (
        <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm text-red-600" {...props} />
    ),
    pre: (props: any) => (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 border-2 border-gray-700 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]" {...props} />
    ),
    img: (props: any) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="rounded-lg border-2 border-foreground shadow-md my-6 transform rotate-1 hover:rotate-0 transition-transform" {...props} alt={props.alt || ''} />
    ),
};

export default function MarkdownRenderer({ source }: { source: string }) {
    return (
        <div className="prose prose-lg max-w-none">
            <MDXRemote source={source} components={components} />
        </div>
    );
}
