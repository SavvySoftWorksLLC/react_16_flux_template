import dispatcher from "../Dispatcher"
import {EventEmitter} from "events"

class AppStore extends EventEmitter {
  setup() {
    console.log('BUTTONS!')
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
  emitChange() {
    this.emit(CHANGE_EVENT)
  }
  handleActions(payload) {
    switch (payload.actionType) {
      default:
        break
    }
  }
}

const appStore = new AppStore()
dispatcher.register(appStore.handleActions.bind(appStore))
export default appStore
