import store from './store'
import * as actions from './actions'
store.dispatch(actions.bugAdded("bug1"));
store.dispatch(actions.bugAdded("bug2"));

store.dispatch(actions.bugRemoved(1));
store.dispatch(actions.bugAdded("bug3"));
store.dispatch(actions.bugResolved(2))
console.log(store.getState());