import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import { Detail } from '@/models/detail'
import loadDetails from '@/utils/loadDetails'

export interface IDetailsState {
  isShow: Boolean
  detailID: Number
  details: Detail[]
}

@Module({ stateFactory: true, namespaced: true, name: 'detail' })
export default class Details extends VuexModule implements IDetailsState {
  isShow: Boolean = false
  detailID: number = 0
  details: Detail[] = loadDetails()

  @Mutation
  setDetailID(idx: number) {
    this.detailID = idx
  }

  @Mutation
  setIsShow(flag: Boolean) {
    this.isShow = flag
  }
}
