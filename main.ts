// One-Line Roast: The Gadget You Use Every Day — writes the chosen line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My AirPods ignore the phone in my hand and pair with the laptop two rooms away, like a dog that only loves the neighbors.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
