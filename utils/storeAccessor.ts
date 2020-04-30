import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Detail from '@/store/detail'

let detailStore: Detail

function initialiseStores(store: Store<any>): void {
  detailStore = getModule(Detail, store)
}

export { initialiseStores, detailStore }
