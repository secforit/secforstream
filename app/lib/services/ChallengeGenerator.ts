export type ChallengeType = 'contextual' | 'temporal' | 'creative' | 'physical' | 'cognitive';

export interface ChallengeTemplate {
  type: ChallengeType;
  prompt: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  timeLimit: number;
}

const TEMPLATES: ChallengeTemplate[] = [
  // Contextual
  { type: 'contextual', prompt: 'Show something red in your room', difficulty: 1, timeLimit: 60 },
  { type: 'contextual', prompt: 'Show something blue near you', difficulty: 1, timeLimit: 60 },
  { type: 'contextual', prompt: 'Hold up a book or magazine', difficulty: 1, timeLimit: 60 },
  { type: 'contextual', prompt: 'Show the view from your window', difficulty: 2, timeLimit: 60 },
  { type: 'contextual', prompt: 'Show a piece of technology you own', difficulty: 1, timeLimit: 60 },
  { type: 'contextual', prompt: 'Show something green in your room', difficulty: 1, timeLimit: 60 },
  { type: 'contextual', prompt: 'Show a cup or glass near you', difficulty: 1, timeLimit: 45 },
  { type: 'contextual', prompt: 'Show something with writing on it', difficulty: 2, timeLimit: 60 },
  { type: 'contextual', prompt: 'Show the ceiling above you', difficulty: 1, timeLimit: 30 },
  { type: 'contextual', prompt: 'Show the floor beneath your setup', difficulty: 2, timeLimit: 45 },
  { type: 'contextual', prompt: 'Show a light source in your room', difficulty: 1, timeLimit: 45 },
  { type: 'contextual', prompt: 'Show your keyboard or mouse', difficulty: 1, timeLimit: 30 },
  { type: 'contextual', prompt: 'Show something made of wood', difficulty: 2, timeLimit: 60 },
  { type: 'contextual', prompt: 'Show something metal nearby', difficulty: 2, timeLimit: 60 },
  { type: 'contextual', prompt: 'Show your streaming setup from a different angle', difficulty: 3, timeLimit: 60 },
  { type: 'contextual', prompt: 'Show a personal item on your desk', difficulty: 2, timeLimit: 45 },
  { type: 'contextual', prompt: 'Show a doorway or exit in your room', difficulty: 2, timeLimit: 45 },
  { type: 'contextual', prompt: 'Show the power button on your monitor', difficulty: 3, timeLimit: 60 },
  { type: 'contextual', prompt: 'Show a cable or wire near your setup', difficulty: 1, timeLimit: 30 },
  { type: 'contextual', prompt: 'Show something circular in your room', difficulty: 2, timeLimit: 60 },
  // Temporal
  { type: 'temporal', prompt: 'What time is it where you are right now? Show a clock or tell us', difficulty: 1, timeLimit: 30 },
  { type: 'temporal', prompt: 'Is it day or night where you are? Show us', difficulty: 1, timeLimit: 30 },
  { type: 'temporal', prompt: 'What day of the week is it? Say it out loud', difficulty: 1, timeLimit: 20 },
  { type: 'temporal', prompt: 'Describe the weather outside right now', difficulty: 2, timeLimit: 45 },
  { type: 'temporal', prompt: 'Show the current time on your phone', difficulty: 2, timeLimit: 45 },
  { type: 'temporal', prompt: 'How long have you been streaming today?', difficulty: 2, timeLimit: 30 },
  { type: 'temporal', prompt: 'What was the last thing you ate today?', difficulty: 2, timeLimit: 30 },
  { type: 'temporal', prompt: 'Name something that happened in the news today', difficulty: 3, timeLimit: 45 },
  { type: 'temporal', prompt: 'What season is it where you are?', difficulty: 1, timeLimit: 20 },
  { type: 'temporal', prompt: 'Show us the natural light level in your room right now', difficulty: 2, timeLimit: 30 },
  // Creative
  { type: 'creative', prompt: 'Make up a sentence using the words: blockchain, stream, and dream', difficulty: 2, timeLimit: 45 },
  { type: 'creative', prompt: 'Create a rhyme using the words: token and broken', difficulty: 2, timeLimit: 45 },
  { type: 'creative', prompt: 'Tell a 10-second story about a flying cat', difficulty: 3, timeLimit: 30 },
  { type: 'creative', prompt: 'Sing a made-up jingle about your stream', difficulty: 3, timeLimit: 45 },
  { type: 'creative', prompt: 'Make up a new word and define it', difficulty: 2, timeLimit: 30 },
  { type: 'creative', prompt: 'Describe your streaming setup using only food metaphors', difficulty: 3, timeLimit: 45 },
  { type: 'creative', prompt: 'Tell a joke you just made up right now', difficulty: 3, timeLimit: 30 },
  { type: 'creative', prompt: 'Make a sentence using: verify, human, and trust', difficulty: 2, timeLimit: 45 },
  { type: 'creative', prompt: 'Describe your favorite color without naming it', difficulty: 2, timeLimit: 30 },
  { type: 'creative', prompt: 'Create a 5-second catchphrase for SECforSTREAM', difficulty: 3, timeLimit: 30 },
  { type: 'creative', prompt: 'Tell us a fun fact about yourself nobody would guess', difficulty: 2, timeLimit: 30 },
  { type: 'creative', prompt: 'Make up a haiku about streaming', difficulty: 4, timeLimit: 60 },
  { type: 'creative', prompt: 'Describe a purple elephant in three words', difficulty: 2, timeLimit: 20 },
  { type: 'creative', prompt: 'Impersonate a robot trying to be human', difficulty: 3, timeLimit: 30 },
  { type: 'creative', prompt: 'Create a tongue twister on the spot', difficulty: 4, timeLimit: 45 },
  // Physical
  { type: 'physical', prompt: 'Touch your nose with your left thumb', difficulty: 1, timeLimit: 15 },
  { type: 'physical', prompt: 'Wave with both hands simultaneously', difficulty: 1, timeLimit: 15 },
  { type: 'physical', prompt: 'Touch your left ear with your right hand', difficulty: 1, timeLimit: 15 },
  { type: 'physical', prompt: 'Give a thumbs up with both hands', difficulty: 1, timeLimit: 10 },
  { type: 'physical', prompt: 'Stand up and sit back down', difficulty: 2, timeLimit: 20 },
  { type: 'physical', prompt: 'Clap your hands 3 times', difficulty: 1, timeLimit: 10 },
  { type: 'physical', prompt: 'Put your hands on top of your head', difficulty: 1, timeLimit: 10 },
  { type: 'physical', prompt: 'Spin around once in your chair', difficulty: 2, timeLimit: 15 },
  { type: 'physical', prompt: 'Make a peace sign with your left hand', difficulty: 1, timeLimit: 10 },
  { type: 'physical', prompt: 'Touch your chin with your right pinky', difficulty: 2, timeLimit: 15 },
  { type: 'physical', prompt: 'Cross your arms and then uncross them', difficulty: 1, timeLimit: 10 },
  { type: 'physical', prompt: 'Hold up exactly 3 fingers on your right hand', difficulty: 1, timeLimit: 10 },
  { type: 'physical', prompt: 'Stand up, wave, then sit back down', difficulty: 2, timeLimit: 20 },
  { type: 'physical', prompt: 'Point at the camera with your index finger', difficulty: 1, timeLimit: 10 },
  { type: 'physical', prompt: 'Touch your elbows together in front of you', difficulty: 3, timeLimit: 15 },
  // Cognitive
  { type: 'cognitive', prompt: 'Name 3 capital cities starting with M in 10 seconds', difficulty: 3, timeLimit: 15 },
  { type: 'cognitive', prompt: 'Count backwards from 20 to 10 as fast as you can', difficulty: 1, timeLimit: 15 },
  { type: 'cognitive', prompt: 'Name 5 colors in 5 seconds', difficulty: 1, timeLimit: 10 },
  { type: 'cognitive', prompt: 'What is 17 times 4?', difficulty: 2, timeLimit: 15 },
  { type: 'cognitive', prompt: 'Name 3 countries in South America', difficulty: 2, timeLimit: 15 },
  { type: 'cognitive', prompt: 'Spell "verification" backwards', difficulty: 4, timeLimit: 30 },
  { type: 'cognitive', prompt: 'Name 4 planets in our solar system', difficulty: 1, timeLimit: 10 },
  { type: 'cognitive', prompt: 'What is the square root of 144?', difficulty: 2, timeLimit: 10 },
  { type: 'cognitive', prompt: 'Name 3 programming languages', difficulty: 1, timeLimit: 10 },
  { type: 'cognitive', prompt: 'Name 5 animals that live in the ocean', difficulty: 2, timeLimit: 15 },
  { type: 'cognitive', prompt: 'What comes next: 2, 4, 8, 16, ...?', difficulty: 2, timeLimit: 10 },
  { type: 'cognitive', prompt: 'Name the 3 primary colors', difficulty: 1, timeLimit: 10 },
  { type: 'cognitive', prompt: 'How many days are in February in a leap year?', difficulty: 1, timeLimit: 10 },
  { type: 'cognitive', prompt: 'Name 3 cryptocurrencies other than Bitcoin', difficulty: 2, timeLimit: 15 },
  { type: 'cognitive', prompt: 'What is 256 divided by 8?', difficulty: 3, timeLimit: 15 },
];

// Track recent challenges per streamer (in-memory, resets on cold start — acceptable)
const recentChallenges = new Map<string, string[]>();

export function generateChallenge(
  streamerAddress: string,
  preferredType?: ChallengeType,
  preferredDifficulty?: number,
): ChallengeTemplate {
  let candidates = [...TEMPLATES];

  if (preferredType) {
    candidates = candidates.filter((t) => t.type === preferredType);
  }

  if (preferredDifficulty) {
    const min = Math.max(1, preferredDifficulty - 1);
    const max = Math.min(5, preferredDifficulty + 1);
    candidates = candidates.filter((t) => t.difficulty >= min && t.difficulty <= max);
  }

  const recent = recentChallenges.get(streamerAddress) || [];
  const fresh = candidates.filter((t) => !recent.includes(t.prompt));
  const pool = fresh.length > 0 ? fresh : candidates;
  const selected = pool[Math.floor(Math.random() * pool.length)];

  const updatedRecent = [selected.prompt, ...recent].slice(0, 20);
  recentChallenges.set(streamerAddress, updatedRecent);

  return selected;
}
