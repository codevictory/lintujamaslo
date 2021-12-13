import { common } from "./common/fi";
import { registration } from './registration/fi';

const fi: Record<string, string> = {
    ...common,
    ...registration
}

export default fi;