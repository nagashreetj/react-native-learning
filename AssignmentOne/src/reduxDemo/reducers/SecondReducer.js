
  
  const reducerByCount=(state =initial_count_by_value, action) =>{
    switch (action.type) {
      
        case "INCREASE_COUNT_BY_VALUE":
        return { ...state, count_by_value: state.count_by_value+action.value };
        case "RESET_COUNT":
        return { ...state, count_by_value: 0 };
     
      default:
        return state;
    }
  }
  
  var initial_count_by_value={
    count_by_value:0
  }
    export default reducerByCount;