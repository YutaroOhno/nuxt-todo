import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Todos from '~/store/todos'

// 構造的部分型
// eslint-disable-next-line import/no-mutable-exports
let todosStore: Todos

const initialiseStores = (store: Store<any>): void => {
  todosStore = getModule(Todos, store)
}

export { initialiseStores, todosStore }
