import { common } from "./common/fi";
import { registration } from "./registration/fi";
import { main } from "./main/fi";
import { confirmation } from './confirmation/fi';

const fi: Record<string, string> = {
    ...common,
    ...registration,
    ...main,
    ...confirmation
}

export default fi;