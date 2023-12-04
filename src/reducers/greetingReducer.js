// Initial state of the greeting feature
const initialState = {
  greeting: null, // This will store the greeting message
  error: null, // This will store any error messages
};

// Reducer function for greeting actions
const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GREETING_SUCCESS':
      // Handle action for successful greeting fetch
      return {
        ...state,
        greeting: action.payload,
        error: null,
      };

    case 'FETCH_GREETING_FAILURE':
      // Handle action for failed greeting fetch
      return {
        ...state,
        greeting: null,
        error: action.payload,
      };

    default:
      // Return the current state if action type is not matched
      return state;
  }
};

export default greetingReducer;
