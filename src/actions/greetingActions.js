const fetchGreetingFailure = (error) => ({
  type: 'FETCH_GREETING_FAILURE',
  payload: error,
});

const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/random_greeting');
    const data = await response.json();

    dispatch({
      type: 'FETCH_GREETING_SUCCESS',
      payload: data.message,
    });
  } catch (error) {
    dispatch(fetchGreetingFailure(error));
  }
};

export default fetchGreeting;
