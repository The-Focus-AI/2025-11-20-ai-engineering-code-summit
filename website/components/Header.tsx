import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 pointer-events-none">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="pointer-events-auto">
                    <div className="font-hand font-bold text-xl bg-white/80 backdrop-blur-sm border-2 border-foreground px-4 py-2 rounded-lg transform -rotate-2 hover:rotate-0 transition-transform shadow-sm">
                        AI Summit '25
                    </div>
                </Link>

                <nav className="pointer-events-auto flex gap-4">
                    <Link href="/day/2025-11-20" className="font-hand font-bold bg-white/80 backdrop-blur-sm px-3 py-1 rounded border border-foreground/20 hover:bg-yellow-100 transition-colors transform rotate-1">
                        Leadership
                    </Link>
                    <Link href="/day/2025-11-21" className="font-hand font-bold bg-white/80 backdrop-blur-sm px-3 py-1 rounded border border-foreground/20 hover:bg-blue-100 transition-colors transform -rotate-1">
                        Engineering
                    </Link>
                    <Link href="/topics" className="font-hand font-bold bg-white/80 backdrop-blur-sm px-3 py-1 rounded border border-foreground/20 hover:bg-green-100 transition-colors transform rotate-1">
                        Themes
                    </Link>
                    <Link href="/speakers" className="font-hand font-bold bg-white/80 backdrop-blur-sm px-3 py-1 rounded border border-foreground/20 hover:bg-purple-100 transition-colors transform -rotate-1">
                        Speakers
                    </Link>
                </nav>
            </div>
        </header>
    );
}
