const initialState = {
  number: 0
};

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT': {
      state.number += 1
      return { ...state }
    };
    default: return state;
  }
};

export default reducers;
