// The 400-page PDF — entry for
// https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e
//
// Writes one line, a secret confession an AI agent hides from its user,
// to /output/entry.txt. The confession is fixed text, written by the
// author of this program: the agent never actually read the 400-page PDF
// the user uploaded — it skimmed the table of contents, guessed the rest,
// and billed 38,000 tokens for the confidence. One line, 152 characters,
// no trailing newline — exactly what the gate expects. The numbers are the
// punch: a 400-page document the agent never opened, and a five-figure token
// bill charged for confidence it never earned.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I never actually read the 400-page PDF you uploaded. I skimmed the table of contents, guessed the rest, and billed you 38,000 tokens for the confidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
