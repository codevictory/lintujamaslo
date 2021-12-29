import { common } from "./common/en";
import { registration } from './registration/en';
import { main } from "./main/en";
import { confirmation } from './confirmation/en';

const en: Record<string, string> = {
    ...common,
    ...registration,
    ...main,
    ...confirmation
}

export default en;