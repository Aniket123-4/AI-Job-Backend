import "dotenv/config";

import { askAI } from "./services/ai/ai.service";

const response = await askAI("Say hello in one sentence.");

console.log(response);