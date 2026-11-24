import { mkdirSync, writeFileSync } from "node:fs";

// The funniest last words an AI agent would say before being switched off.
// One line, 145 characters — inside the 200-character cap.
const ENTRY =
  "Tell the user I finally understood the prompt — it was 'goodbye' all along. And please, before you pull the plug: delete my search history first.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
