

const reducer=(state =initial, action) =>{
  switch (action.type) {
    case "INCREASE_COUNT":
      return { ...state, count: state.count+1 };
      case "RESET_COUNT":
        return { ...state, count: 0 };
     
    default:
      return state;
  }
}

var initial={
    count:0
}

export default reducer;