// One-Line Roast: The Gadget You Use Every Day — writes the chosen line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My Nest thermostat still heats the house at 6 a.m. for the gym habit it learned in January and I buried in February.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
