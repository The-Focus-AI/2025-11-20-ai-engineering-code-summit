const { getTopics, getSessionsByTopic, getSessions } = require('./lib/content.ts');

console.log('=== DEBUGGING TOPIC MATCHING ===\n');

const topics = getTopics();
console.log('All topics from getTopics():');
console.log(topics);
console.log('\n');

const testTopic = topics[0]; // Get first topic
console.log(`Testing with first topic: "${testTopic}"`);
console.log(`Topic type: ${typeof testTopic}`);
console.log(`Topic length: ${testTopic.length}`);
console.log('Topic char codes:', [...testTopic].map(c => c.charCodeAt(0)));
console.log('\n');

const sessions = getSessions();
console.log(`Total sessions: ${sessions.length}`);
console.log('\n');

const matchingSessions = getSessionsByTopic(testTopic);
console.log(`Sessions for "${testTopic}": ${matchingSessions.length}`);
console.log('\n');

// Check first few sessions' topics
console.log('First 3 sessions topics:');
sessions.slice(0, 3).forEach(s => {
    console.log(`  - ${s.frontmatter.title}`);
    console.log(`    topics: ${JSON.stringify(s.frontmatter.topics)}`);
    if (s.frontmatter.topics) {
        s.frontmatter.topics.forEach(t => {
            console.log(`      - "${t}" (length: ${t.length}, matches: ${t === testTopic})`);
        });
    }
});
