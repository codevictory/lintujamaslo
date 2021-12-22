import { common } from "./common/fi";
import { registration } from "./registration/fi";
import { main } from "./main/fi";

const fi: Record<string, string> = {
    ...common,
    ...registration,
    ...main
}

export default fi;