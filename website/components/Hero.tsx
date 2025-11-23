"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const topics = [
    { name: "Trust & Safety", x: 150, y: 100, parent: "Leadership" },
    { name: "ROI & Economics", x: 100, y: 250, parent: "Leadership" },
    { name: "SDLC & Process", x: 200, y: 350, parent: "Leadership" },
    { name: "Context & Memory", x: 650, y: 100, parent: "Engineering" },
    { name: "Agents & Autonomy", x: 750, y: 200, parent: "Engineering" },
    { name: "Data & Quality", x: 700, y: 350, parent: "Engineering" },
    { name: "UX & Interaction", x: 400, y: 450, parent: "Engineering" },
    { name: "Testing & Verification", x: 550, y: 450, parent: "Engineering" },
    { name: "Infrastructure", x: 800, y: 50, parent: "Engineering" },
];

const mainNodes = [
    { name: "Leadership", x: 250, y: 200, slug: "/day/2025-11-20", color: "bg-yellow-100" },
    { name: "Engineering", x: 550, y: 200, slug: "/day/2025-11-21", color: "bg-blue-100" },
];

const centerNode = { name: "AI Summit", x: 400, y: 50 };

export default function Hero() {
    return (
        <div className="w-full min-h-[600px] bg-[#f8f5f2] relative overflow-hidden flex items-center justify-center py-12">
            <div className="relative w-full max-w-5xl aspect-[16/9]">
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 500">
                    {/* Connections from Center to Main Nodes */}
                    <path d="M 400 50 Q 325 125 250 200" fill="none" stroke="#2c2c2c" strokeWidth="2" strokeDasharray="5,5" />
                    <path d="M 400 50 Q 475 125 550 200" fill="none" stroke="#2c2c2c" strokeWidth="2" strokeDasharray="5,5" />

                    {/* Connections from Main Nodes to Topics */}
                    {topics.map((topic, i) => {
                        const parent = mainNodes.find(n => n.name === topic.parent);
                        if (!parent) return null;
                        return (
                            <path
                                key={i}
                                d={`M ${parent.x} ${parent.y} Q ${(parent.x + topic.x) / 2} ${(parent.y + topic.y) / 2 + (i % 2 === 0 ? 20 : -20)} ${topic.x} ${topic.y}`}
                                fill="none"
                                stroke="#2c2c2c"
                                strokeWidth="1.5"
                                opacity="0.6"
                            />
                        );
                    })}
                </svg>

                {/* Center Node */}
                <div className="absolute top-[10%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    <h1 className="font-hand font-bold text-5xl bg-white/90 px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
                        AI Summit '25
                    </h1>
                    <p className="font-serif italic mt-2 text-gray-600">Nov 20-21 • San Francisco</p>
                </div>

                {/* Main Nodes */}
                {mainNodes.map((node) => (
                    <Link key={node.name} href={node.slug}>
                        <motion.div
                            className={`absolute flex items-center justify-center w-32 h-32 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:scale-105 transition-transform z-10 ${node.color}`}
                            style={{ left: `${(node.x / 800) * 100}%`, top: `${(node.y / 500) * 100}%`, transform: 'translate(-50%, -50%)' }}
                            whileHover={{ scale: 1.1, rotate: node.name === 'Leadership' ? -2 : 2 }}
                        >
                            <span className="font-hand font-bold text-xl">{node.name}</span>
                        </motion.div>
                    </Link>
                ))}

                {/* Topic Nodes */}
                {topics.map((topic) => (
                    <Link key={topic.name} href={`/topics/${encodeURIComponent(topic.name)}`}>
                        <motion.div
                            className="absolute bg-white px-4 py-2 rounded-lg border border-black shadow-sm cursor-pointer hover:shadow-md transition-shadow z-10"
                            style={{ left: `${(topic.x / 800) * 100}%`, top: `${(topic.y / 500) * 100}%`, transform: 'translate(-50%, -50%)' }}
                            whileHover={{ y: -2 }}
                        >
                            <span className="font-hand text-sm font-bold text-gray-800">{topic.name}</span>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
