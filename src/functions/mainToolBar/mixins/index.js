import { dataMixin } from './data'
import { watchMixin } from './watch'
import { computedMixin } from './computed'
import { methodsMixin } from './methods'
import { createdMixin } from './created'
export default [
  dataMixin,
  watchMixin,
  computedMixin,
  methodsMixin,
  createdMixin
]
