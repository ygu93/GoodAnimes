import merge from 'lodash/merge';

const LoadingReducer = (state = false, action) => {
  Object.freeze(state);

  if(action.type.includes("REQUEST")){
    return true;
    }
  else if(action.type.includes("RECEIVE")){
    return false;
  }else if(action.type.includes("DESTROY")){
    return true;
  }else if(action.type.includes("CREATE")){
    return true;
  }else if(action.type.includes("REMOVE")){
    return false;
  }else{
    return state;
  }
};


export default LoadingReducer;
