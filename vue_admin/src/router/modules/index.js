import { statRouter, errorRouter } from "@/router/modules/staticRoutes";
import { IndexRouter } from "@/router/modules/pageRoutes";
export default [...statRouter, ...IndexRouter, ...errorRouter];
