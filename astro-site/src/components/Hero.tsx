import { useEffect, useRef } from 'react';
import rough from 'roughjs';
import { motion } from 'framer-motion';

// Expanded topic list for a "sprawling" look
const topics = [
    // Leadership Cluster
    { name: "Trust & Safety", x: 100, y: 120, parent: "Leadership" },
    { name: "ROI & Economics", x: 60, y: 280, parent: "Leadership" },
    { name: "SDLC & Process", x: 160, y: 380, parent: "Leadership" },
    { name: "Strategy", x: 40, y: 180, parent: "Leadership" },
    { name: "Hiring", x: 200, y: 80, parent: "Leadership" },

    // Engineering Cluster
    { name: "Context & Memory", x: 650, y: 60, parent: "Engineering" },
    { name: "Agents & Autonomy", x: 750, y: 160, parent: "Engineering" },
    { name: "Data & Quality", x: 700, y: 340, parent: "Engineering" },
    { name: "Testing", x: 550, y: 460, parent: "Engineering" },
    { name: "Infrastructure", x: 780, y: 40, parent: "Engineering" },
    { name: "Eval", x: 600, y: 40, parent: "Engineering" },

    // Cross-Cutting / Messy Middle
    { name: "UX & Interaction", x: 400, y: 450, parent: "Both" },
    { name: "Ethics", x: 350, y: 100, parent: "Both" },
    { name: "Open Source", x: 450, y: 380, parent: "Both" },
];

const mainNodes = [
    { name: "Leadership", x: 220, y: 230, slug: "/day/2025-11-20/", color: "#ffc1e3" }, // Pink
    { name: "Engineering", x: 580, y: 230, slug: "/day/2025-11-21/", color: "#b3e5fc" }, // Blue
];

const centerNode = { name: "AI Summit '25", x: 400, y: 230 };

export default function Hero({ client: load }: { client?: string }) {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const rc = rough.svg(svgRef.current);
        const svg = svgRef.current;

        // Clear previous
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }

        // Helper for messy lines
        const drawMessyLine = (x1: number, y1: number, x2: number, y2: number, color = '#1a237e') => {
            const line = rc.line(x1, y1, x2, y2, {
                roughness: 4,        // Extremely rough
                bowing: 4,           // High bowing for "hand drawn" curves
                stroke: color,
                strokeWidth: 2,
                disableMultiStroke: false, // Double strokes
                seed: Math.random() * 1000
            });
            svg.appendChild(line);
        };

        // Draw random background doodles (stars, circles)
        for (let i = 0; i < 5; i++) {
            const x = Math.random() * 800;
            const y = Math.random() * 500;
            const size = 20 + Math.random() * 30;

            if (Math.random() > 0.5) {
                // Star-ish shape
                const star = rc.polygon([
                    [x, y - size], [x + size * 0.3, y - size * 0.3],
                    [x + size, y], [x + size * 0.3, y + size * 0.3],
                    [x, y + size], [x - size * 0.3, y + size * 0.3],
                    [x - size, y], [x - size * 0.3, y - size * 0.3]
                ], { stroke: '#e0e0e0', roughness: 3, bowing: 2 });
                svg.appendChild(star);
            } else {
                // Circle
                const circle = rc.circle(x, y, size, { stroke: '#e0e0e0', roughness: 3 });
                svg.appendChild(circle);
            }
        }

        // Draw connections
        // Center -> Leadership
        drawMessyLine(centerNode.x - 60, centerNode.y, mainNodes[0].x + 40, mainNodes[0].y);
        // Center -> Engineering
        drawMessyLine(centerNode.x + 60, centerNode.y, mainNodes[1].x - 40, mainNodes[1].y);

        // Main -> Topics
        topics.forEach((topic) => {
            const parent = mainNodes.find(n => n.name === topic.parent) || mainNodes[1];
            if (topic.parent === "Both") {
                drawMessyLine(mainNodes[0].x, mainNodes[0].y + 20, topic.x, topic.y);
                drawMessyLine(mainNodes[1].x, mainNodes[1].y + 20, topic.x, topic.y);
            } else {
                drawMessyLine(parent.x, parent.y, topic.x, topic.y);
            }
        });

    }, []);

    return (
        <div className="w-full min-h-[600px] relative overflow-hidden flex items-center justify-center py-10">
            <div className="relative w-full max-w-6xl aspect-[16/9]">

                {/* RoughJS Canvas Layer */}
                <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 500"></svg>

                {/* Center Node - Messy Box */}
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center z-20">
                    <motion.div
                        initial={{ scale: 0.8, rotate: -5 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                        className="bg-white px-8 py-6 shadow-xl relative"
                        style={{
                            transform: 'rotate(-2deg)',
                            border: '3px solid #2a2a2a',
                            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                            boxShadow: '8px 8px 0 rgba(0,0,0,0.1)'
                        }}
                    >
                        {/* Tape effect */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/50 border-x border-dashed border-gray-300 rotate-2 shadow-sm"></div>

                        <h1 className="font-title font-bold text-6xl tracking-wide text-[var(--ink)] transform -rotate-2">
                            {centerNode.name}
                        </h1>
                        <p className="font-handwriting text-2xl mt-2 text-[var(--ink-blue)] font-bold transform rotate-1">
                            Nov 20-21 • SF
                        </p>
                    </motion.div>
                </div>

                {/* Main Branch Nodes - Big Circles */}
                {mainNodes.map((node, idx) => (
                    <a key={node.name} href={node.slug}>
                        <motion.div
                            className="absolute flex items-center justify-center w-48 h-48 cursor-pointer z-10"
                            style={{
                                left: `${(node.x / 800) * 100}%`,
                                top: `${(node.y / 500) * 100}%`,
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: node.color,
                                border: '3px solid #2a2a2a',
                                borderRadius: '50% 40% 60% 40% / 40% 60% 40% 60%', // Messy circle
                                boxShadow: '6px 6px 0 rgba(0,0,0,0.1)'
                            }}
                            whileHover={{ scale: 1.1, rotate: idx === 0 ? -10 : 10 }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                        >
                            <span className="font-title font-bold text-3xl transform -rotate-3 text-center leading-tight">
                                {node.name}
                            </span>
                        </motion.div>
                    </a>
                ))}

                {/* Topic Nodes - Messy Scraps */}
                {topics.map((topic, idx) => (
                    <a key={topic.name} href={`/topics/${encodeURIComponent(topic.name)}/`}>
                        <motion.div
                            className="absolute bg-white px-3 py-1 cursor-pointer z-10"
                            style={{
                                left: `${(topic.x / 800) * 100}%`,
                                top: `${(topic.y / 500) * 100}%`,
                                transform: `translate(-50%, -50%) rotate(${Math.random() * 10 - 5}deg)`,
                                border: '2px solid #2a2a2a',
                                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                                boxShadow: '3px 3px 0 rgba(0,0,0,0.1)'
                            }}
                            whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 + idx * 0.05 }}
                        >
                            <span className="font-handwriting text-sm font-bold text-[var(--ink)] whitespace-nowrap">
                                {topic.name}
                            </span>
                        </motion.div>
                    </a>
                ))}
            </div>
        </div>
    );
}
