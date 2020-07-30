const initialState = {
  facts: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    case "GET_FACT": {
      state.facts.unshift({
        id: Math.random(),
        fact: action.payload,
        favorite: false
      })
      let clonedFacts=[...state.facts]
      return {
        ...state,
        facts: clonedFacts
      };
    }
    case "MAKE_FAV": {
      const clonedFacts = [...state.facts];
      for (var i in clonedFacts) {
        if (clonedFacts[i].id == action.payload) {
          clonedFacts[i].favorite = !clonedFacts[i].favorite;
          return {
            ...state,
            facts: clonedFacts
          };
        }
      }
    }

    case "GET_FAV": {
      return {
        ...state
      };
    }
    case "REMOVE_FACT": {
      localStorage.clear();
      return {
        ...state,
        facts: []
      }
    }
    case "REMOVE_FAV": {
      const clonedFacts = [...state.facts];
      for (var i in clonedFacts) {
        
          clonedFacts[i].favorite = false;
         
      }
       return {
            ...state,
            facts: clonedFacts
          };
        
    }

    default: {
      return state;
    }
  }
}
