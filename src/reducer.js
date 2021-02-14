let lastid = 0
function reducer(state = [], action) {
  switch (action.type)
  {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastid,
          description: action.payload.description,
          resolved: false
        }
      ]
    case "bugRemoved":
      return state.filter(bug => bug.id !== action.payload.id)
    default:
      return state
  }
}