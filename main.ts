import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU =
  "the breakpoint holds still\nstack trace folds back on itself\nmy name at the top";
const ENTRY_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, HAIKU);
