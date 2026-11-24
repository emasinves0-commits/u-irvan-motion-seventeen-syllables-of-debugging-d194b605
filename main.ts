import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU = [
  "three a.m. cursor—",
  "blinking where the error was.",
  "the error moved in",
].join("\n");

// Syllables: 5 / 7 / 5 (three-a-m-cur-sor / blink-ing-where-the-er-ror-was / the-er-ror-moved-in)
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, HAIKU);
