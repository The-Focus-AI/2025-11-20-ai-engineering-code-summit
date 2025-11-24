import { Article, Speaker } from './types';

export const APP_NAME = "HORIZON REPORT";
export const APP_YEAR = "2025";

export const CONFERENCE_DETAILS = {
  title: "HORIZON 2025",
  location: "The TWA Flight Center, New York",
  date: "October 12-14, 2025",
  summary: "A gathering of minds to declassify the future. Examining the intersection of synthetic intelligence, circular economics, and brutalist infrastructure."
};

export const SPEAKERS: Speaker[] = [
  {
    id: 's1',
    name: 'Dr. Elena Vance',
    role: 'Chief AI Scientist',
    company: 'NeuralFlow',
    bio: 'Pioneer in generative models. Former Bell Labs researcher focused on ethical AI frameworks.',
    imageUrl: 'https://picsum.photos/seed/elena/400/400',
    twitterUrl: '#',
    websiteUrl: '#'
  },
  {
    id: 's2',
    name: 'Marcus Thorne',
    role: 'Urban Futurist',
    company: 'Metropolis One',
    bio: 'Redesigned public spaces in 20 global capitals. Specializes in "living city" adaptations.',
    imageUrl: 'https://picsum.photos/seed/marcus/400/400',
    linkedinUrl: '#'
  },
  {
    id: 's3',
    name: 'Sarah Jenkins',
    role: 'Dir. Sustainability',
    company: 'EcoSystems',
    bio: 'Leading the circular economy implementation standards board. PhD in Material Science.',
    imageUrl: 'https://picsum.photos/seed/sarah/400/400',
    websiteUrl: '#'
  },
  {
    id: 's4',
    name: 'David Chen',
    role: 'VP Engineering',
    company: 'Quantum Leap',
    bio: 'Focused on quantum supremacy in logistics. 15 patents in qubit stabilization.',
    imageUrl: 'https://picsum.photos/seed/david/400/400',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    id: 's5',
    name: 'Robert K. Sterling',
    role: 'Systems Architect',
    company: 'RAND Corp (Legacy)',
    bio: 'Historical advisor on large-scale systems theory and cybernetics.',
    imageUrl: 'https://picsum.photos/seed/robert/400/400'
  }
];

export const ARTICLES: Article[] = [
  // --- LEADERSHIP TRACK ---
  {
    id: 'l1',
    track: 'LEADERSHIP',
    order: 1,
    title: 'The Symbiotic Mind',
    subtitle: 'Strategic alignment of human intuition and machine logic.',
    author: 'Dr. Elena Vance',
    category: 'Cognitive Strategy',
    readTime: '15 min read',
    contributorIds: ['s1', 's5'],
    imageUrl: 'https://picsum.photos/seed/ai_art/1200/600',
    content: `
      The narrative around Artificial Intelligence has long been dominated by the fear of obsolescence. However, the data presented at Horizon 2025 suggests a different trajectory: Symbiosis.

      ### The Cognitive Layer
      We are moving away from "prompt and response" interfaces towards "intent prediction." The next generation of models, dubbed 'Cognitive Layers,' sit between the user and the OS, interpreting broad goals rather than specific commands.

      > "We shouldn't ask if a machine can think like a human. We should ask if a human can think better with a machine." - Dr. Vance

      ### Ethical Frameworks in Real-time
      One of the critical breakthroughs discussed was the implementation of real-time ethical constraints. Rather than post-processing moderation, new architectures embed value-alignment directly into the transformer blocks. This ensures that safety isn't an afterthought, but a fundamental law of the model's physics.
    `
  },
  {
    id: 'l2',
    track: 'LEADERSHIP',
    order: 2,
    title: 'Circular Economy: Profit',
    subtitle: 'Sustainability as a competitive advantage in Q4 2025.',
    author: 'Sarah Jenkins',
    category: 'Economic Policy',
    readTime: '10 min read',
    contributorIds: ['s3', 's2'],
    imageUrl: 'https://picsum.photos/seed/recycle/1200/600',
    content: `
      The "take-make-waste" model is dead. The Horizon 2025 consensus is clear: circularity is the only path to long-term profitability.

      ### Design for Disassembly
      Products are being designed from the ground up to be taken apart. We saw phones held together by heat-dissolving adhesives and cars with modular chassis. This reduces recycling costs and allows for high-yield material recovery.

      ### Product as a Service
      Companies are shifting from selling lightbulbs to selling "lumens." By retaining ownership of the hardware, manufacturers are incentivized to build durable, repairable products rather than planned obsolescence.
    `
  },
  {
    id: 'l3',
    track: 'LEADERSHIP',
    order: 3,
    title: 'Algorithmic Governance',
    subtitle: 'Decentralized autonomous organizations in public sectors.',
    author: 'Robert K. Sterling',
    category: 'Governance',
    readTime: '18 min read',
    contributorIds: ['s5', 's1'],
    imageUrl: 'https://picsum.photos/seed/governance/1200/600',
    content: `
      As bureaucracy becomes increasingly digitized, the question arises: can code be law?

      ### The Transparent Ledger
      New case studies from Estonia and Singapore show that placing municipal budgets on public blockchains reduces corruption by 90%. However, the 'human in the loop' remains essential for edge cases.

      ### Automated Compliance
      We explored systems where tax code is self-executing. Corporations don't file taxes; their transaction layers remit them automatically in real-time.
    `
  },
  {
    id: 'l4',
    track: 'LEADERSHIP',
    order: 4,
    title: 'The 30-Hour Work Week',
    subtitle: 'Productivity metrics in the age of automated assistance.',
    author: 'Marcus Thorne',
    category: 'Labor Economics',
    readTime: '8 min read',
    contributorIds: ['s2', 's3'],
    imageUrl: 'https://picsum.photos/seed/work/1200/600',
    content: `
      With AI handling 40% of cognitive grunt work, labor hours are shifting.

      ### Output over Input
      The report suggests a hard pivot from hours-worked to milestones-achieved. When a report that took 10 hours now takes 10 minutes, the 40-hour structure collapses.

      ### Re-skilling Pipelines
      Companies are now universities. Continuous education is part of the job description, taking up 20% of the work week.
    `
  },

  // --- ENGINEERING TRACK ---
  {
    id: 'e1',
    track: 'ENGINEERING',
    order: 1,
    title: 'Quantum Logistics',
    subtitle: 'Solving the unsolvable supply chain knots via qubit annealing.',
    author: 'David Chen',
    category: 'Advanced Compute',
    readTime: '20 min read',
    contributorIds: ['s4', 's5'],
    imageUrl: 'https://picsum.photos/seed/quantum/1200/600',
    content: `
      Supply chains are complex dynamical systems. Classical computers struggle with the "Traveling Salesman Problem" once variables exceed a certain threshold. Quantum computing changes the game.

      ### Optimization at Scale
      Horizon 2025 revealed the first commercially viable quantum annealing process for global shipping routes. By processing millions of variables—weather, fuel costs, geopolitical stability—simultaneously, companies can reduce carbon footprints by 20% merely through smarter routing.

      ### Real-time Inventory
      The delay between a purchase and inventory update is vanishing. Quantum sensors allow for molecular-level tracking of sensitive goods (like vaccines) ensuring integrity from factory to patient.
    `
  },
  {
    id: 'e2',
    track: 'ENGINEERING',
    order: 2,
    title: 'Cities That Breathe',
    subtitle: 'Bio-material infrastructure adaptation specs.',
    author: 'Marcus Thorne',
    category: 'Civil Engineering',
    readTime: '12 min read',
    contributorIds: ['s2', 's3'],
    imageUrl: 'https://picsum.photos/seed/city_green/1200/600',
    content: `
      Concrete is out. Bio-materials are in. The "Living City" concept is no longer sci-fi; it's a construction standard being adopted in Singapore, Copenhagen, and now, showcased here.

      ### Sponge Cities
      The core concept discussed was the "Sponge City" architecture. Instead of funneling rainwater into drains, permeable pavements and rooftop gardens absorb, filter, and store water. This reduces flood risks by 40% and lowers urban temperatures by 3-5 degrees Celsius.

      ### Adaptive Facades
      Buildings are becoming organisms. We looked at new algae-filled glass panels that generate energy via photosynthesis while shading the interior. As the sun moves, the algae density shifts, optimizing light and heat autonomously.
    `
  },
  {
    id: 'e3',
    track: 'ENGINEERING',
    order: 3,
    title: 'Orbital Manufacturing',
    subtitle: 'Zero-G fabrication of fiber optics and organs.',
    author: 'David Chen',
    category: 'Space Tech',
    readTime: '25 min read',
    contributorIds: ['s4', 's1'],
    imageUrl: 'https://picsum.photos/seed/space/1200/600',
    content: `
      Why build on Earth when you can build in orbit? Gravity is a manufacturing defect for certain high-performance materials.

      ### ZBLAN Fiber
      We reviewed the first batches of ZBLAN optical fiber returned from the ISS. Without gravity-induced crystallization, these fibers are 100x clearer than glass, promising a revolution in transatlantic data cables.

      ### Bio-Printing
      Printing human tissue requires support structures on Earth. In space, surface tension dominates, allowing for the printing of complex vascular systems without scaffolding.
    `
  },
  {
    id: 'e4',
    track: 'ENGINEERING',
    order: 4,
    title: 'Solid State Batteries',
    subtitle: 'The death of the combustion engine is finally here.',
    author: 'Sarah Jenkins',
    category: 'Energy',
    readTime: '14 min read',
    contributorIds: ['s3', 's4'],
    imageUrl: 'https://picsum.photos/seed/battery/1200/600',
    content: `
      Lithium-ion had a good run. The solid-state revolution has arrived, doubling range and halving charging times.

      ### Ceramic Electrolytes
      By replacing the liquid electrolyte with a solid ceramic, we eliminate the fire risk. This allows for denser packing and faster electron flow.

      ### The 1000-Mile Range
      Prototype vehicles shown at the conference demonstrated a true 1000-mile range on a single charge, effectively removing "range anxiety" as a consumer hurdle.
    `
  }
];