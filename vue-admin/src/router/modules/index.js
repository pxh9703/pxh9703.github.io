import { staticRouter, errorRouter} from '@/router/modules/staticRoutes'
import { IndexRouter } from '@/router/modules/pageRoutes'

export default [...staticRouter, ...errorRouter, ...IndexRouter,]
