import { common } from "./common/en";
import { registration } from './registration/en';
import { main } from "./main/en";

const en: Record<string, string> = {
    ...common,
    ...registration,
    ...main
}

export default en;