import { common } from "./common/sk";
import { registration } from './registration/sk';
import { main } from "./main/sk";
import { confirmation } from './confirmation/sk';

const sk: Record<string, string> = {
    ...common,
    ...registration,
    ...main,
    ...confirmation
}

export default sk;